const { Schema, model } = require("mongoose");

const authSchema = new Schema(
  {
    name: { type: String, required: true },
    password: {
      type: String,
      minlength: 5,
      required: true,
    },
    email: {
      type: String,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "veillez donner un mail conforme",
      ],
      required: true,
    //   unique: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Auth", authSchema);
