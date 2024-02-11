const { Schema, model, Types } = require("mongoose");

const studentsSchema = new Schema(
  {
    name: { type: String, required: true },
    classSchool: { type: Types.ObjectId, required: true },
    numberAtClass: { type: Number, required: true, default: 1 },
    profil: String,
    classesName: { type: String },
    IdCreator: { type: Types.ObjectId, required: true },
  },
  { timestamps: true }
);
module.exports = model("Student", studentsSchema);
