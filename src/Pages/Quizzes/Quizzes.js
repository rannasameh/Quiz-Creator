import { Grid, TextField } from "@mui/material";
import { useCallback, useState } from "react";
import quizzezData from "../../Static/Files/QuizzesData.json";
import Quiz from "./Components/Quiz";

const Quizzes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(quizzezData);

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
    </>
  );
};
export default Quizzes;
