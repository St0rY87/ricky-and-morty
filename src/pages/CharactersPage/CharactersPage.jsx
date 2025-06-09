import { useEffect, useState } from "react";
import axios from "axios";
import s from "./CharactersPage.module.css";
import { Character } from "../../common/components/Character/Character";
import { Link } from "react-router";
import { Spinner } from "../../common/components/Spinner/Spinner";

export const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const [info, setInfo] = useState({
    count: 0,
    pages: 0,
    next: null,
    prev: null,
  });

  const fetchData = (url) => {
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => {
        setCharacters(res.data.results);
        setInfo(res.data.info);
        setError(null);
      })
      .catch((err) => {
        setError(err.response.data.error);
      })
      .finally(() => setIsLoading(false));
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
    <div className={`pageContainer ${s.charactersPage}`}>
      <h1 className={"pageTitle"}>Characters Page</h1>
      <input
        type="search"
        className={s.search}
        onChange={searchHandler}
        placeholder="Search..."
      />

      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {error && <div className="errorMessage">{error}</div>}
          {!error && characters.length && (
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
        </>
      )}
    </div>
  );
};
