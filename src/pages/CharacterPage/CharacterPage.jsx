// import s from "./CharacterPage.module.css";

import { useEffect, useState } from "react";
import axios from "axios";
import s from "./CharacterPage.module.css";
import { Character } from "../../common/components/Character/Character";
export const CharacterPage = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => setCharacters(res.data.results));
  }, []);

  return (
    <div className="pageContainer">
      <h1 className={"pageTitle"}>The Character Page</h1>
      <div className={s.characters}>
        {characters.map((character) => (
          <Character character={character} key={character.id} />
        ))}
      </div>
    </div>
  );
};
