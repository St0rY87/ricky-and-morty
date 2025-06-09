import s from "./Character.module.css";
import { Link } from "react-router";

export const Character = ({ character }) => {
  return (
    <Link to={`/characters/${character.id}`} className={s.character}>
      <span className={s.characterLink}>{character.name}</span>
      <img src={character.image} alt={`${character.name} avatar`} />
    </Link>
  );
};
