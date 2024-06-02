const nodemailer = require("nodemailer");
const fs = require("fs");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config();

const { SENDGRID_KEY } = process.env;

function replaceContent(content, creds) {
  let allkeysArr = Object.keys(creds);
  allkeysArr.forEach(function (key) {
    content = content.replace(`#{${key}}`, creds[key]);
  });
  return content;
}

async function EmailHelper(templateName, receiverEmail, creds) {
  try {
    const tempatePath = path.join(__dirname, "email_templates", templateName);
    let content = await fs.promises.readFile(templatePath, "utf-8");

    const emailDetails = {
      to: receiverEmail,
      from: "impactgaming79@yahoomail.com",
      subject: "Welcome to Catalyst",
      text: `Welcome to Catalyst ${creds.name}`,
      html: replaceContent(content, creds),
    };
    const transportDetails = {
      host: "smtp.sendgrid.net",
      port: 587,
      auth: {
        user: "apikey",
        pass: SENDGRID_KEY,
      },
    };
    const transporter = nodemailer.createTransport(transportDetails);
    await transporter.sendMail(emailDetails);
    console.log("email sent");
  } catch (err) {
    console.log(err);
  }
}

module.exports = EmailHelper;
