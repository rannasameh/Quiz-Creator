import {
  Box,
  Button,
  Dialog,
  FormControlLabel,
  Radio,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getQuizById } from "../../selectors";
import AddOrEditQuiz from "../Quizzes/Components/AddOrEditQuiz";

const QuizDetail = () => {
  const { id } = useParams();
  const quiz = useSelector((state) => getQuizById(state, id));
  const [openEditQuiz, setOpenEditQuiz] = useState(false);

  return (
    <div>
      {quiz ? (
        <Box>
          <Button
            variant="outlined"
            onClick={() => setOpenEditQuiz(true)}
            style={{ color: "black", borderColor: "black" }}
          >
            Edit
          </Button>
          <Typography style={{ fontSize: 20, fontWeight: 700 }}>
            {quiz.title}
          </Typography>
          <Box style={{ display: "flex", flexDirection: "row", columnGap: 10 }}>
            <Typography
              style={{ fontSize: 13, color: "GrayText", marginBottom: 10 }}
            >
              Created: {quiz.created}
            </Typography>
            {quiz.modified && (
              <Typography
                style={{ fontSize: 13, color: "GrayText", marginBottom: 10 }}
              >
                Modified: {quiz.modified}
              </Typography>
            )}
          </Box>
          <Typography>{quiz.description}</Typography>
          <a href={quiz.url} target="_blank" rel="noopener noreferrer">
            {quiz.url}
          </a>{" "}
          <Typography style={{ fontSize: 18, fontWeight: 700 }}>
            Questions:
          </Typography>
          <Box style={{ display: "flex", flexDirection: "column", rowGap: 15 }}>
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
                <Typography>
                  False feedback: {question.feedback_false}
                </Typography>{" "}
                <Typography>Truefeedback : {question.feedback_true}</Typography>
              </Box>
            ))}{" "}
          </Box>
        </Box>
      ) : (
        <div>Quiz not found</div>
      )}
      <Dialog onClose={() => setOpenEditQuiz(false)} open={openEditQuiz}>
        <AddOrEditQuiz setOpen={setOpenEditQuiz} isEdit />
      </Dialog>
    </div>
  );
};

export default QuizDetail;
