import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    resetToken: String,
    CreatedAt: { type: Date, default: Date.now },
});

const AuthModel = mongoose.model("AuthModel", userSchema);

export default AuthModel;
