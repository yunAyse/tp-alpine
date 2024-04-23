import "./App.css";
import "./index.css";

import { Routes, Route } from 'react-router-dom';

import Home from "./Components/Homepage/Home";
import Configurator from "./Components/Configurator/Configurator";

const App = () => {
  return (
    <>
        <main className="App scroll-smooth">
            <Routes>
              <Route path="/" element={<Home />} exact  />
              <Route path="/configurator" element={<Configurator/>} />
            </Routes>
      
        </main>
    </>
  );
};

export default App;
