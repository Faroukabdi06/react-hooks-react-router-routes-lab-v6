import { useEffect, useState } from "react";

function Directors() {
  const[directors, setDirectors] = useState([])
  useEffect(()=>{
    fetch("http://localhost:4000/directors")
    .then(r=>r.json())
    .then(data=>setDirectors(data))
  },[])
  return (
    <>
      <header>
        {/* What component should go here? */}
        <h1>Directors Page</h1>
      </header>
      <main>
        {/* Director info here! */}
        {directors.map((director)=>(
          <article>
            <h2>{director.name}</h2>
            {director.movies.map((m)=>(
              <ul><li key={m}>{m}</li></ul>
            ))}
          </article>
        ))}
      </main>
    </>
  );
};

export default Directors;
