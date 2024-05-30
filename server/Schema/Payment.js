
import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'failed'],
        default: 'pending',
    },
    paymentMethod: {
        type: String,
        enum: ['credit card', 'paypal', 'bank transfer'], // Add other payment methods as needed
        required: true,
    },
    description: {
        type: String,
        maxlength: 255,
        default: '',
    }
}, {
    timestamps: true
});

export default mongoose.model('Payment', paymentSchema);
