import nodemailer from 'nodemailer';
import dotenv from 'dotenv'


const sendEmail = async (to, subject, htmlContent) => {
const password = process.env.GMAIL_PASSWORD

  try {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'q3visualdesigns@gmail.com', // Your Gmail address
        pass: password, // Your Gmail password or App password
      },
    });

    let info = await transporter.sendMail({
      from: 'q3visualdesigns@gmail.com',
      to: to,
      subject: subject,
      html: htmlContent,
    });

    console.log('Email sent: %s', info.messageId);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

export { sendEmail };
