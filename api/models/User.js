const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    coverPicture: {
      type: String,
      default: "",
    },
    followers: {
      type: Array,
      default: [],
    },
    followings: {
      type: Array,
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    desc: {
      type: String,
      max: 50,
    },
    city: {
      type: String,
      max: 50,
    },
    institute: {
      type: String,
      max: 50,
    },
    from: {
      type: String,
      max: 50,
    },
    role: {
      type: Number,
      enum: [1, 2, 3],
    },
    achievements: {
      type: String,
      max: 500,
    },
    communities: {
      type: String,
      max: 500,
    },
    yearOfGraduating: {
      type: Number
    },
    company: {
      type: String,
      max: 500,
    },
    research: {
      type: String,
      max: 500,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
