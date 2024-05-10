import { Box, Button, Dialog, Grid, TextField } from "@mui/material";
import { useCallback, useState } from "react";
import quizzezData from "../../Static/Files/QuizzesData.json";
import AddOrEditQuiz from "./Components/AddOrEditQuiz";
import Quiz from "./Components/Quiz";

const Quizzes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(quizzezData);
  const [openAddNewQuiz, setOpenAddNewQuiz] = useState(false);

  const handleSearch = useCallback((e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filtered = quizzezData.filter((item) =>
      item?.title?.toLowerCase().includes(searchTerm)
    );
    setFilteredData(filtered);
  }, []);

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
        <AddOrEditQuiz setOpenAddNewQuiz={setOpenAddNewQuiz} />
      </Dialog>
    </>
  );
};
export default Quizzes;
