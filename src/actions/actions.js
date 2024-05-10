export const storeQuizzesData = (data) => ({
  type: "STORE_QUIZZES_DATA",
  payload: data,
});

export const addQuizData = (newQuizData) => ({
  type: "ADD_QUIZ_DATA",
  payload: newQuizData,
});
