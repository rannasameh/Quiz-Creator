export const storeQuizzesData = (data) => ({
  type: "STORE_QUIZZES_DATA",
  payload: data,
});

export const addQuizData = (newQuizData) => ({
  type: "ADD_QUIZ_DATA",
  payload: newQuizData,
});

export const updateLastIndices = (indices) => ({
  type: "UPDATE_LAST_INDICES",
  payload: indices,
});

export const updateQuiz = (updatedQuiz) => ({
  type: "UPDATE_QUIZ",
  payload: updatedQuiz,
});

export const clearAllData = () => ({
  type: "CLEAR_ALL_DATA",
});
