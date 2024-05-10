const initialState = {
  quizzesData: [],
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
    default:
      return state;
  }
};
export default quizzesReducer;
