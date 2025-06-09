import axios from "axios";
import { useEffect, useState } from "react";
import { Location } from "../../common/components/Location/Location";
import { Spinner } from "../../common/components/Spinner/Spinner";

export const LocationsPage = () => {
  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://rickandmortyapi.com/api/location")
      .then((res) => setLocations(res.data.results))
      .catch((err) => console.error(err))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="pageContainer">
      <h1 className={"pageTitle"}>Location Page</h1>
      {isLoading ? (
        <Spinner />
      ) : (
        locations.length > 0 &&
        locations.map((location) => (
          <Location location={location} key={location.id} />
        ))
      )}
    </div>
  );
};
