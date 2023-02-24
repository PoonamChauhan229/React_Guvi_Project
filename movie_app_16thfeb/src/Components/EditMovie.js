import { useState } from "react";
import {useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const EditMovie = ({ movieList, setMovieList }) => {
  //const [updatemovieList,setupdatemovieList]=useState(movieList)
  const { id } = useParams();
  console.log(id);
  //console.log(movieList)
  const movie = movieList[id];

  function handleUpdate(newMovie) {
    console.log(newMovie);
    const updateMovie = movieList.map((element, index) => {
      if (id == index) {
        // Increment the clicked counter
        return (element = newMovie);
      } else {
        // The rest haven't changed
        return element;
      }
    });
    setMovieList(updateMovie);
  }

  const textStyles = {
    marginBottom: "15px",
    margin: "auto",
    //width: "70%",
    padding: "10px",
    // border: "1px solid red",
  };
  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  return (
    <div style={{ width: "40%", margin: "auto" }}>

      <div style={textStyles}>
        <TextField
          sx={{ width: "100%" }}
          id="outlined-basic"
          label="Movie Name"
          variant="outlined"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div style={textStyles}>
        <TextField
          sx={{ width: "100%" }}
          id="outlined-basic"
          label="Poster"
          variant="outlined"
          value={poster}
          onChange={(e) => {
            setPoster(e.target.value);
          }}
        />
      </div>
      <div style={textStyles}>
        <TextField
          sx={{ width: "100%" }}
          id="outlined-basic"
          label="Rating"
          variant="outlined"
          value={rating}
          onChange={(e) => {
            setRating(e.target.value);
          }}
        />
      </div>
      <div style={textStyles}>
        <TextField
          sx={{ width: "100%" }}
          id="outlined-basic"
          label="Summary"
          variant="outlined"
          value={summary}
          onChange={(e) => {
            setSummary(e.target.value);
          }}
        />
      </div>
      <div style={textStyles}></div>

       <div style={{ margin: "auto", width: "50%",display:"flex" }}>
        <Button
          sx={{ width: "100%", fontSize: "18px" }}
          variant="outlined"
          onClick={() => {
            const newMovie = { name, poster, rating, summary };
          //console.log(newMovie,id)
          handleUpdate(newMovie);}}
        >
          Update & Save
        </Button>
        
      </div>
    </div>
  );
};
export default EditMovie;
