import { useState } from "react";
import "./App.css";

const API_URL = import.meta.env.VITE_API_URL

function App() {
  const [joke, setjoke] = useState(null);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          fetch(`${API_URL}/api/random-joke`)
            .then((res) => res.json())
            .then((joke) => {
              setjoke(joke.text);
            });
        }}
      >
        Blague au hasard
      </button>
      <p>
        {joke
          ? joke
          : "Cliquez sur le bouton pour obtenir une blague au hasard"}
      </p>
    </>
  );
}

export default App;
