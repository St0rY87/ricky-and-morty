import s from "./Character.module.css";

export const Character = ({ character }) => {
  return (
    <div className={s.character}>
      <div className={s.characterLink}>{character.name}</div>
      <img src={character.image} alt={`${character.name} avatar`} />
    </div>
  );
};
