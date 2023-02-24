
import Movie from "./Movie";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";

const MovieList = ({ movieList, setMovieList}) => {

    const Navigate = useNavigate();
  console.log(movieList);
  return (
    <>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        margin: "auto",
        width: "80%",
        padding: "10px",
        // border:"1px solid black",
        justifyContent:"space-evenly"
      }}>
        {movieList.map((element, index) => {
          return (
            <Movie
              {...element}
              key={index}
              movieAvatar={element}
              
              
              editButton={
                <IconButton color="error" aria-label="add an alarm">
                  <EditIcon onClick={
                    ()=>{Navigate(`/edit/${index}`)}}
                  />
                </IconButton>
    
              }
              
              // editButton={<button
              // onClick={()=>{
              //   Navigate(`/edit/${index}`)            
              // }}
              // >EditMovie</button>}


              deleteButton={
                <IconButton color="error" aria-label="add an alarm">
                  <DeleteIcon onClick={()=>
              setMovieList(
                movieList.filter((ele,i)=>
                 i!==index 
                ))}/>
                </IconButton>
    
              }


              // delete1Button={<button
              // onClick={()=>
              // setMovieList(
              //   movieList.filter((ele,i)=>
              //    i!==index 
              //   )
              // )
              // }
              // >Delete Movie</button>}
            />
          );
        })}
      </div>
    </>
  );
};
export default MovieList;
