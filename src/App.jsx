import { useState } from "react";
import "./App.css";

function App() {
  const [joke, setjoke] = useState(null);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          fetch("https://icanhazdadjoke.com/", {
            headers: { Accept: "application/json" },
          })
            .then((res) => res.json())
            .then((jokes) => {
              setjoke(jokes.joke);
            });
        }}
      >
        Blague au hasard
      </button>
      <p>
        {joke
          ? joke
          : "Cliquez sur le bouton pour obtenir une blague aléatoire"}
      </p>
    </>
  );
}

export default App;
