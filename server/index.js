import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import { QuizResponse } from './models/QuizResponse.js';
import nodemailer from 'nodemailer';
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Configure nodemailer with more secure settings
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: true 
  }
});


transporter.verify(function(error, success) {
  if (error) {
    console.error('Email configuration error:', error);
  } else {
    console.log('Email server is ready to send messages');
  }
});

// Routes
app.post('/api/quiz-responses', async (req, res) => {
  try {
    const { quizType, userData, answers } = req.body;
    
    const quizResponse = new QuizResponse({
      quizType,
      userName: userData.name,
      userEmail: userData.email,
      userGender: userData.gender,
      answers,
      submittedAt: new Date()
    });

    await quizResponse.save();

   
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: userData.email,
      subject: 'Thank You for Taking the Quiz - MockingBird',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <img src="cid:logo" alt="MockingBird Logo" style="width: 150px; margin: 20px 0;">
          <h2 style="color: #ec744a;">Thank You for Taking the Quiz!</h2>
          <p>Dear ${userData.name},</p>
          <p>Thank you for completing our ${quizType} assessment. We will carefully review your responses and get back to you with the results soon.</p>
          <p>Warm regards,<br>MockingBird Team</p>
        </div>
      `,
      attachments: [{
        filename: 'logo.png',
        path: './public/assets/logo.png',
        cid: 'logo'
      }]
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: 'Quiz response saved successfully' });
  } catch (error) {
    console.error('Error saving quiz response:', error);
    res.status(500).json({ error: 'Failed to save quiz response' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
app.use(cors({ origin: 'http://localhost:5173' }));
