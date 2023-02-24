import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";

const AddMovie = ({ movieList, setMovieList }) => {
  const textStyles = {
    marginBottom: "15px",
    margin: "auto",
    //width: "70%",
    padding: "10px",
    // border: "1px solid red",
  };
  const Navigate = useNavigate();
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  return (
    <div style={{ width: "40%", margin: "auto" }}>
      <div style={textStyles}>
        <TextField
          sx={{ width: "100%" }}
          id="outlined-basic"
          label="Movie Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div style={textStyles}>
        <TextField
          sx={{ width: "100%" }}
          id="outlined-basic"
          label="Poster Name"
          variant="outlined"
          value={poster}
          onChange={(e) => setPoster(e.target.value)}
        />
      </div>

      <div style={textStyles}>
        <TextField
          sx={{ width: "100%" }}
          id="outlined-basic"
          label="Rating"
          variant="outlined"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
      </div>

      <div style={textStyles}>
        <TextField
          sx={{ width: "100%" }}
          id="outlined-basic"
          label="Summary"
          variant="outlined"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />
      </div>

      <div style={{ display: "flex", margin: "auto", width: "50%" }}>
        <Button
          type="submit"
          sx={{ width: "100%", fontSize: "15px" }}
          variant="outlined"
          onClick={() => {
            const newMovie = { name, poster, rating, summary };
            console.log([...movieList, newMovie]);
            setMovieList([...movieList, newMovie]);
          }}
        >
          Add Movie
        </Button>

        <Button
          sx={{ width: "100%", fontSize: "15px", marginLeft: "10px" }}
          variant="outlined"
          color="secondary"
          onClick={() => {
            Navigate("/");
          }}
        >
          Back
        </Button>
      </div>
    </div>
  );
};
export default AddMovie;
