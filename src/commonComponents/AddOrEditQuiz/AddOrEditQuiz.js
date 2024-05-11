import React, { useCallback, useMemo } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormField from "../FormField/FormField";
import { Box, Button, Typography } from "@mui/material";
import QuestionsFormSection from "./Components/QuestionsFormSection/QuestionsFormSection";
import { useDispatch, useSelector } from "react-redux";
import {
  addQuizData,
  updateLastIndices,
  updateQuiz,
} from "../../actions/actions";
import { useParams } from "react-router-dom";
import { getQuizById } from "../../selectors";

const AddOrEditQuiz = ({ setOpen, isEdit }) => {
  const dispatch = useDispatch();
  const quizzes = useSelector((state) => state.quizzes);
  const { id } = useParams();
  const quiz = useSelector((state) => getQuizById(state, id));

  const initialValues = useMemo(
    () => ({
      id: "",
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
    }),
    []
  );
  const validationSchema = useMemo(
    () =>
      Yup.object().shape({
        description: Yup.string().required("Description is required"),
        title: Yup.string().required("Title is required"),
        url: Yup.string().required("URL is required"),
        questions_answers: Yup.array().of(
          Yup.object().shape({
            text: Yup.string().required("Question text is required"),
            feedback_false: Yup.string().required(
              "Question false feedback is required"
            ),
            feedback_true: Yup.string().required(
              "Question true feedback required"
            ),
            answers: Yup.array().of(
              Yup.object().shape({
                text: Yup.string().required("Answer text is required"),
              })
            ),
          })
        ),
      }),
    []
  );
  const generateDataWithIds = useCallback(
    (values) => {
      // Handles the generation of IDs to mimic the behavior of creating entities on the frontend rather than the backend.
      // It ensures that each entity (quiz, question, answer) receives a unique identifier before being stored in the Redux store.
      let lastQuizIndex = quizzes.lastQuizIndex;
      let lastQuestionIndex = quizzes.lastQuestionIndex;
      let lastAnswerIndex = quizzes.lastAnswerIndex;

      const quizWithIds = {
        ...values,
        id: lastQuizIndex,
        questions_answers: values.questions_answers.map((question) => {
          const questionId = lastQuestionIndex;
          lastQuestionIndex++;

          return {
            ...question,
            id: questionId,
            answers: question.answers.map((answer) => {
              const answerId = lastAnswerIndex;
              lastAnswerIndex++;

              return {
                ...answer,
                id: answerId,
              };
            }),
          };
        }),
      };

      const indices = {
        lastQuizIndex: lastQuizIndex + 1,
        lastQuestionIndex,
        lastAnswerIndex,
      };

      dispatch(updateLastIndices(indices));

      return quizWithIds;
    },
    [dispatch, quizzes]
  );

  const handleSubmit = (values, { setSubmitting }) => {
    const currentDate =
      new Date().toISOString().split("T")[0] +
      " " +
      new Date().toLocaleTimeString();
    if (isEdit) {
      values.modified = currentDate;
      dispatch(updateQuiz(values));
    } else {
      values.created = currentDate;
      const quizWithids = generateDataWithIds(values);
      dispatch(addQuizData(quizWithids));
    }
    setSubmitting(false);
    setOpen(false);
  };

  return (
    <Box style={{ padding: 50 }}>
      <Typography style={{ fontSize: 23, paddingTop: 10, paddingBottom: 10 }}>
        {isEdit ? "Edit" : "Add new"} quiz
      </Typography>
      <Formik
        initialValues={isEdit ? quiz : initialValues}
        validationSchema={validationSchema}
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
