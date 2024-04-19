import "./App.css";
import './index.css';

import Header from "./Components/Homepage/Header";
import Hero from "./Components/Homepage/Hero";
import Model from "./Components/Homepage/Model";
import About from "./Components/Homepage/About";
import Technical from "./Components/Homepage/Technical";
import VersionToChoose from "./Components/Homepage/VersionToChoose";
import Footer from "./Components/Homepage/Footer";

const App = () => {
  return (
    <>
      <div className="App scroll-smooth">
        <Header />
          
        <Hero/>

        <About/>

        <Model/>

        <Technical/>

        <VersionToChoose />

        <Footer/>
      </div>
    </>
  );
}


export default App;
