import { Button, Grid } from "@mui/material";
import { useFormikContext } from "formik";
import { FieldArray } from "formik";
import FormField from "../../../FormField/FormField";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import AnswersFormSection from "../AnswersFormSection";

const QuestionsFormSection = () => {
  const { values } = useFormikContext();

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
                {values.questions_answers.length > 1 && (
                  // To ensure that every quiz has atleast on question
                  <Button
                    style={{
                      color: "black",
                    }}
                    onClick={() => remove(index)}
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
            <AnswersFormSection index={index} question={question} />
          </div>
        ))
      }
    </FieldArray>
  );
};
export default QuestionsFormSection;
