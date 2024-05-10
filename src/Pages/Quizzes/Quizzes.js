import { Grid } from "@mui/material";
import quizzezData from "../../Static/Files/QuizzesData.json";
import Quiz from "./Components/Quiz";
const Quizzes = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      rowSpacing={4}
      columnSpacing={4}
    >
      {quizzezData.map((quiz) => (
        <Grid item xs={12} sm={6}>
          <Quiz quiz={quiz} />
        </Grid>
      ))}
    </Grid>
  );
};
export default Quizzes;
