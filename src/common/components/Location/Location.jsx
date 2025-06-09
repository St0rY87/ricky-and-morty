export const Location = ({ location }) => {
  return (
    <>
      <ul>
        <li>
          Название локации: <b> {location.name}</b>
        </li>
        <li>
          Тип локации: <b> {location.type}</b>
        </li>
        <li>
          Измерение, в котором находится местоположение:
          <b> {location.dimension}</b>
        </li>
        <li>
          Количество персонажей, которых видели в данной локации:{" "}
          <b> {location.residents.length}</b>
        </li>
      </ul>
      <hr />
    </>
  );
};
