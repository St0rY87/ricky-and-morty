// import s from "./CharacterPage.module.css";

import { useEffect, useState } from "react";
import axios from "axios";
import s from "./CharacterPage.module.css";
import { Character } from "../../common/components/Character/Character";

export const CharacterPage = () => {
  const [characters, setCharacters] = useState([]);

  const [info, setInfo] = useState({
    count: 0,
    pages: 0,
    next: null,
    prev: null,
  });

  const fetchData = (url) => {
    axios.get(url).then((res) => {
      setCharacters(res.data.results);
      setInfo(res.data.info);
    });
  };

  useEffect(() => {
    fetchData("https://rickandmortyapi.com/api/character");
  }, []);

  const nextPageHandler = () => {
    fetchData(info.next);
  };

  const previousPageHandler = () => {
    fetchData(info.prev);
  };

  const searchHandler = (e) => {
    const value = e.currentTarget.value;
    fetchData(`https://rickandmortyapi.com/api/character?name=${value}`);
  };

  return (
    <div className={"pageContainer"}>
      <h1 className={"pageTitle"}>CharacterPage</h1>
      <input
        type="search"
        className={s.search}
        onChange={searchHandler}
        placeholder="Search..."
      />
      {characters.length && (
        <div>
          {
            <div className={s.characters}>
              {characters.map((character) => (
                <Character character={character} key={character.id} />
              ))}
            </div>
          }

          <div className={s.buttonContainer}>
            <button
              disabled={info.prev === null}
              className="linkButton"
              onClick={previousPageHandler}
            >
              Назад
            </button>

            <button
              disabled={info.next === null}
              className="linkButton"
              onClick={nextPageHandler}
            >
              Вперед
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
