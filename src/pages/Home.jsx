import Hero from "../components/header/hero/Hero";
import Partner from "../components/partner/Partner";
import About from "./About";
import "../pages/bubble.css";
import Contact from "./Contact";
import Mission from "./mission/Mission";
import Timeline from "../components/Timeline";



const Home = () => {


  

  
    return (
      <div className="relative">
        {/* Bubble Background */}
        <div className="absolute inset-0 max-w-screen-lg mx-auto overflow-hidden z-10 pointer-events-none">
          {/* Add enough bubble divs to cover the entire height */}
          <div className="bubble bubble-1"></div>
          <div className="bubble bubble-2"></div>
          <div className="bubble bubble-3"></div>
          <div className="bubble bubble-4"></div>
          <div className="bubble bubble-5"></div>
          <div className="bubble bubble-6"></div>
          <div className="bubble bubble-7"></div>
          <div className="bubble bubble-8"></div>
          <div className="bubble bubble-9"></div>
          <div className="bubble bubble-10"></div>
          <div className="bubble bubble-11"></div>
          <div className="bubble bubble-12"></div>
        </div>
        
        <div className="relative z-20">
          {/* <NavbarCompo></NavbarCompo> */}
          <Hero></Hero>
          <section id="about">
            <About></About>
          </section>
          <section>
            <Mission></Mission>
          </section>
          <Timeline></Timeline>
          <section id="partner">
            {" "}
            <Partner></Partner>
          </section>
          <section id="contact">
            <Contact></Contact>
          </section>

          {/* <Footer></Footer> */}
        </div>
      </div>
    );
};

export default Home;
