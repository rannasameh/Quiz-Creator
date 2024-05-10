import React from "react";
import { Formik, Form } from "formik";
import FormField from "../../../../commonComponents/FormField/FormField";
import { Box, Button, Typography } from "@mui/material";
import QuestionsFormSection from "./Components/QuestionsFormSection/QuestionsFormSection";

const initialValues = {
  created: "",
  description: "",
  title: "",
  url: "",
  questions_answers: [
    {
      text: "",
      feedback_false: "",
      feedback_true: "",
      answers: [{ text: "", is_true: false }],
    },
  ],
};

const AddOrEditQuiz = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Box style={{ padding: 50 }}>
      <Typography style={{ fontSize: 23, paddingTop: 10, paddingBottom: 10 }}>
        Add new quiz
      </Typography>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <FormField
              type="input"
              name={`title`}
              label="Title"
              variant="standard"
              fullwidth
              showErrorMessage
            />
            <FormField
              type="input"
              name={`description`}
              label="Description"
              variant="standard"
              fullwidth
              showErrorMessage
            />
            <FormField
              type="input"
              name={`url`}
              label="URL"
              variant="standard"
              fullwidth
              showErrorMessage
            />
            <Typography
              style={{ fontSize: 20, paddingTop: 10, paddingBottom: 10 }}
            >
              Questions:
            </Typography>
            <QuestionsFormSection />
            <Button
              type="submit"
              variant="contained"
              style={{ backgroundColor: "black", width: "100%" }}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default AddOrEditQuiz;
