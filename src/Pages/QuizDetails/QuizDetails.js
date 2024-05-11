import { Box, FormControlLabel, Radio, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getQuizById } from "../../selectors";

const QuizDetail = () => {
  const { id } = useParams();
  const quiz = useSelector((state) => getQuizById(state, id));

  return (
    <div>
      {quiz ? (
        <Box>
          <Typography style={{ fontSize: 20, fontWeight: 700 }}>
            {quiz.title}
          </Typography>
          <Typography
            style={{ fontSize: 13, color: "GrayText", marginBottom: 10 }}
          >
            Created: {quiz.created}
          </Typography>
          <Typography>{quiz.description}</Typography>
          <a href={quiz.url} target="_blank" rel="noopener noreferrer">
            {quiz.url}
          </a>{" "}
          <Typography style={{ fontSize: 18, fontWeight: 700 }}>
            Questions:
          </Typography>
          {quiz.questions_answers.map((question, index) => (
            <Box>
              <Typography style={{ fontSize: 17 }}>
                {index + 1} - {question.text}
              </Typography>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingLeft: 20,
                }}
              >
                {question.answers.map(
                  (answer, key) =>
                    answer.text && (
                      <FormControlLabel
                        key={key}
                        value={answer.text}
                        control={<Radio />}
                        label={answer.text}
                        checked={answer.is_true}
                      />
                    )
                )}
              </Box>
            </Box>
          ))}
        </Box>
      ) : (
        <div>Quiz not found</div>
      )}
    </div>
  );
};

export default QuizDetail;
