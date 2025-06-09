import axios from "axios";
import { useEffect, useState } from "react";
import { Location } from "../../common/components/Location/Location";

export const LocationsPage = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/location")
      .then((res) => setLocations(res.data.results));
  }, []);

  return (
    <div className="pageContainer">
      <h1 className={"pageTitle"}>Location Page</h1>
      {locations.length > 0 &&
        locations.map((location) => (
          <Location location={location} key={location.id} />
        ))}
    </div>
  );
};
