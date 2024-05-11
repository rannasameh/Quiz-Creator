import { Box, Typography } from "@mui/material";
import { useFormikContext } from "formik";
import { FieldArray } from "formik";
import { FormControlLabel, Radio } from "@mui/material";

const CorrectAnswer = ({ index, question }) => {
  const { values, setFieldValue } = useFormikContext();

  const handleSelectAnswer = (questionIndex, answerIndex) => {
    // Fuction to handle that only one answer is selected per question and updating is_true value
    const updatedAnswers = values.questions_answers.map((question, qIndex) => {
      if (qIndex === questionIndex) {
        return {
          ...question,
          answers: question.answers.map((answer, aIndex) => ({
            ...answer,
            is_true: aIndex === answerIndex,
          })),
        };
      }
      return question;
    });

    setFieldValue("questions_answers", updatedAnswers);
  };
  return (
    <>
      <Typography style={{ fontSize: 17, paddingTop: 10, paddingBottom: 10 }}>
        Correct Answer for question {index + 1}:
      </Typography>
      <FieldArray name={`questions_answers.${index}.answers`}>
        {() => (
          <Box style={{ display: "flex", flexDirection: "column" }}>
            {question.answers.map(
              (answer, answerIndex) =>
                answer.text && (
                  <FormControlLabel
                    key={answerIndex}
                    value={answer.text}
                    control={<Radio />}
                    label={answer.text}
                    checked={answer.is_true}
                    onChange={() => handleSelectAnswer(index, answerIndex)}
                  />
                )
            )}
          </Box>
        )}
      </FieldArray>
    </>
  );
};
export default CorrectAnswer;
