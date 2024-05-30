

import mongoose from "mongoose";

const profileImgsNameList = ["Garfield", "Tinkerbell", "Annie", "Loki", "Cleo", "Angel", "Bob", "Mia", "Coco", "Gracie", "Bear", "Bella", "Abby", "Harley", "Cali", "Leo", "Luna", "Jack", "Felix", "Kiki"];
const profileImgsCollectionsList = ["notionists-neutral", "adventurer-neutral", "fun-emoji"];

const userSchema = mongoose.Schema({
    personal_info: {
        fullname: {
            type: String,
            lowercase: true,
            required: true,
            minlength: [3, 'Fullname must be at least 3 characters long'],
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            minlength: [8, 'Password must be at least 8 characters long'],
        },

        profile_img: {
            type: String,
            default: function() {
                const collection = profileImgsCollectionsList[Math.floor(Math.random() * profileImgsCollectionsList.length)];
                const seed = profileImgsNameList[Math.floor(Math.random() * profileImgsNameList.length)];
                return `https://api.dicebear.com/6.x/${collection}/svg?seed=${seed}`;
            },
        },
        
        role: {
            type: String,
            enum: ['patient', 'doctor'],
            required: true,
        },
        username: {
            type: String,
            minlength: [3, 'Username must be at least 3 characters long'],
            unique: true,
        },
        phone_number: {
            type: Number,
            default: "",
        },
        bio: {
            type: String,
            maxlength: [200, 'Bio should not be more than 200 characters'],
            default: "",
        },
        specialization: {
            type: String,
            default: "",
            validate: {
                validator: function(value) {
                    return this.role === 'doctor' || !value;
                },
                message: 'Only doctors can have a specialization.',
            },
        },
    },
    social_links: {
        youtube: {
            type: String,
            default: "",
        },
        instagram: {
            type: String,
            default: "",
        },
        facebook: {
            type: String,
            default: "",
        },
        twitter: {
            type: String,
            default: "",
        },
        website: {
            type: String,
            default: "",
        },
    }

}, {
    timestamps: true
});

// export default mongoose.model("User", userSchema);

export default mongoose.model("users", userSchema);
 


