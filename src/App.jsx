import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0  bg-cover bg-no-repeat bg-center min-h-screen'>
        <div className='bg-transparent'>
          <StarsCanvas />
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Tech />
          <Works />
          <div className='relative z-0'>
            <Contact />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
