const { Schema, model, Types } = require("mongoose");

const studentsSchema = new Schema(
  {
    name: { type: String, required: true },
    classSchool: { type: Types.ObjectId, required: true },
    numberAtClass: { type: Number, required: true, default: 1 },
    profil: String,
  },
  { timestamps: true }
);
module.exports = model("Student", studentsSchema);
