import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const formatDate = (dateString) => {
  var parts = dateString.split(" ");
  var datePart = parts[0];
  var dateParts = datePart.split("-");
  var year = dateParts[0];
  var month = dateParts[1];
  var day = dateParts[2];

  var formattedDate = day + "-" + month + "-" + year;
  return formattedDate;
};

const Quiz = ({ quiz }) => {
  const { title, description, created } = quiz;
  const navigate = useNavigate();
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography sx={{ mb: 1.5, fontSize: 13 }} color="text.secondary">
          Created: {formatDate(created)}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button
          size="small"
          variant="contained"
          sx={{ backgroundColor: "black" }}
          onClick={() => navigate(`/quiz/${quiz.id}`)}
        >
          More Details{" "}
        </Button>
      </CardActions>
    </Card>
  );
};
export default Quiz;
