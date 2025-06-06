import { Header } from "./common/components/Header/Header";
import { CharacterPage } from "./pages/CharacterPage/CharacterPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { LocationPage } from "./pages/LocationPage/LocationPage";
import { EpisodePage } from "./pages/EpisodesPage/EpisodePage";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters" element={<CharacterPage />} />
        <Route path="/locations" element={<LocationPage />} />
        <Route path="/episodes" element={<EpisodePage />} />
      </Routes>
    </div>
  );
}

export default App;
