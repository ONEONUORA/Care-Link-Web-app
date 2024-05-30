


import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    type: {
        type: String,
        enum: ['appointment', 'message', 'general'],
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    read: {
        type: Boolean,
        default: false,
    },
    meetingLink: {
        type: String,
        default: '',
    }
}, {
    timestamps: true
});

export default mongoose.model('Notification', notificationSchema);
