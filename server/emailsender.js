// emailService.mjs

import nodemailer from 'nodemailer';
import dotenv from 'dotenv'

dotenv.config()

const password = process.env.GMAIL_PASSWORD

const transporter = nodemailer.createTransport({
  service: 'Gmail', // Use your email service provider
  auth: {
    user: 'your_email@gmail.com', // Your email address
    pass: password, // Your email password or application-specific password
  },
});

export default transporter;
