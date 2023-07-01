const express = require("express");
const app = express();
const mysql = require("mysql2");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const { request } = require("https");
const port = 4000;
const mailer = require("nodemailer");

const PATH = "./public/images";
const upload = multer({
  storage: multer.diskStorage({
    destination: PATH,
    filename: function (req, file, cb) {
      let origialname = file.originalname;
      let ext = origialname.split(".").pop();
      let filename = origialname.split(".").slice(0, -1).join(".");
      cb(null, filename + "." + ext);
    },
  }),
});

//use express static folder
app.use(cors());
// ap.p.use(express.static("./public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_delish_delights",
  port: 3306,
});

//Check Database Connection
app.use(express.static("public"));
db.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log("Database Connected");
});

app.listen(port, () => {
  console.log("Server is Running");
});

app.get("/Add", (req, res) => {
  res.send({
    message: "Hai",
  });
});

//District insert

app.post("/district", (req, res) => {
  let qry = `select * from tbl_district where district_name='${req.body.district_name}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else if (result.length > 0) {
      res.send({
        message: "Name Already Exist",
      });
    } else {
      let qry3 =
        "insert into tbl_district(district_name)values('" +
        req.body.district_name +
        "')";
      db.query(qry3, (err, result) => {
        if (err) {
          console.log("Error");
        } else {
          res.send({
            message: "Data Saved",
          });
        }
      });
    }
  });
});

//District Select

app.get("/district", (req, res) => {
  let qry = `select * from tbl_district `;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else if (result.length > 0) {
      res.send({
        district: result,
      });
    } else {
      res.send({
        message: "Data Not Found",
      });
    }
  });
});

// District delete

app.delete("/district/:id", (req, res) => {
  let id = req.params.id;
  let qry = `delete from tbl_district where district_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data Deleted",
        qry: qry,
      });
    }
  });
});

//Category insert

app.post("/Category", (req, res) => {
  let qry4 =
    "insert into tbl_category (category_name) values ('" +
    req.body.category_name +
    "')";
  db.query(qry4, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data Saved",
      });
    }
  });
});

//Category Select

app.get("/Category", (req, res) => {
  let qry = `select * from tbl_category `;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else if (result.length > 0) {
      res.send({
        Category: result,
      });
    } else {
      res.send({
        message: "Data Not Found",
      });
    }
  });
});

// Category delete

app.delete("/Category/:id", (req, res) => {
  let id = req.params.id;
  let qry = `delete from tbl_category where category_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data Deleted",
        qry: qry,
      });
    }
  });
});

//Place insert

app.post("/Place", (req, res) => {
  let qry5 =
    "insert into tbl_place (place_name,district_id) values ('" +
    req.body.place_name +
    "','" +
    req.body.district_id +
    "')";
  db.query(qry5, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data Saved",
      });
    }
  });
});

//Place Select

app.get("/Place", (req, res) => {
  let qry =
    "select * from tbl_place p inner join tbl_district d on d.district_id=p.district_id ";
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else if (result.length > 0) {
      res.send({
        place: result,
      });
    } else {
      res.send({
        message: "Data Not Found",
      });
    }
  });
});

//Place Condition

app.get("/PlaceCondition", (req, res) => {
  let qry =
    " select * from tbl_place where district_id='" +
    req.body.district_id +
    "' ;";
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else if (result.length > 0) {
      res.send({
        place: result,
      });
    } else {
      res.send({
        message: "Data Not Found",
      });
    }
  });
});

// Place delete

app.delete("/Place/:id", (req, res) => {
  let id = req.params.id;
  let qry = `delete from tbl_place where place_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data Deleted",
        qry: qry,
      });
    }
  });
});

// Place Ajax

app.get("/ajaxplace/:pla", (req, res) => {
  let pla = req.params.pla;
  let qry = ` select * from tbl_place where district_id='${pla}'`;
  db.query(qry, (err, result) => {
    if (err) {
      // console.log("Error");
    } else if (result.length > 0) {
      res.send({
        place: result,
      });
    } else {
      res.send({
        message: "Data Not Found",
      });
    }
  });
});

//Subcategory insert

app.post("/Subcategory", (req, res) => {
  let qry6 =
    "insert into tbl_subcategory (subcategory_name,category_id) values ('" +
    req.body.subcategory_name +
    "','" +
    req.body.category_id +
    "')";
  db.query(qry6, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data Saved",
      });
    }
  });
});

//Subcategory Select

app.get("/Subcategory", (req, res) => {
  let qry = `select * from tbl_subcategory s inner join tbl_category c on c.category_id=s.category_id `;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else if (result.length > 0) {
      res.send({
        Subcategory: result,
      });
    } else {
      res.send({
        message: "Data Not Found",
      });
    }
  });
});

// Subcategory delete

app.delete("/Subcategory/:id", (req, res) => {
  let id = req.params.id;
  let qry = `delete from tbl_subcategory where subcategory_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data Deleted",
        qry: qry,
      });
    }
  });
});

// User Insert

app.post("/registration", upload.single("photo"), (req, res) => {
  var imgsrc = `http://127.0.0.1:${port}/images/${req.file.filename}`;
  let Email = req.body.email;
  let OTP = req.body.otp;
  let qry1 =
    "INSERT INTO tbl_user(user_name, user_contact, user_email, user_photo, place_id, user_password) VALUES ('" +
    req.body.fname +
    " " +
    req.body.lname +
    "','" +
    req.body.contact +
    "','" +
    req.body.email +
    "','" +
    imgsrc +
    "','" +
    req.body.plc +
    "','" +
    req.body.password +
    "')";
  db.query(qry1, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      let content = `<html> 
      <head> 
          <title>OTP Email</title> 
          <style> 
              /* Define the style for the container */ 
              .container { 
                  width: 100%; 
                  max-width: 600px; 
                  margin: 0 auto; 
                  padding: 20px; 
                  background-color: #f2f2f2; 
                  font-family: Arial, sans-serif; 
              } 
       
              /* Define the style for the OTP box */ 
              .otp-box { 
                  width: 90%; 
                   max-width: 600px; 
                  background-color: #ffffff; 
                  padding: 20px; 
                  border-radius: 5px; 
                  text-align: center; 
              } 
       
              /* Define the style for the OTP text */ 
              .otp-text { 
                  font-size: 24px; 
                  font-weight: bold; 
                  color: #333333; 
              } 
       
              /* Define the style for the OTP number */ 
              .otp-number { 
                  font-size: 48px; 
                  font-weight: bold; 
                  color: #007bff; 
                  margin-top: 10px; 
              } 
       
              /* Define the style for the instructions text */ 
              .instructions { 
                  font-size: 14px; 
                  color: #666666; 
                  margin-top: 10px; 
              } 
          </style> 
      </head> 
      <body> 
          <!-- Display OTP in an improved email view --> 
          <div class="container"> 
              <div class="otp-box"> 
                  <div class="otp-text">One-Time Password (OTP)</div> 
                  <div class="otp-number">${OTP}</div> 
                  <div class="instructions">Please use the above OTP to verify your account.</div> 
              </div> 
          </div> 
      </body> 
      </html> 
      `;
      sendEmail(Email, content);

      let qry14 = "select max(user_id) as id from tbl_user";
      db.query(qry14, (err, result) => {
        if (err) {
          console.log("Error");
        } else {
          res.send({
            u_id: result,
            message: "selected",
          });
        }
      });
    }
  });
});

var transporter = mailer.createTransport({
  service: "gmail",
  auth: {
    user: "contact.delishdelights@gmail.com", //from email Id
    pass: "ufwoegebdawxyfsg", // App password created from google account
  },
});
function sendEmail(to, content) {
  const mailOptions = {
    from: "contact.delishdelights@gmail.com", //from email Id for recipient can view
    to,
    subject: "Verification",
    html: content,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sented");
    }
  });
}

//Verfication OTP user

app.post("/regVerfication/:v_id", (req, res) => {
  let v_id = req.params.v_id;
  let qry15 = `update tbl_user set user_status=1 where user_id=${v_id}`;
  db.query(qry15, (err, result) => {

    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Verified",
      });
    }
  });
});

//Resend OTP

app.post("/Resend/", (req, res) => {
  let Email = req.body.email;
  let otp = req.body.otp;
  let content = `<html> 
  <head> 
      <title>OTP Email</title> 
      <style> 
          /* Define the style for the container */ 
          .container { 
              width: 100%; 
              max-width: 600px; 
              margin: 0 auto; 
              padding: 20px; 
              background-color: #f2f2f2; 
              font-family: Arial, sans-serif; 
          } 
   
          /* Define the style for the OTP box */ 
          .otp-box { 
              width: 90%; 
               max-width: 600px; 
              background-color: #ffffff; 
              padding: 20px; 
              border-radius: 5px; 
              text-align: center; 
          } 
   
          /* Define the style for the OTP text */ 
          .otp-text { 
              font-size: 24px; 
              font-weight: bold; 
              color: #333333; 
          } 
   
          /* Define the style for the OTP number */ 
          .otp-number { 
              font-size: 48px; 
              font-weight: bold; 
              color: #007bff; 
              margin-top: 10px; 
          } 
   
          /* Define the style for the instructions text */ 
          .instructions { 
              font-size: 14px; 
              color: #666666; 
              margin-top: 10px; 
          } 
      </style> 
  </head> 
  <body> 
      <!-- Display OTP in an improved email view --> 
      <div class="container"> 
          <div class="otp-box"> 
              <div class="otp-text">One-Time Password (OTP)</div> 
              <div class="otp-number">${otp}</div> 
              <div class="instructions">Please use the above OTP to verify your account.</div> 
          </div> 
      </div> 
  </body> 
  </html> 
  `;
  sendEmail(Email, content);
  res.send({
    message: "Verified",
  });
});

//User Select

app.get("/User", (req, res) => {
  let qry = `select * from tbl_user `;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else if (result.length > 0) {
      res.send({
        User: result,
      });
    } else {
      res.send({
        message: "Data Not Found",
      });
    }
  });
});

//User Update

app.post("/UserUpdate/:uid", upload.single("user_photo"), (req, res) => {
  var imgsrc = `http://127.0.0.1:${port}/images/${req.file.filename}`;

  let id = req.params.uid
  let qry6 =
    "UPDATE tbl_user SET user_name= '" + user_name + "',user_contact= '" + user_contact + "',user_email= '" + user_email + "',user_photo= '" + imgsrc + "' WHERE user_id=" + id
  db.query(qry6, (err, result) => {
    console.log(qry6);
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data Saved",
      });
    }
  });
});

//User Profile select

// app.get("/UserP/:h", (req, res) => {
//   let dat = req.params.h;
//   let qry =
//     `select * from tbl_user u inner join tbl_place p on u.place_id=p.place_id inner join tbl_district d on p.district_id=d.district_id where user_id = ` +
//     dat;
//   db.query(qry, (err, result) => {
//     if (err) {
//       console.log("Error");
//     } else if (result.length > 0) {
//       res.send({
//         User: result,
//       });
//     } else {
//       res.send({
//         message: "Data Not Found",
//       });
//     }
//   });
// });

//Profile select

app.get("/User/:user_id", (req, res) => {
  let uid = req.params.user_id;
  let qry =
    `select * from tbl_user  where user_id =${uid};`
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else if (result.length > 0) {
      res.send({
        User: result,
      });
    } else {
      res.send({
        message: "Data Not Found",
      });
    }
  });
});
//Restaurant insert

app.post("/Restaurant", upload.single("photo"), (req, res) => {
  var imgsrc = `http://127.0.0.1:${port}/images/${req.file.filename}`;
  let Email = req.body.email;
  let OTP = req.body.otp;
  let qry8 =
    "INSERT INTO tbl_restaurant(restaurant_name,restaurant_address,restaurant_contact,restaurant_email,restaurant_password,restaurant_photo,place_id) VALUES ('" +
    req.body.rname +
    "','" +
    req.body.address +
    "','" +
    req.body.contact +
    "','" +
    req.body.email +
    "','" +
    req.body.password +
    "','" +
    imgsrc +
    "','" +
    req.body.plc +
    "')";
  db.query(qry8, (err, result) => {
    console.log(qry8);
    if (err) {
      console.log("error");
    } else {
      let content = `<html> 
      <head> 
          <title>OTP Email</title> 
          <style> 
              /* Define the style for the container */ 
              .container { 
                  width: 100%; 
                  max-width: 600px; 
                  margin: 0 auto; 
                  padding: 20px; 
                  background-color: #f2f2f2; 
                  font-family: Arial, sans-serif; 
              } 
       
              /* Define the style for the OTP box */ 
              .otp-box { 
                  width: 90%; 
                   max-width: 600px; 
                  background-color: #ffffff; 
                  padding: 20px; 
                  border-radius: 5px; 
                  text-align: center; 
              } 
       
              /* Define the style for the OTP text */ 
              .otp-text { 
                  font-size: 24px; 
                  font-weight: bold; 
                  color: #333333; 
              } 
       
              /* Define the style for the OTP number */ 
              .otp-number { 
                  font-size: 48px; 
                  font-weight: bold; 
                  color: #007bff; 
                  margin-top: 10px; 
              } 
       
              /* Define the style for the instructions text */ 
              .instructions { 
                  font-size: 14px; 
                  color: #666666; 
                  margin-top: 10px; 
              } 
          </style> 
      </head> 
      <body> 
          <!-- Display OTP in an improved email view --> 
          <div class="container"> 
              <div class="otp-box"> 
                  <div class="otp-text">One-Time Password (OTP)</div> 
                  <div class="otp-number">${OTP}</div> 
                  <div class="instructions">Please use the above OTP to verify your account.</div> 
              </div> 
          </div> 
      </body> 
      </html> 
      `;
      sendEmail(Email, content);

      let qry14 = "select max(restaurant_id) as id from tbl_restaurant";
      db.query(qry14, (err, result) => {
        if (err) {
          console.log("Error");
        } else {
          res.send({
            r_id: result,
            message: "selected",
          });
        }
      });
    }
  });
});

//Restaurant select

app.get("/Restaurant", (req, res) => {
  let qry = `select * from tbl_restaurant `;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else if (result.length >= 0) {
      res.send({
        Restaurant: result,
      });
    } else {
      res.send({
        message: "Data Not Found",
      });
    }
  });
});

// Restaurant delete

app.delete("/Restaurant/:id", (req, res) => {
  let id = req.params.id;
  let qry = `delete from tbl_restaurant where restaurant_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data Deleted",
        qry: qry,
      });
    }
  });
});

//Restaurant status

app.post("/ResAccept/:id", (req, res) => {
  let id = req.params.id;
  console.log(id);
  let qry9 = `UPDATE tbl_restaurant SET restaurant_status=1 where restaurant_id =${id}`;
  console.log(qry9);

  db.query(qry9, (err, result) => {
    if (err) {
      console.log("error");
    } else {
      res.send({
        message: "Data Saved",
      });
    }
  });
});

app.post("/ResReject/:id", (req, res) => {
  let id = req.params.id;
  console.log(id);
  let qry9 = `UPDATE tbl_restaurant SET restaurant_status=2 where restaurant_id =${id}`;
  console.log(qry9);

  db.query(qry9, (err, result) => {
    if (err) {
      console.log("error");
    } else {
      res.send({
        message: "Data Saved",
      });
    }
  });
});

//Verfication OTP Resaturant

app.post("/ResregVerfication/:v_id", (req, res) => {
  let v_id = req.params.v_id;
  let qry15 = `update tbl_restaurant set restaurant_verification=1 where restaurant_id=${v_id}`;
  db.query(qry15, (err, result) => {
    console.log(qry15);
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Verified",
      });
    }
  });
});

//Resend OTP Restaurant

app.post("/Resend/", (req, res) => {
  let Email = req.body.email;
  let otp = req.body.otp;
  let content = `<html> 
  <head> 
      <title>OTP Email</title> 
      <style> 
          /* Define the style for the container */ 
          .container { 
              width: 100%; 
              max-width: 600px; 
              margin: 0 auto; 
              padding: 20px; 
              background-color: #f2f2f2; 
              font-family: Arial, sans-serif; 
          } 
   
          /* Define the style for the OTP box */ 
          .otp-box { 
              width: 90%; 
               max-width: 600px; 
              background-color: #ffffff; 
              padding: 20px; 
              border-radius: 5px; 
              text-align: center; 
          } 
   
          /* Define the style for the OTP text */ 
          .otp-text { 
              font-size: 24px; 
              font-weight: bold; 
              color: #333333; 
          } 
   
          /* Define the style for the OTP number */ 
          .otp-number { 
              font-size: 48px; 
              font-weight: bold; 
              color: #007bff; 
              margin-top: 10px; 
          } 
   
          /* Define the style for the instructions text */ 
          .instructions { 
              font-size: 14px; 
              color: #666666; 
              margin-top: 10px; 
          } 
      </style> 
  </head> 
  <body> 
      <!-- Display OTP in an improved email view --> 
      <div class="container"> 
          <div class="otp-box"> 
              <div class="otp-text">One-Time Password (OTP)</div> 
              <div class="otp-number">${otp}</div> 
              <div class="instructions">Please use the above OTP to verify your account.</div> 
          </div> 
      </div> 
  </body> 
  </html> 
  `;
  sendEmail(Email, content);
  res.send({
    message: "Verified",
  });
});

//Admin insert

app.post("/Admin", (req, res) => {
  let qry9 =
    "INSERT INTO tbl_admin (admin_name, admin_email, admin_password) VALUES ('" +
    req.body.admin_name +
    "','" +
    req.body.admin_email +
    "','" +
    req.body.admin_password +
    "')";
  db.query(qry9, (err, result) => {
    if (err) {
      console.log("error");
    } else {
      res.send({
        message: "Data Saved",
      });
    }
  });
});

//Admin Select

app.get("/Admin", (req, res) => {
  let qry = `select * from tbl_admin `;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else if (result.length > 0) {
      res.send({
        Admin: result,
      });
    } else {
      res.send({
        message: "Data Not Found",
      });
    }
  });
});

//Blog insert

app.post("/Blog", upload.single("imgsrc"), (req, res) => {
  var imgsrc = `http://127.0.0.1:${port}/images/${req.file.filename}`;
  const blogContent = req.body.blog_content;
  const escapedBlogContent = blogContent.replace(/'/g, "''");
  let qry10 =
    "INSERT INTO tbl_blog (blog_title, blog_image, blog_content, user_id, blog_time) VALUES ('" +
    req.body.blog_title +
    "','" +
    imgsrc +
    "','" +
    escapedBlogContent +
    "','" +
    req.body.user_id +
    "',curdate())";
  db.query(qry10, (err, result) => {
    if (err) {
      console.log("error");
    } else {
      res.send({
        message: "Data Saved",
      });
    }
  });
});

//Blog Select

app.get("/Blog", (req, res) => {
  let qry = `select * from tbl_blog b inner join tbl_user u on u.user_id=b.user_id `;
  db.query(qry, (err, result) => {

    if (err) {
      console.log("Error");
    } else if (result.length > 0) {
      res.send({
        blog: result,
      });
    } else {
      res.send({
        message: "Data Not Found",
      });
    }
  });
});

// Blog delete

app.delete("/Blog/:id", (req, res) => {
  let id = req.params.id;
  let qry = `delete from tbl_blog where blog_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data Deleted",
        qry: qry,
      });
    }
  });
});

//Blog Post view 

app.get("/BlogPost/:id", (req, res) => {
  let id = req.params.id;
  let qry = `select * from tbl_blog where blog_id=${id} `;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else if (result.length > 0) {
      res.send({
        blog: result,
      });
    } else {
      res.send({
        message: "Data Not Found",
      });
    }
  });
});

//Comment Insert

app.post("/Comment", (req, res) => {
  let qry11 =
    "INSERT INTO tbl_comment (comment_date_time, comment_content, user_id, comment_rating) VALUES (curdate(),'" +
    req.body.comment_content +
    "','" +
    req.body.user_id +
    "','" +
    req.body.comment_rating +
    "')";
  db.query(qry11, (err, result) => {
    if (err) {
      console.log("error");
    } else {
      res.send({
        message: "Data Saved",
      });
    }
  });
});

app.post("/BlogComment", (req, res) => {
  let qry11 =
    "INSERT INTO tbl_comment (blog_id) VALUES ('" + req.body.blog_id + "')";
  db.query(qry11, (err, result) => {
    if (err) {
      console.log("error");
    } else {
      res.send({
        message: "Data Saved",
      });
    }
  });
});

app.post("/RecipeComment", (req, res) => {
  let qry11 =
    "INSERT INTO tbl_comment (recipe_id) VALUES ('" + req.body.recipe_id + "')";
  db.query(qry11, (err, result) => {
    if (err) {
      console.log("error");
    } else {
      res.send({
        message: "Data Saved",
      });
    }
  });
});

app.post("/RestaurantComment", (req, res) => {
  let qry11 =
    "INSERT INTO tbl_comment (restaurant_id) VALUES ('" +
    req.body.restaurant_id +
    "')";
  db.query(qry11, (err, result) => {
    if (err) {
      console.log("error");
    } else {
      res.send({
        message: "Data Saved",
      });
    }
  });
});

//Comment Select

app.get("/Comment", (req, res) => {
  let qry = `select * from tbl_comment b inner join tbl_user u on u.user_id=b.user_id `;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else if (result.length > 0) {
      res.send({
        Subcategory: result,
      });
    } else {
      res.send({
        message: "Data Not Found",
      });
    }
  });
});

// Comment delete

app.delete("/Comment/:id", (req, res) => {
  let id = req.params.id;
  let qry = `delete from tbl_comment where comment_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data Deleted",
        qry: qry,
      });
    }
  });
});

//Gallery Insert

app.post("/Gallery", upload.single("gallery_file"), (req, res) => {
  var imgsrc = `http://127.0.0.1:${port}/images/${req.file.filename}`;
  let qry12 =
    "INSERT INTO tbl_gallery(gallery_caption, gallery_file, recipe_id, restaurant_id) VALUES ('" +
    req.body.gallery_caption +
    "','" +
    imgsrc +
    "','" +
    req.body.recipe_id +
    "','" +
    req.body.restaurant_id +
    "')";
  db.query(qry12, (err, result) => {
    if (err) {
      console.log("error");
    } else {
      res.send({
        message: "Data Saved",
      });
    }
  });
});

//Gallery Select

app.get("/Gallery", (req, res) => {
  let qry = `select * from tbl_gallery`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else if (result.length > 0) {
      res.send({
        Subcategory: result,
      });
    } else {
      res.send({
        message: "Data Not Found",
      });
    }
  });
});

// Gallery delete

app.delete("/Gallery/:id", (req, res) => {
  let id = req.params.id;
  let qry = `delete from tbl_gallery where gallery_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data Deleted",
        qry: qry,
      });
    }
  });
});

//Ingredients Insert

app.post("/ ", (req, res) => {
  let qry13 =
    "INSERT INTO tbl_ingredients(ingredients_name, ingredients_quantity, recipe_id) VALUES ('" +
    req.body.ingredients_name +
    "','" +
    req.body.ingredients_quantity +
    "','" +
    req.body.recipe_id +
    "')";
  db.query(qry13, (err, result) => {
    if (err) {
      console.log("error");
    } else {
      res.send({
        message: "Data Saved",
      });
    }
  });
});

//Ingredients Select

app.get("/Ingredients", (req, res) => {
  let qry = `select * from tbl_ingredients`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else if (result.length > 0) {
      res.send({
        Subcategory: result,
      });
    } else {
      res.send({
        message: "Data Not Found",
      });
    }
  });
});

// Ingredients delete

app.delete("/Ingredients/:id", (req, res) => {
  let id = req.params.id;
  let qry = `delete from tbl_ingredients where ingredients_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data Deleted",
        qry: qry,
      });
    }
  });
});

//Menu Insert

app.post("/Menu", (req, res) => {
  let qry13 =
    "INSERT INTO tbl_menu(menu_name, menu_price, restaurant_id, category_id) VALUES ('" +
    req.body.menu_name +
    "','" +
    req.body.menu_price +
    "','" +
    req.body.restaurant_id +
    "','" +
    req.body.category_id +
    "')";
  db.query(qry13, (err, result) => {
    if (err) {
      console.log("error");
    } else {
      res.send({
        message: "Data Saved",
      });
    }
  });
});

//Menu Select

app.get("/Menu", (req, res) => {
  let qry = "select * from tbl_menu";
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else if (result.length > 0) {
      res.send({
        Subcategory: result,
      });
    } else {
      res.send({
        message: "Data Not Found",
      });
    }
  });
});

//Menu delete

app.delete("/Menu/:id", (req, res) => {
  let id = req.params.id;
  let qry = `delete from tbl_menu where menu_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data Deleted",
        qry: qry,
      });
    }
  });
});

//Recipe Insert

app.post(
  "/Recipe",
  upload.fields([
    { name: "recipevideo", maxCount: 1 },
    { name: "recipephoto" },
  ]),
  (req, res) => {
    var filevalue = JSON.parse(JSON.stringify(req.files));
    console.log(filevalue);
    var recipevideo = `http://127.0.0.1:${port}/images/${filevalue.recipevideo[0].filename}`;
    var recipephoto = `http://127.0.0.1:${port}/images/${filevalue.recipephoto[0].filename}`;
    let qry13 =
      "INSERT INTO tbl_recipe(recipe_title, recipe_details, recipe_video, user_id, recipe_photo) VALUES ('" +
      req.body.title +
      "','" +
      req.body.details +
      "','" +
      recipevideo +
      "','" +
      req.body.user +
      "','" +
      recipephoto +
      "')";
    db.query(qry13, (err, result) => {
      if (err) {
        console.log("error");
      } else {
        res.send({
          message: "Data Saved",
        });
      }
    });
  }
);

//Recipe Select

app.get("/Recipe", (req, res) => {
  let qry = "select * from tbl_recipe";
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else if (result.length > 0) {
      res.send({
        Recipe: result,
      });
    } else {
      res.send({
        message: "Data Not Found",
      });
    }
  });
});

//Recipe delete

app.delete("/Recipe/:id", (req, res) => {
  let id = req.params.id;
  let qry = `delete from tbl_recipe where recipe_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data Deleted",
        qry: qry,
      });
    }
  });
});

//Recipe Accept

app.post("/RecipeAccept/:id", (req, res) => {
  let id = req.params.id;
  let qry = `update tbl_recipe set recipe_status='1' where recipe_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data Updated",
      });
    }
  });
});

//Recipe Reject

app.post("/RecipeReject/:id", (req, res) => {
  let id = req.params.id;
  let qry = `update tbl_recipe set recipe_status='2' where recipe_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data Updated",
      });
    }
  });
});

// Login

app.post("/login", (req, res) => {
  let qry1 = `SELECT user_id from tbl_user WHERE user_email='${req.body.email}' AND user_password='${req.body.password}'`;
  let qry2 = `SELECT restaurant_id from tbl_restaurant WHERE restaurant_email='${req.body.email}' AND restaurant_password='${req.body.password}'`;
  let qry3 =
    "SELECT admin_id from tbl_admin WHERE admin_email='" +
    req.body.email +
    "' AND admin_password='" +
    req.body.password +
    "'";

  db.query(qry1, (err, result) => {
    if (err) {
      console.log("Error");
    }
    if (result.length > 0) {
      res.send({
        message: "Data Retrieved",
        id: result[0].user_id,
        type: "user",
      });
    }
  });
  db.query(qry2, (err, result) => {
    if (err) {
      console.log("Error");
    }
    if (result.length > 0) {
      res.send({
        message: "Data Retrieved",
        id: result[0].restaurant_id,
        type: "restaurant",
      });
    }
  });

  db.query(qry3, (err, result) => {
    if (err) {
      console.log("Error");
    }
    if (result.length > 0) {
      res.send({
        message: "Data Retrieved",
        id: result[0].admin_id,
        type: "admin",
      });
    } else {
      res.end();
    }
  });
});

//User Select

app.get("/User", (req, res) => {
  let qry = "select * from tbl_user";
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else if (result.length > 0) {
      res.send({
        User: result,
      });
    } else {
      res.send({
        message: "Data Not Found",
      });
    }
  });
});

//Restaurant Registration

app.post("/resregistration", upload.single("photo"), (req, res) => {
  var imgsrc = `http://127.0.0.1:${port}/images/${req.file.filename}`;
  let qry1 =
    "INSERT INTO tbl_restaurant(restaurant_name,restaurant_address,restaurant_contact,restaurant_email,restaurant_password,restaurant_photo,place_id`) VALUES ('" +
    req.body.restaurant_name +
    "','" +
    req.body.restaurant_address +
    "','" +
    req.body.restaurant_contact +
    "','" +
    req.body.restaurant_email +
    "','" +
    req.body.restaurant_password +
    "','" +
    req.body.restaurant_photo +
    "','" +
    req.body.place_id +
    "')";
  db.query(qry1, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data inserted",
      });
    }
  });
});

//Like insert

app.post("/LikeInsert/", (req, res) => {
  let qry =
    "INSERT INTO tbl_like(user_id,blog_id) VALUES ('" +
    req.body.user_id +
    "','" +
    req.body.blog_id +
    "')";

  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "liked",
      });
    }
  });
});

//Like Delete

app.delete("/LikeDelete/:user_id/:bid", (req, res) => {
  let id = req.params.user_id;
  let bid = req.params.bid;
  let qry = `DELETE FROM tbl_like where user_id='${id}' and blog_id='${bid}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "like Updated",
      });
    }
  });
});

// Like count

app.get("/CountLike/:id", (req, res) => {
  let id = req.params.id;
  let qry16 = `select count(like_id) as numLike from tbl_like where blog_id=${id}`;
  db.query(qry16, (err, result) => {
    if (err) {
      console.log("Error");
    } else if (result.length > 0)
      console.log(result[0].numLike);
    res.send({
      countLike: result[0].numLike,
    });
  });
});

//liked or not
app.get("/Like/:uid/:id", (req, res) => {
  let uid = req.params.uid
  let id = req.params.id;
  let qry16 = "select * from tbl_like where user_id=" + uid + " and blog_id=" + id
  db.query(qry16, (err, result) => {
    if (err) {
      console.log("Error");
    } else if (result.length > 0) {
      res.send({
        Liked: true,
      });
    }
    else {
      res.send({
        Liked: false,
      });
    }
  });
});




// OTP generation

// var transporter = mailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "anglesnarcs@gmail.com", //from email Id
//     pass: "uttfqoevogxpsalg", // App password created from google account
//   },
// });
// function sendEmail(to, content, filename, filecontent) {
//   const mailOptions = {
//     from: "anglesnarcs@gmail.com", //from email Id for recipient can view
//     to,
//     subject: "Purchased Plan",
//     html: content,
//     attachments: [
//       {
//         filename: filename,
//         content: filecontent,
//         encoding: "base64",
//       },
//     ],
//   };
//   transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Email sented");
//     }
//   });
// }

// Select Delete
// app.get("/district", (req, res) => {
//   let qry = `select * from tbl_district`;
//   db.query(qry, (err, result) => {
//     if (err) {
//       console.log("Error");
//     }
//     if (result.length > 0) {
//       res.send({
//         message: "Data Retreived",
//         data: result,
//       });
//     } else {
//       res.send({
//         message: "No Data Found",
//         data: result,
//       });
//     }
//   });
// });

// File Upload
// app.post("/packagerbus", upload.single("bus_image"), (req, res) => {
//   var imgsrc = `http://127.0.0.1:${port}/images/${req.file.filename}`;
//   let qry = `insert into tbl_busreg(bus_name,packager_id,bus_capacity,busmodel_id,bus_features,bus_year,bus_image)
//     values('${req.body.bus_name}','${req.body.packager_id}','${req.body.bus_capacity}',
//     '${req.body.busmodel_id}','${req.body.bus_features}','${req.body.bus_year}','${imgsrc}')`;
//   db.query(qry, (err, result) => {
//     if (err) {
//       console.log("Error");
//     } else {
//       res.send({
//         message: "Data Saved",
//       });
//     }
//   });
// });

// Login
// app.post("/login", (req, res) => {
//   let id = req.params.id;
//   let qry1 = `SELECT user_id from tbl_user WHERE user_email='${req.body.email}' AND user_password='${req.body.password}'`;
//   let qry2 = `SELECT packager_id from tbl_packager WHERE packager_email='${req.body.email}' AND packager_password='${req.body.password}'`;
//   let qry3 = `SELECT admin_id from tbl_admin WHERE admin_email='${req.body.email}' AND admin_password='${req.body.password}'`;
//   db.query(qry1, (err, result) => {
//     if (err) {
//       console.log("Error");
//     }
//     if (result.length > 0) {
//       res.send({
//         message: "Data Retrieved",
//         data: result,
//         type: "user",
//       });
//     }
//   });
//   db.query(qry2, (err, result) => {
//     if (err) {
//       console.log("Error");
//     }
//     if (result.length > 0) {
//       res.send({
//         message: "Data Retrieved",
//         data: result,
//         type: "packager",
//       });
//     }
//   });
//   db.query(qry3, (err, result) => {
//     if (err) {
//       console.log("Error");
//     }
//     if (result.length > 0) {
//       res.send({
//         message: "Data Retrieved",
//         data: result,
//         type: "admin",
//       });
//     } else {
//       res.end();
//     }
//   });
// });
