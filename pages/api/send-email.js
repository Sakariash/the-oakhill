import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, lastname, address, description, checklist } = req.body;
    console.log('SMTP_HOST:', process.env.SMTP_HOST);
    console.log('SMTP_USER:', process.env.SMTP_USER);
    // Nodemailer transporter configuration
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false, // Use STARTTLS instead of SSL
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: 'New Form Submission',
      text: `
        Name: ${name}
        Lastname: ${lastname}
        Address: ${address}
        Description: ${description}
        Checklist: ${checklist.join(', ')}
      `,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully', info });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
