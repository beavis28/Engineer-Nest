// functions/index.js

// import needed modules
const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
require('dotenv').config();


//Local and Deploy env
const sender = process.env.SMTP_SENDER || functions.config().smtp.sender;
const receiver = process.env.SMTP_RECEIVER || functions.config().smtp.receiver;
const host = process.env.SMTP_HOST || functions.config().smtp.host;
const pass = process.env.SMTP_PASS || functions.config().smtp.pass;
const port = process.env.SMTP_PORT || functions.config().smtp.port;




// when this cloud function is already deployed, change the origin to 'https://your-deployed-app-url
const cors = require("cors")({origin: true});

// create and config transporter
const transporter = nodemailer.createTransport({
  host: host,
  port: port,
  secure: true, // true for 465, false for other ports
  auth: {
    user: sender,
    pass: pass,
  },
});

// export the cloud function called `sendEmailSeeking`
exports.sendEmailSeeking = functions.https.onRequest((req, res) => {
  // for testing purposes
  console.log(
      "from sendEmail function. The request object is:",
      JSON.stringify(req.body),
  );

  // enable CORS using the `cors` express middleware.
  cors(req, res, () => {
    // get contact form data from the req and then assigned it to variables
    const email = req.body.email;
    const skill = req.body.skill;


    // config the email message
    const mailOptions = {
      from: sender,      
      // to: `${email}`,
      to: `${receiver}`,

      subject: "Job Seeking's Application",

      html: `
        <div style="font-family: "Open Sans", sans-serif; background-color: #e7f0ea; padding: 20px">
          <h1 style="font-size: 1.5rem; font-weight: 600" >
            Dear Hiring Team,
          </h1>

          <p style="padding-top: 20px; padding-bottom: 20px; font-size: 0.975rem; color: #052311">
            A new job seeker has expressed interested in finding a job through our platform.
          </p>
        <ul>

          <li>
            <p>User's email: <span style="font-weight: 700; color: #0e6431">${email}</span></p>
          </li>
          <li>
            <p>Skill: <span style="font-weight: 700; color: #0e6431">${skill}</span></p>
          </li>

        </ul>
          <p style="font-size: 0.975rem; color: #052311">We recommend following up to provide them with relevant job opportunities.</p>
          <div style="margin-top: 20px;">
            <p style="font-size: 0.975rem; color: #052311">Best regards</p>
            <p style="font-size: 0.975rem; color: #052311" style="padding-bottom: 10px">Your Automated System</p>
          </div>
        
        </div>`

    };

    // call the built in `sendMail` function and return different responses upon success and failure
    return transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send({
          data: {
            status: 500,
            message: error.toString(),
          },
        });
      }

      return res.status(200).send({
        data: {
          status: 200,
          message: "sent",
        },
      });
    });
  });
});

// export the cloud function called `sendEmailHiring`
exports.sendEmailHiring = functions.https.onRequest((req, res) => {
  // for testing purposes
  console.log(
      "from sendEmail function. The request object is:",
      JSON.stringify(req.body),
  );

  // enable CORS using the `cors` express middleware.
  cors(req, res, () => {
    // get contact form data from the req and then assigned it to variables
    const email = req.body.email;
    const skill = req.body.skill;

    // config the email message
    const mailOptions = {
      from: sender,
      // to: `${email}`,
      to: `${receiver}`,
      subject: "Job Hiring's Application",

      html: `
        <div style="font-family: "Open Sans", sans-serif; background-color: #e7f0ea; padding: 20px">
          <h1 style="font-size: 1.5rem; font-weight: 600" >
            Dear Team,
          </h1>

          <p style="padding-top: 20px; padding-bottom: 20px; font-size: 0.975rem; color: #052311">
            A new company has expressed interest in finding a job seeker with specific skills through our platform.
          </p>
        <ul>

          <li>
            <p>User's email: <span style="font-weight: 700; color: #0e6431">${email}</span></p>
          </li>
          <li>
            <p>Skill: <span style="font-weight: 700; color: #0e6431">${skill}</span></p>
          </li>

        </ul>
          <p style="font-size: 0.975rem; color: #052311">We recommend following up to match them with relevant job seekers.</p>
          <div style="margin-top: 20px;">
            <p style="font-size: 0.975rem; color: #052311">Best regards</p>
            <p style="font-size: 0.975rem; color: #052311" style="padding-bottom: 10px">Your Automated System</p>
          </div>
        
        </div>`
    };

    // call the built in `sendMail` function and return different responses upon success and failure
    return transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send({
          data: {
            status: 500,
            message: error.toString(),
          },
        });
      }

      return res.status(200).send({
        data: {
          status: 200,
          message: "sent",
        },
      });
    });
  });
});

// export the cloud function called `sendEmailContact`
exports.sendEmailContact = functions.https.onRequest((req, res) => {
  // for testing purposes
  console.log(
      "from sendEmail function. The request object is:",
      JSON.stringify(req.body),
  );

  // enable CORS using the `cors` express middleware.
  cors(req, res, () => {
    // get contact form data from the req and then assigned it to variables
    const email = req.body.email;

    // config the email message
    const mailOptions = {
      from: sender,
      // to: `${email}`,
      to: `${receiver}`,
      subject: "Inquiry via Contact Us",
      // text: `Who: ${name} says: ${message}`,
      html: `
        <div style="font-family: "Open Sans", sans-serif; background-color: #e7f0ea; padding: 20px">
          <h1 style="font-size: 1.5rem; font-weight: 600" >
            Dear Team,
          </h1>

          <p style="padding-top: 20px; padding-bottom: 20px; font-size: 0.975rem; color: #052311">
            We have received a new inquiry via the "Contact Us" form on our website.
          </p>
        <ul>

          <li>
            <p>User's email: <span style="font-weight: 700; color: #0e6431">${email}</span></p>
          </li>

        </ul>
          <p style="font-size: 0.975rem; color: #052311">We recommend following up to provide them with relevant job opportunities.</p>
          <div style="margin-top: 20px;">
            <p style="font-size: 0.975rem; color: #052311">Best regards</p>
            <p style="font-size: 0.975rem; color: #052311" style="padding-bottom: 10px">Your Automated System</p>
          </div>
        
        </div>`
    };

    // call the built in `sendMail` function and return different responses upon success and failure
    return transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send({
          data: {
            status: 500,
            message: error.toString(),
          },
        });
      }

      return res.status(200).send({
        data: {
          status: 200,
          message: "sent",
        },
      });
    });
  });
});
