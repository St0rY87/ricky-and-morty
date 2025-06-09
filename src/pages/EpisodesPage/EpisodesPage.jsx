import axios from "axios";
import { useEffect, useState } from "react";
import { Episode } from "../../common/components/Episodes/Episode";

export const EpisodesPage = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/episode")
      .then((res) => setEpisodes(res.data.results));
  }, []);

  return (
    <div className="pageContainer">
      <h1 className={"pageTitle"}>The Episode Page</h1>
      {episodes.map((episode) => (
        <Episode episode={episode} />
      ))}
    </div>
  );
};
