
// import express from 'express';
// import mongoose from 'mongoose';
// import bcrypt from 'bcrypt';
// import { nanoid } from 'nanoid';
// import jwt from "jsonwebtoken";
// import cors from "cors"
// import "dotenv/config"
// import bodyParser from "body-parser"
// /**********************************schema/models************************************ */
// import User from "./Schema/User.js"
// import Appointment from "./Schema/Appointment.js"



// const server = express();
// const PORT =  3000;


// let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email
// let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password


// server.use(express.json());
// server.use(cors())
// server.use(bodyParser.json());


// mongoose.connect(process.env.DB_LOCATION, {
//     autoIndex: true
// })



// const formatDatatoSend = (user) =>{

//     const access_token = jwt.sign({ id: user._id },  process.env.SECRET_ACCESS_KEY)

//     return{
//         access_token,
//         profile_img : user.personal_info.profile_img,
//         username : user.personal_info.username,
//         fullname : user.personal_info.fullname,
//         role : user.personal_info.role

//     }
// }

// const generateUsername = async (email) =>{
//     let username = email.split("@")[0];
//     let isUsernameNotUnique = await User.exists({"personal_info.username": username}).then((result) => result)

//     isUsernameNotUnique ? username += nanoid().substring(0, 5) : " ";

//     return username
// }


// /**************************************************sign up route********************************************************** */
// server.post("/signup", (req,res) =>{

//         let { fullname, email, password, role} = req.body;

//         /*****************************************validation*********************************************** */

//         if(fullname.length < 3){
//             return res.status(403).json({"error": "Fullname must be at least 3 letters long"})
//         }

//         if(!email.length){
//             return res.status(403).json({"error": "Enter Email"})
//         }
//         if(!emailRegex.test(email)){
//             return res.status(403).json({"error": "Email Is Invalid"})
//         }
//         if(!passwordRegex.test(password)){
//             return res.status(403).json({"error": "password should be 6 - 20 characters long with a numeric, 1 lowercase and 1 uppercase letter"})
//         }
//         const validRoles = ['patient', 'doctor'];
//         if (!role || !validRoles.includes(role)) {
//             return res.status(403).json({ "error": "Role must be either 'patient' or 'doctor'" });
//         }

//         bcrypt.hash(password, 10,  async(err, hashed_password) =>{
            
//                 let username =  await generateUsername(email);

//                 let user = new User({
//                     personal_info: { fullname, email, password: hashed_password , role, username}
//                 })

//                 user.save().then((u) => {
//                     return res.status(200).json(formatDatatoSend(u))
//                 })
//                 .catch(err =>{
//                     if(err.code == 11000){
//                         return res.status(500).json({"error": "Email already exists"})
//                     }
//                     return res.status(500).json({"error": err.message})
//                 })
//         })

       
// })


// /****************************************************signin route********************************************* */

// server.post("/signin", (req,res) =>{

//     let {email, password } = req.body;

//     User.findOne({ "personal_info.email": email  })

//     .then((user) =>{
//         if(!user){
//             return res.status(403).json({"error": "Email not found"})
//         }
       
//         bcrypt.compare(password, user.personal_info.password, (err, result) =>{

//             if(err) {
//                 return res.status(403).json({"error": "Error Occured while login, pls try again"})
//             }

//             if(!result){
//                 return res.status(403).json({"error": "Incorrect Password"})
//             }else{
//                 return res.status(200).json(formatDatatoSend(user))
//             }
//         })

//     })
//     .catch(err => {
//         console.log(err.message);
//         return res.status(500).json({"error": err.message})
//     })
// })

// /*************************************************************Appointment.js*********************************************************** */
// const verifyToken = (req, res, next) => {
//     const token = req.header('Authorization')?.split(' ')[1];
//     if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

//     try {
//         const decoded = jwt.verify(token, ' process.env.SECRET_ACCESS_KEY');
//         req.user = decoded;
//         next();
//     } catch (ex) {
//         res.status(400).json({ message: 'Invalid token.' });
//     }
// };
// app.post('/api/appointments', verifyToken, async (req, res) => {
//     try {
//         const { userId, date, medicalHistory } = req.body;

//         const newAppointment = new Appointment({
//             userId,
//             date,
//             medicalHistory
//         });

//         await newAppointment.save();
//         res.status(201).json(newAppointment);
//     } catch (error) {
//         res.status(500).json({ message: 'Error booking appointment', error });
//     }
// });

// server.listen(PORT,() =>{
//     console.log("server started successfully on port " + PORT)
// })


import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { nanoid } from 'nanoid';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import 'dotenv/config';
import bodyParser from 'body-parser';

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

// Utility functions
const formatDatatoSend = (user) => {
    const access_token = jwt.sign({ id: user._id }, process.env.SECRET_ACCESS_KEY);
    return {
        access_token,
        profile_img: user.personal_info.profile_img,
        username: user.personal_info.username,
        fullname: user.personal_info.fullname,
        role: user.personal_info.role,
        email: user.personal_info.email
    };
}

// JWT Middleware
const verifyToken = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

    try {
        const decoded = jwt.verify(token, process.env.SECRET_ACCESS_KEY);
        req.user = decoded;
        next();
    } catch (ex) {
        res.status(400).json({ message: 'Invalid token.' });
    }
};

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

/********************************endpoint to update the appointment status*************************** */
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
    const { status } = req.body;
  
    if (!['pending', 'confirmed'].includes(status)) {
      return res.status(400).send({ error: 'Invalid status' });
    }
  
    try {
      const appointment = await Appointment.findByIdAndUpdate(
        id,
        { status },
        { new: true }
      );
  
      if (!appointment) {
        return res.status(404).send({ error: 'Appointment not found' });
      }
  
      res.status(200).send(appointment);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  

// Start server
server.listen(PORT, () => {
    console.log(`Server started successfully on port ${PORT}`);
});
