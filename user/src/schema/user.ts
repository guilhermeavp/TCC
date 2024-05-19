import mongoose from 'mongoose';

// Define a schema
const Schema = mongoose.Schema;

const userModel = new Schema({
  email: { type: String, required: true, index: { unique: true } },
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  admin: { type: Boolean, required: true }
});

export const SomeModel = mongoose.model('auth', userModel);