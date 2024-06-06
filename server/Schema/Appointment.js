

// import mongoose from 'mongoose';

// const appointmentSchema = new mongoose.Schema({
//     user: {
//       type: String,
//       required: true,
//     },
//     date: {
//       type: String,
//       required: true,
//     },
//     time: {
//       type: String,
//       required: true,
//     },
//     details: {
//       type: String,
//       required: true,
//     },
//   },
//   {
//     timestamps: true
// });

//  export default  mongoose.model('Appointment', appointmentSchema);


import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
    user: {
      fullname: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'approved'],
      default: 'pending',
    },
  },
  {
    timestamps: true
});

export default mongoose.model('Appointment', appointmentSchema);




