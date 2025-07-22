let bcrypt=require("bcryptjs");
let password="1234";
let hashedPassword=bcrypt.hashSync(password,8);

console.log(hashedPassword);