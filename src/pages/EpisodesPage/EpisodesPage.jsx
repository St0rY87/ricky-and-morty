import axios from "axios";
import { useEffect, useState } from "react";
import { Episode } from "../../common/components/Episodes/Episode";
import { Spinner } from "../../common/components/Spinner/Spinner";

export const EpisodesPage = () => {
  const [episodes, setEpisodes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://rickandmortyapi.com/api/episode")
      .then((res) => setEpisodes(res.data.results))
      .catch((err) => console.error(err))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="pageContainer">
      <h1 className={"pageTitle"}>Episodes Page</h1>
      {isLoading ? (
        <Spinner />
      ) : (
        episodes.length > 0 &&
        episodes.map((episode) => <Episode episode={episode} />)
      )}
    </div>
  );
};
