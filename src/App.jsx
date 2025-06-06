import { CharacterPage } from "./pages/CharacterPage/CharacterPage";
import { EpisodesPage } from "./pages/EpisodesPage/EpisodesPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { LocationPage } from "./pages/LocationPage/LocationPage";
import { Header } from "./common/components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <CharacterPage />
      <EpisodesPage />
      <LocationPage />
    </div>
  );
}

export default App;
