import Characters from "./Pages/Characters/Characters";
import Episodes from "./Pages/Episodes/Episodes";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Locations from "./Pages/Locations/Locations";
import WatchList from "./Pages/WatchList/WatchList";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={ <Home isHome={true} /> } />
          <Route path="/characters" element={ <Characters isCharacters={true}/> } />
          <Route path="/episodes" element={ <Episodes isEpisodes={true}/> } />
          <Route path="/locations" element={ <Locations isLocations={true}/> } />
          <Route path="/watch-list" element={ <WatchList isWatchList={true}/> } />
        </Routes>
      </Router>

      
    </div>
  );
}

export default App;
