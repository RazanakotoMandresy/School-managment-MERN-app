const { Schema, model, Types } = require("mongoose");

const classSchema = new Schema(
  {
    name: { type: String, unique: true },
    numberOfStudents: { type: Number, default: 0 },
    LisOfStudents: {
      type: [""],
    },
    createdBy: { type: Types.ObjectId },
  },
  { timestamps: true }
);
module.exports = model("ClassSchool", classSchema);
