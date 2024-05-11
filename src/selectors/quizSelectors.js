export const getQuizById = (state, quizId) => {
  return state.quizzes.quizzesData.find(
    (quiz) => parseInt(quiz.id) === parseInt(quizId)
  );
};
