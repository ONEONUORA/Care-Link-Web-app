


import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { nanoid } from 'nanoid';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import 'dotenv/config';
import bodyParser from 'body-parser';
import sendMail from './mailer.js';

// Import models
import User from './Schema/User.js';
import Appointment from './Schema/Appointment.js';

const server = express();
const PORT = process.env.PORT || 3000;

// Regular expressions
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

// Middleware
server.use(express.json());
server.use(cors());
server.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.DB_LOCATION, { autoIndex: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

 // JWT Middleware
const verifyToken = (req, res, next) => {

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(" ")[1];

    if(token == null){
        return res.status(401).json({error: "No access token"})
    }

    jwt.verify(token, process.env.SECRET_ACCESS_KEY, (err, user) =>{
        if(err) {
            return res.status(403).json({error: "Access token is invalid"})
        }

        req.user = user.id
        req.admin = user.admin
        next()
    })
};

// Utility functions
const formatDatatoSend = (user) => {
    const access_token = jwt.sign({ id: user._id, admin: user.admin }, process.env.SECRET_ACCESS_KEY);
    return {
        access_token,
        profile_img: user.personal_info.profile_img,
        username: user.personal_info.username,
        fullname: user.personal_info.fullname,
        role: user.personal_info.role,
        email: user.personal_info.email,
        isAdmin: user.admin
    };
}



const generateUsername = async (email) => {
    let username = email.split("@")[0];
    let isUsernameNotUnique = await User.exists({ "personal_info.username": username }).then(result => result);

    if (isUsernameNotUnique) {
        username += nanoid().substring(0, 5);
    }

    return username;
}

// Routes
server.post("/signup", async (req, res) => {
    const { fullname, email, password, role } = req.body;

    if (fullname.length < 3) {
        return res.status(403).json({ "error": "Fullname must be at least 3 letters long" });
    }

    if (!email.length) {
        return res.status(403).json({ "error": "Enter Email" });
    }

    if (!emailRegex.test(email)) {
        return res.status(403).json({ "error": "Email Is Invalid" });
    }

    if (!passwordRegex.test(password)) {
        return res.status(403).json({ "error": "password should be 6 - 20 characters long with a numeric, 1 lowercase and 1 uppercase letter" });
    }

    const validRoles = ['patient', 'doctor'];
    if (!role || !validRoles.includes(role)) {
        return res.status(403).json({ "error": "Role must be either 'patient' or 'doctor'" });
    }

    try {
        const hashed_password = await bcrypt.hash(password, 10);
        const username = await generateUsername(email);

        const user = new User({
            personal_info: { fullname, email, password: hashed_password, role, username }
        });

        await user.save();
        return res.status(200).json(formatDatatoSend(user));
    } catch (err) {
        if (err.code === 11000) {
            return res.status(500).json({ "error": "Email already exists" });
        }
        return res.status(500).json({ "error": err.message });
    }
});

server.post("/signin", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ "personal_info.email": email });

        if (!user) {
            return res.status(403).json({ "error": "Email not found" });
        }

        const result = await bcrypt.compare(password, user.personal_info.password);

        if (!result) {
            return res.status(403).json({ "error": "Incorrect Password" });
        } else {
            return res.status(200).json(formatDatatoSend(user));
        }
    } catch (err) {
        console.log(err.message);
        return res.status(500).json({ "error": err.message });
    }
});


// Appointment route

server.post('/api/appointments', async (req, res) => {
    const {user:{fullname, email} , date, time, details } = req.body;

    if (!fullname || !email || !date || !time || !details) {
        return res.status(400).send({ error: 'All fields are required.' });
    }

    const newAppointment = new Appointment({ user: { fullname, email }, date, time, details });

    try {
        await newAppointment.save();
        res.status(201).send(newAppointment);
    } catch (error) {
        res.status(400).send(error);
    }
});



  // Get all appointments for a single doctor
  server.get('/api/appointments',verifyToken, async (req, res) => {
    try {
        const appointments = await Appointment.find(); // Adjust the query as needed
        res.json(appointments);
    } catch (error) {
        console.error('Error fetching appointments:', error);
        res.status(500).json({ message: 'Server error, please try again later.' });
    }
});

/********************************endpoint to get patient unique appointment*************************** */
server.get('/api/appointments/patient',verifyToken, async (req, res) => {
    const { email } = req.query;

    if (!email) {
        return res.status(400).send({ error: 'Email is required.' });
    }

    try {
        const appointments = await Appointment.find({ 'user.email': email });
        res.status(200).send(appointments);
    } catch (error) {
        res.status(500).send(error);
    }
});


// Add endpoint to update appointment status
server.patch('/api/appointments/:id/status',verifyToken, async (req, res) => {
    const { id } = req.params;
    let isAdmin = req.admin;
    const { status } = req.body;
  
    if(isAdmin){

        if (!['pending', 'confirmed'].includes(status)) {
            return res.status(400).send({ error: 'Invalid status' });
          }
        
          try {
            const appointment = await Appointment.findByIdAndUpdate(
              id,
              { status },
              { new: true }
            ).populate('user'); // Assuming 'user' is a reference field in your Appointment schema
        
            if (!appointment) {
              return res.status(404).send({ error: 'Appointment not found' });
            }

            if (status === 'confirmed') {
                const patientEmail = appointment.user.email;
                const mailSubject = 'PATIENT APPOINTMENT CONFIRMATION';
                const mailText = `Dear ${appointment.user.fullname},\n\nYour appointment with a Care-Link doctor has been confirmed.\n\n A Zoom meeting link will be sent to you via email within the next 5 minutes.
                   \n\nAppointment Details:\nDate: ${appointment.date}\nTime: ${appointment.time}\nConsultation Details: ${appointment.details}\n\nThank you for trusting us,\n\n care-link Team`;
                sendMail(patientEmail, mailSubject, mailText);
              }
        
            res.status(200).send(appointment);
          } catch (error) {
            res.status(500).send(error);
          }
    }else{
        return res.status(500).json({ error: "you dont have permission to decide the status of the appointment booking" })
    }


  });
  

// Start server
server.listen(PORT, () => {
    console.log(`Server started successfully on port ${PORT}`);
});
