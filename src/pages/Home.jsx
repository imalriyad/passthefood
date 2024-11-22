import Hero from "../components/header/hero/Hero";
import NavbarCompo from "../components/header/NavbarCompo";
import Partner from "../components/partner/Partner";
import About from "./About";
import "../pages/bubble.css";
import Footer from "../components/Footer";
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
                <NavbarCompo></NavbarCompo>
                <Hero></Hero>
                <section id="about"><About></About></section>
                <section><Mission></Mission></section>
                <Timeline></Timeline>
                <section id="partner"> <Partner></Partner></section>
                <section id="contact"><Contact></Contact></section>
                {/* <div className="flex flex-col items-center py-10">
      <div className="flex flex-col items-center w-full">
      
        <div className="relative flex justify-center w-full mb-10">
          <div className="timeline-circle left-0"></div>
          <div className="timeline-content bg-blue-500 text-white p-6 rounded-lg shadow-lg w-64">
            <h3 className="text-xl font-semibold">Sample Title 1</h3>
            <p className="mt-2 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          </div>
        </div>

    
        <div className="relative flex justify-center w-full mb-10">
          <div className="timeline-circle right-0"></div>
          <div className="timeline-content bg-green-500 text-white p-6 rounded-lg shadow-lg w-64">
            <h3 className="text-xl font-semibold">Sample Title 2</h3>
            <p className="mt-2 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          </div>
        </div>

     
        <div className="relative flex justify-center w-full mb-10">
          <div className="timeline-circle left-0"></div>
          <div className="timeline-content bg-red-500 text-white p-6 rounded-lg shadow-lg w-64">
            <h3 className="text-xl font-semibold">Sample Title 3</h3>
            <p className="mt-2 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          </div>
        </div>
  <div className="relative flex justify-center w-full mb-10">
          <div className="timeline-circle right-0"></div>
          <div className="timeline-content bg-gray-700 text-white p-6 rounded-lg shadow-lg w-64">
            <h3 className="text-xl font-semibold">Sample Title 4</h3>
            <p className="mt-2 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          </div>
        </div>
      </div>
                </div> */}
                <Footer></Footer>
            </div>
            
        </div>
    );
};

export default Home;
