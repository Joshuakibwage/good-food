import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Banner from "./components/Banner";
import WhyChooseUs from "./components/WhyChooseUs"
import AboutUs from "./components/AboutUs";
 
 const App = () => {
   return (
     <div>
      <Navbar />
      <Hero />
      <Banner />
      <WhyChooseUs />
      <AboutUs />
      <Banner />
     </div>
   )
 }
 
 export default App