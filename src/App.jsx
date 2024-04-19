import "./App.css";
import './index.css';

import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Model from "./Components/Model";
import About from "./Components/About";

const App = () => {
  return (
    <>
      <div className="App">
        <Header />
          
        <Hero/>

        <About/>

        <Model/>
      </div>
    </>
  );
}


export default App;
