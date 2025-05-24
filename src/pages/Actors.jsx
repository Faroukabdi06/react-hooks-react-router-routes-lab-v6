import { useEffect, useState } from "react";

function Actors() {
   const[actors, setActors] = useState([])
  useEffect(()=>{
    fetch("http://localhost:4000/actors")
    .then(r=>r.json())
    .then(data=>setActors(data))
  },[])
  return (
    <>
      <header>
        {/* What component should go here? */}
        <h1>Actors Page</h1>
      </header>
      <main>
        {/* Actor info here! */}
        {actors.map((actor)=>(
          <article>
            <h2>{actor.name}</h2>
             {actor.movies.map((m)=>(
              <ul><li key={m}>{m}</li></ul>
            ))}
          </article>
        ))}
      </main>
    </>
  );
};

export default Actors;
