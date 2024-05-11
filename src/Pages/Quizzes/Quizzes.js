import { Box, Button, Dialog, Grid, TextField } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import quizzezData from "../../Static/Files/QuizzesData.json";
import Quiz from "./Components/Quiz";
import { useDispatch, useSelector } from "react-redux";
import { storeQuizzesData } from "../../actions/actions";
import AddOrEditQuiz from "../../commonComponents/AddOrEditQuiz/AddOrEditQuiz";

const Quizzes = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [filteredData, setFilteredData] = useState([]);
  const [openAddNewQuiz, setOpenAddNewQuiz] = useState(false);
  const quizzes = useSelector((state) => state.quizzes.quizzesData);
  const dispatch = useDispatch();

  useEffect(() => {
    // read quizzes from file only for the first render when no new data is added yet
    !quizzes.length && dispatch(storeQuizzesData(quizzezData));
  }, [dispatch, quizzes]);

  useEffect(() => {
    quizzes && setFilteredData(quizzes);
  }, [quizzes]);

  const handleSearch = useCallback(
    (e) => {
      const searchTerm = e.target.value.toLowerCase();
      setSearchTerm(searchTerm);

      const filtered = quizzes.filter((item) =>
        item?.title?.toLowerCase().includes(searchTerm)
      );
      setFilteredData(filtered);
    },
    [quizzes]
  );

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "flex-start", md: "flex-end" },
          flexDirection: "row",
          columnGap: 2,
        }}
      >
        <Button
          variant="outlined"
          style={{ color: "black", borderColor: "black" }}
          onClick={() => setOpenAddNewQuiz(true)}
        >
          Add
        </Button>
      </Box>
      <TextField
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        style={{ marginTop: 10, marginBottom: 20, width: "40%" }}
      />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        rowSpacing={4}
        columnSpacing={4}
      >
        {filteredData.map((quiz) => (
          <Grid item xs={12} sm={6}>
            <Quiz quiz={quiz} />
          </Grid>
        ))}
      </Grid>
      <Dialog onClose={() => setOpenAddNewQuiz(false)} open={openAddNewQuiz}>
        <AddOrEditQuiz setOpen={setOpenAddNewQuiz} />
      </Dialog>
    </>
  );
};
export default Quizzes;
