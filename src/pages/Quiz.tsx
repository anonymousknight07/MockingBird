import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { saveQuizResponse } from '../services/api';

interface Question {
  id: number;
  question: string;
  options: string[];
}

interface QuizData {
  title: string;
  description: string;
  questions: Question[];
}

interface UserData {
  name: string;
  email: string;
  gender: string;
}

export default function Quiz() {
  const { type } = useParams();
  const navigate = useNavigate();
  const [quizData, setQuizData] = useState<QuizData | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [showRegistration, setShowRegistration] = useState(true);
  const [showThankYou, setShowThankYou] = useState(false);
  const [userData, setUserData] = useState<UserData>({
    name: '',
    email: '',
    gender: ''
  });

  useEffect(() => {
    const loadQuizData = async () => {
      try {
        const data = await import(`../data/${type}-quiz.json`);
        setQuizData(data);
      } catch (error) {
        console.error('Failed to load quiz data:', error);
        navigate('/demo');
      }
    };

    loadQuizData();
  }, [type, navigate]);

  const handleUserDataChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRegistrationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowRegistration(false);
  };

  const handleAnswer = (answer: string) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answer;
    setSelectedAnswers(newAnswers);

    if (currentQuestion < (quizData?.questions.length || 0) - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      const formattedAnswers = quizData?.questions.map((q, index) => ({
        questionId: q.id,
        question: q.question,
        answer: selectedAnswers[index]
      }));

      await saveQuizResponse(
        type || '',
        userData,
        formattedAnswers || []
      );

      setShowThankYou(true);
      setTimeout(() => {
        navigate('/demo');
      }, 5000);
    } catch (error) {
      console.error('Error submitting quiz:', error);
      alert('There was an error saving your responses. Please try again.');
    }
  };

  if (!quizData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-customOrange"></div>
      </div>
    );
  }

  if (showThankYou) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-lg p-12 text-center max-w-2xl mx-4"
        >
          <img src="/assets/logo.png" alt="MockingBird Logo" className="w-24 h-24 mx-auto mb-6" />
          <h2 className="text-3xl font-manrope font-bold text-customOrange mb-4">Thank You!</h2>
          <p className="text-gray-600 mb-6">
            We appreciate you taking the time to complete the assessment. 
            We've sent a confirmation email to your inbox.
            Our team will review your responses and get back to you soon.
          </p>
          <p className="text-sm text-gray-500">
            Redirecting you back to the assessments page...
          </p>
        </motion.div>
      </div>
    );
  }

  if (showRegistration) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8"
          >
            <h1 className="text-2xl font-manrope text-customOrange font-bold text-center mb-2">{quizData.title}</h1>
            <div className="text-center mb-8">
              <p className="text-base font-manrope text-gray-700 mb-2">
                Welcome to the {quizData.title}
              </p>
              <p className="text-gray-600">
                Before we proceed, we would like to get to know you better
              </p>
            </div>

            <form onSubmit={handleRegistrationSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={userData.name}
                  onChange={handleUserDataChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-customOrange focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={userData.email}
                  onChange={handleUserDataChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-customOrange focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  required
                  value={userData.gender}
                  onChange={handleUserDataChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-customOrange focus:border-transparent"
                >
                  <option value="">Select your gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-customOrange text-white py-3 rounded-lg hover:bg-hoverOrange transition-colors"
              >
                Start Assessment
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    );
  }

  const progress = ((currentQuestion + 1) / quizData.questions.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8"
        >
          <h1 className="text-3xl font-manrope font-bold text-center mb-2">{quizData.title}</h1>
          <p className="text-gray-600 text-center mb-8">{quizData.description}</p>

      
          <div className="w-full h-2 bg-gray-200 rounded-full mb-8">
            <motion.div
              className="h-full bg-customOrange rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl font-semibold mb-6">
              {quizData.questions[currentQuestion].question}
            </h2>

            <div className="space-y-4">
              {quizData.questions[currentQuestion].options.map((option, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAnswer(option)}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-colors
                    ${selectedAnswers[currentQuestion] === option
                      ? 'border-customOrange bg-orange-50'
                      : 'border-gray-200 hover:border-customOrange'
                    }`}
                >
                  {option}
                </motion.button>
              ))}
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className={`px-6 py-2 rounded-full ${
                  currentQuestion === 0
                    ? 'bg-gray-200 cursor-not-allowed'
                    : 'bg-gray-500 text-white hover:bg-gray-600'
                }`}
              >
                Previous
              </button>

              {currentQuestion === quizData.questions.length - 1 ? (
                <button
                  onClick={handleSubmit}
                  disabled={!selectedAnswers[currentQuestion]}
                  className={`px-6 py-2 rounded-full ${
                    !selectedAnswers[currentQuestion]
                      ? 'bg-gray-200 cursor-not-allowed'
                      : 'bg-customOrange text-white hover:bg-hoverOrange'
                  }`}
                >
                  Submit
                </button>
              ) : (
                <button
                  onClick={() => setCurrentQuestion(currentQuestion + 1)}
                  disabled={!selectedAnswers[currentQuestion]}
                  className={`px-6 py-2 rounded-full ${
                    !selectedAnswers[currentQuestion]
                      ? 'bg-gray-200 cursor-not-allowed'
                      : 'bg-customOrange text-white hover:bg-hoverOrange'
                  }`}
                >
                  Next
                </button>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}