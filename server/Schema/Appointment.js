// import mongoose from "mongoose";

// const appointmentSchema = new mongoose.Schema({
//     patient: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User',
//         required: true,
//     },
//     doctor: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User',
//         required: true,
//     },
//     appointmentDate: {
//         type: Date,
//         required: true,
//     },
//     status: {
//         type: String,
//         enum: ['pending', 'confirmed', 'cancelled', 'completed'],
//         default: 'pending',
//     },
// }, {
//     timestamps: true
// });

// export default mongoose.model('Appointment', appointmentSchema);

// models/Appointment.js



// import mongoose from "mongoose";

// const appointmentSchema = new mongoose.Schema({
//     patientId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User',
//         required: true
//     },
//     date: {
//         type: Date,
//         required: true
//     },
//     medicalHistory: {
//         type: String,
//         required: true
//     },
//     status: {
//         type: String,
//         default: 'Pending'
//     }
// });

// const Appointment = mongoose.model('Appointment', appointmentSchema);
// module.exports = Appointment;

// models/Appointment.js
import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    medicalHistory: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;




