// emailService.mjs

import nodemailer from 'nodemailer';
import dotenv from 'dotenv'

dotenv.config()



const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email service provider
  auth: {
    user: 'q3visualdesigns@gmail.com', // Your email address
    pass: process.env.GMAIL_PASSWORD, // Your email password or application-specific password
  },
});

transporter.verify((error, success) => {
    if (error) {
      console.error('Error verifying transporter:', error);
    } else {
      console.log('Transporter is ready to send emails');
    }
  });

export default transporter;
