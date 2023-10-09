// functions/index.js

// import needed modules
const functions = require("firebase-functions");
const nodemailer = require("nodemailer");


// when this cloud function is already deployed, change the origin to 'https://your-deployed-app-url
const cors = require("cors")({origin: true});

// create and config transporter
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "engineernest2023@gmail.com",
    pass: "vrck qgvc ttai xotp",
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
    // const name = req.body.data.name;
    // const message = req.body.data.message;

    // config the email message
    const mailOptions = {
      from: "engineernest2023@gmail.com",      
      // to: `${email}`,
      // to: `${`engineernest2023@gmail.com`}`,
      to: `engineernest2023@gmail.com`,
      subject: "Job Seeking's Application",
      // text: `Who: ${name} says: ${message}`,
      // text: `Who: ${email} says: ${skill}`,
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
    // const name = req.body.data.name;
    // const message = req.body.data.message;

    // config the email message
    const mailOptions = {
      from: "engineernest2023@gmail.com",
      
      // to: `${email}`,
      // to: `${`engineernest2023@gmail.com`}`,
      to: `engineernest2023@gmail.com`,
      subject: "Job Hiring's Application",
      // text: `Who: ${name} says: ${message}`,
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
    // const name = req.body.data.name;
    // const message = req.body.data.message;

    // config the email message
    const mailOptions = {
      from: "engineernest2023@gmail.com",
      
      // to: `${email}`,
      // to: `${`engineernest2023@gmail.com`}`,
      to: `engineernest2023@gmail.com`,
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
