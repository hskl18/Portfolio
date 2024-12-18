import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  TicTacToe,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-cover bg-no-repeat bg-center min-h-screen bg-[rgb(21,21,21)]">
        <StarsCanvas />
        <Navbar />
        <Hero />
        <About />
        <Tech />
        <Works />
        <Experience />
        {/* <TicTacToe /> */}
        {/* <Contact /> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
