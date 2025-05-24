import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
function Home() {
  const[movies, setMovies] = useState([])
useEffect(()=>{
  fetch("http://localhost:4000/movies")
  .then(r=>r.json())
  .then(data=>setMovies(data))
  },[])
  return (
    <>
      <header>
        {/* What component should go here? */}
        <h1>Home Page</h1>
      </header>
      <main>
        {/* Info goes here! */}
        {
        movies.map((movie)=>(
          <MovieCard id={movie.id} key={movie.id} movie={movie} title={movie.title}/>
        ))
}
      </main>
    </>
  );
};

export default Home;
