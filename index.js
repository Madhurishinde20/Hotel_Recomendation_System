let app=require("./src/app.js");

require('dotenv').config();

app.listen(process.env.PORT,()=>{
   console.log("Server started ");
});