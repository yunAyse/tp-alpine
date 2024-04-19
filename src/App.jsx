import "./App.css";
import './index.css';

import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Model from "./Components/Model";
import About from "./Components/About";
import Technical from "./Components/Technical";
import Configurator from "./Components/Configurator";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <div className="App">
        <Header />
          
        <Hero/>

        <About/>

        <Model/>

        <Technical/>

        <Configurator/>

        <Footer/>
      </div>
    </>
  );
}


export default App;
