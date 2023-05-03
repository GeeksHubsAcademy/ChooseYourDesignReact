import React, { useState, useEffect } from "react";
import { bringCharacters } from "../../services/apiCalls";
import { CharacterCard } from "../CharacterCard/CharacterCard";

export const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    if (characters.length === 0) {
      bringCharacters()
        .then((respuesta) => {
            setCharacters(respuesta.data.results)
        })
        .catch((error) => console.log(error));
    }
  }, [characters]);

  return (
    <div className="charactersFieldDesign">
      {characters.length > 0 &&
        characters.map((character) => {
          return (
            <div key={character.id}>
              <CharacterCard 
                picture={character.image}
                name={character.name}
                status={character.status}
              />
            </div>
          );
        })}
    </div>
  );
};
