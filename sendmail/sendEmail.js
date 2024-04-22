const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'arpitjian25@gmail.com',
        pass: 'lysv bmxa rlty giyz',
      },
    });

    const mailOptions = {
      from: 'arpitjian25@gmail.com',
      to: email, // Use the email entered by the user
      subject: 'New Message from Contact Form',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
