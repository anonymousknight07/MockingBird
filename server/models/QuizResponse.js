import mongoose from 'mongoose';

const quizResponseSchema = new mongoose.Schema({
  quizType: {
    type: String,
    required: true,
    enum: ['trauma', 'ocd', 'stress', 'depression']
  },
  userName: {
    type: String,
    required: true
  },
  userEmail: {
    type: String,
    required: true
  },
  userGender: {
    type: String,
    required: true
  },
  answers: [{
    questionId: Number,
    question: String,
    answer: String
  }],
  submittedAt: {
    type: Date,
    default: Date.now
  }
});

export const QuizResponse = mongoose.model('QuizResponse', quizResponseSchema);