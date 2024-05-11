import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Layout from "./commonComponents/Layout/Layout";
import Quizzes from "./Pages/Quizzes";
import QuizDetails from "./Pages/QuizDetails";

const App = () => {
  return (
    <MuiThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Quizzes />} />
            <Route path="/quizzes" element={<Quizzes />} />
            <Route path="/quiz/:id" element={<QuizDetails />} />
          </Route>
        </Routes>
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
