const initialState = {
  quizzesData: [],
  lastQuestionIndex: 4, // Given that the file already has 3 questions
  lastQuizIndex: 2, // Given that the file already has 1 quiz
  lastAnswerIndex: 10, // Given that the file already has 9 quiz
};

const quizzesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "STORE_QUIZZES_DATA":
      return {
        ...state,
        quizzesData: action.payload,
      };
    case "ADD_QUIZ_DATA":
      return {
        ...state,
        quizzesData: [...state.quizzesData, action.payload],
      };
    case "UPDATE_LAST_INDICES":
      return {
        ...state,
        ...action.payload,
      };
    case "UPDATE_QUIZ":
      return {
        ...state,
        quizzesData: state.quizzesData.map((quiz) =>
          quiz.id === action.payload.id ? action.payload : quiz
        ),
      };
    case "CLEAR_ALL_DATA":
      return initialState;
    default:
      return state;
  }
};
export default quizzesReducer;
