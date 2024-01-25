const { Schema, model } = require("mongoose");

const classSchema = new Schema(
  {
    name: { type: String, unique: true },
    numberOfStudents: { type: Number, default: 0 },
    LisOfStudents: {
      type: [""],
    },
  },
  { timestamps: true }
);
module.exports = model("ClassSchool", classSchema);
