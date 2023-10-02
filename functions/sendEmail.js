const {https} = require("firebase-functions");

const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const cors = require("cors")({origin: true});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "engineernest2023@gmail.com",
    pass: "vrck qgvc ttai xotp",
  },
});

exports.sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const dest = req.query.dest;

    const mailOptions = {
      from: "Your Name <engineernest2023@gmail.com>",
      to: dest,
      subject: "Hello from Firebase!",
      text: "This is a sample message.",
    };

    return transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.send({"status_code": 500, "message": error.toString()});
      }
      return res.send("Sent");
    });
  });
});
