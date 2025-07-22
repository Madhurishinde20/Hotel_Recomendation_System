require('dotenv').config();
let mysql=require("mysql");
 let conn=mysql.createConnection({
       host: process.env.DB_HOST,
       user: process.env.DB_USER,
       password: process.env.DB_PASSWORD,
       database: process.env.DB_NAME
 });
 conn.connect((err)=>{
     if(err){
        console.log("Database not connected");
     }
     else{
        console.log("Database is Connected");
     }
 });
 module.exports=conn;
 