const { connect } = require("mongoose");

const connectDB = async (url) => {
  await connect(url);
  console.log(`connecter au DB `);
};
module.exports = connectDB;
