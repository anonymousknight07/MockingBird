const API_URL = import.meta.env.VITE_API_URL;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const saveQuizResponse = async (quizType: string, userData: any, answers: any[]) => {
  try {
    const response = await fetch(`${API_URL}/api/quiz-responses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        quizType,
        userData,
        answers,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to save quiz response');
    }

    return await response.json();
  } catch (error) {
    console.error('Error saving quiz response:', error);
    throw error;
  }
};