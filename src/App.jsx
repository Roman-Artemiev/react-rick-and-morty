import Characters from "./Pages/Characters/Characters";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/characters" element={ <Characters/> } />
        </Routes>
      </Router>

      
    </div>
  );
}

export default App;
