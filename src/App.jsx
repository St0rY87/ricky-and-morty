import { Header } from "./common/components/Header/Header";
import { CharactersPage } from "./pages/CharactersPage/CharactersPage";
import { CharacterPage } from "./pages/CharacterPage/CharacterPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { EpisodePage } from "./pages/EpisodesPage/EpisodePage";
import { Route, Routes } from "react-router";
import { LocationsPage } from "./pages/LocationsPage/LocationsPage";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/characters/:id" element={<CharacterPage />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/episodes" element={<EpisodePage />} />
      </Routes>
    </div>
  );
}

export default App;
