require('dotenv').config();

console.log('server::>', process.env.SMTP_USER, process.env.SMTP_HOST, process.env.SMTP_PORT);
console.log('SMTP_USER:', process.env.SMTP_USER); // Should be defined
console.log('SMTP_HOST:', process.env.SMTP_HOST); // Should be defined
console.log('SMTP_PORT:', process.env.SMTP_PORT); // Should be defined
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

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
  tls: {
    rejectUnauthorized: false, // Add this if needed for STARTTLS
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

  transporter.verify((error, success) => {
    if (error) {
      console.error('Error connecting to SMTP server:', error);
    } else {
      console.log('SMTP server is ready to send emails');
    }
  });

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email', details: error });
    } else {
      console.log('Email sent:', info.response);
      res.status(200).json({ message: 'Email sent successfully', info });
    }
  });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});