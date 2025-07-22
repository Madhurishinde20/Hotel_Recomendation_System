let conn = require("../config/db.js");
exports.saveRegData = (...regData) => {
  return new Promise((resolve, reject) => {
    conn.query( "insert into usermaster (username, useremail, password, contact, type) values (?, ?, ?, ?, ?)",
      [regData[0], regData[1], regData[2], regData[3], regData[4]],(err, result) => {
        if (err) {
          console.error("DB error:", err);
          reject(err);
        } else {
          resolve("success.");
        }
      }
    );
  });
};

exports.getPasswordFromDB=(username)=>{
    return new Promise((resolve, reject) => {
        conn.query("select userid,password,username from usermaster where username=?",
            [username],(err,result)=>{
                    if(err){
                        reject(err);
                    }
                    else if(result.length===0){
                        resolve(null);
                    }
                    else {
                        let user=result[0];
                        resolve(user);
                    }
            });
  });
}
exports.getdata=()=>
{
    return new Promise((resolve,reject)=>
    {
        conn.query("select * from hotelmaster",(err,result)=>
        {
            if(err)
            {
              console.log(err);
              reject(err);
            }
            else
            {
              resolve(result);
            }
        });
    });
}

exports.getuserid=(name)=>
{
  return new Promise((resolve,reject)=>
  {
    conn.query("select userid from usermaster where username=?",[name],(err,result)=>
  {
      if(err)
      {
        resolve([])
      }
      else
      {
        resolve(result[0]);
      }
  })
  })
}