import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router";

import axios from "axios";
import s from "./CharacterPage.module.css";

export const CharacterPage = () => {
  const [character, setCharacter] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`).then((res) => {
      setCharacter(res.data);
    });
  }, []);

  const getStatusClassName = (status) => {
    const charStatus =
      status === "Alive"
        ? s.aliveStatus
        : status === "Dead"
        ? s.deadStatus
        : s.unknownStatus;

    return `${s.status} ${charStatus}`;
  };

  return (
    <div className="pageContainer">
      {character !== null && (
        <div className={s.container}>
          <h1 className="pageTitle">{character.name}</h1>
          <div className={s.content}>
            <img className={s.img} src={character.image} alt="character" />
            <div className={s.description}>
              <div className={s.statusContainer}>
                <div className={getStatusClassName(character.status)}></div>

                <div>
                  {character.status} - {character.species}
                </div>
              </div>
              <div className={s.info}>
                <p className={s.subTitle}>Last known location:</p>
                <p className={s.subTitleResult}>{character.location.name}</p>
              </div>
              <div className={s.info}>
                <p className={s.subTitle}>Episode count:</p>
                <p className={s.subTitleResult}>{character.episode.length}</p>
              </div>
            </div>
          </div>
          <NavLink to="/characters" className={"linkButton"}>
            Go back
          </NavLink>
        </div>
      )}
    </div>
  );
};
