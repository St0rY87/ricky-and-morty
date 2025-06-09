export const Episode = ({ episode }) => {
  return (
    <>
      <ul>
        <li>
          Эпизод: <b> {episode.episode}</b>
        </li>
        <li>
          Название эпизода: <b> {episode.name}</b>
        </li>
        <li>
          Дата выхода эпизода в эфир:
          <b> {episode.air_date}</b>
        </li>
        <li>
          Список персонажей, которые были замечены в эпизоде:{" "}
          <b> {episode.characters.length}</b>
        </li>
      </ul>
      <hr />
    </>
  );
};
