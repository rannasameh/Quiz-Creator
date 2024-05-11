import { Button, Grid } from "@mui/material";
import { FieldArray } from "formik";
import FormField from "../../../FormField/FormField";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import CorrectAnswer from "./Components/CorrectAnswer";

const AnswersFormSection = ({ index, question }) => {
  return (
    <>
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
                  {question.answers.length > 1 && (
                    // To ensure that every question has atleast on answer
                    <Button
                      style={{
                        color: "black",
                      }}
                      onClick={() => remove(answerIndex)}
                    >
                      <RemoveCircleOutlineIcon />
                    </Button>
                  )}
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
      <CorrectAnswer index={index} question={question} />
    </>
  );
};
export default AnswersFormSection;
