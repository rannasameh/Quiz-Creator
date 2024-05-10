import { Box, Button, Grid, Typography } from "@mui/material";
import { useFormikContext } from "formik";
import { FieldArray } from "formik";
import FormField from "../../../../../../commonComponents/FormField/FormField";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { FormControlLabel, Radio } from "@mui/material";

const QuestionsFormSection = () => {
  const { values, setFieldValue } = useFormikContext();

  const handleSelectAnswer = (questionIndex, answerIndex) => {
    // Fuction to handle that only one answer is selected per question
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
    <FieldArray name="questions_answers">
      {({ push, remove }) =>
        values.questions_answers.map((question, index) => (
          <div key={index}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <FormField
                  type="input"
                  name={`questions_answers.${index}.text`}
                  label={`Question ${index + 1}`}
                  variant="standard"
                  fullwidth
                  showErrorMessage
                />
              </Grid>
              <Grid
                item
                xs={2}
                style={{
                  display: "flex",
                  justifyContet: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  style={{
                    color: "black",
                  }}
                  onClick={() => remove(index)}
                >
                  <RemoveCircleOutlineIcon />
                </Button>
              </Grid>
              <Grid
                item
                xs={2}
                style={{
                  display: "flex",
                  justifyContet: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  style={{
                    color: "black",
                  }}
                  onClick={() =>
                    push({
                      text: "",
                      answers: [{ text: "", is_true: false }],
                    })
                  }
                >
                  <AddCircleOutlineIcon />
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={8}>
              <FormField
                type="input"
                name={`questions_answers.${index}.feedback_false`}
                label={`False feedback`}
                variant="standard"
                fullwidth
                showErrorMessage
              />
            </Grid>
            <Grid item xs={8}>
              <FormField
                type="input"
                name={`questions_answers.${index}.feedback_true`}
                label={`True feedback`}
                variant="standard"
                fullwidth
                showErrorMessage
              />
            </Grid>
            <FieldArray name={`questions_answers.${index}.answers`}>
              {({ push, remove }) => (
                <div>
                  {question.answers.map((answer, answerIndex) => (
                    <Grid container spacing={2} key={answerIndex}>
                      <Grid item xs={8}>
                        <FormField
                          type="input"
                          name={`questions_answers.${index}.answers.${answerIndex}.text`}
                          label={`Answer ${answerIndex + 1}`}
                          variant="standard"
                          fullwidth
                          showErrorMessage
                        />
                      </Grid>
                      <Grid
                        item
                        xs={2}
                        style={{
                          display: "flex",
                          justifyContet: "center",
                          alignItems: "center",
                        }}
                      >
                        <Button
                          style={{
                            color: "black",
                          }}
                          onClick={() => remove(answerIndex)}
                        >
                          <RemoveCircleOutlineIcon />
                        </Button>
                      </Grid>
                      <Grid
                        item
                        xs={2}
                        style={{
                          display: "flex",
                          justifyContet: "center",
                          alignItems: "center",
                        }}
                      >
                        <Button
                          style={{
                            color: "black",
                          }}
                          onClick={() => push({ text: "", is_true: false })}
                        >
                          <AddCircleOutlineIcon />
                        </Button>
                      </Grid>
                    </Grid>
                  ))}
                </div>
              )}
            </FieldArray>

            <Typography
              style={{ fontSize: 17, paddingTop: 10, paddingBottom: 10 }}
            >
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
                          onChange={() =>
                            handleSelectAnswer(index, answerIndex)
                          }
                        />
                      )
                  )}
                </Box>
              )}
            </FieldArray>
          </div>
        ))
      }
    </FieldArray>
  );
};
export default QuestionsFormSection;
