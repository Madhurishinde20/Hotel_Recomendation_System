let bcrypt = require("bcryptjs");
let regModel = require("../models/regmodel.js");

exports.regserviceLogic = async (username, useremail, password, contact, type) => {
  try {
    const hashedPassword = bcrypt.hashSync(password, 8);
    const result = await regModel.saveRegData(username, useremail, hashedPassword, contact, type);
    return result;
  } catch (err) {
    console.error("Service error:", err);
    throw new Error("Failed to register user");
  }
};

exports.getOriginalPassword = (username) => {
  return regModel.getPasswordFromDB(username);
};

