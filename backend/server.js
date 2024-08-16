const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors()); // Enable CORS for all origins
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // Use STARTTLS
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.post('/send-email', (req, res) => {
  const { name, lastname, address, description, checklist } = req.body;

  const mailOptions = {
    from: process.env.SMTP_USER, // Use your verified sender address
    to: process.env.SMTP_USER,   // Send to your own email for testing
    subject: 'New Form Submission',
    text: `
      Name: ${name}
      Lastname: ${lastname}
      Address: ${address}
      Description: ${description}
      Checklist: ${checklist.join(', ')}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Email failed to send');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});