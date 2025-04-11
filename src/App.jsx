import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Header/Navbar";
import HomePage from "./page/HomePage";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // تهيئة AOS
    AOS.init({
      duration: 1000,
      once: false, 
    });

    AOS.refresh();
  }, []);

  return (
    <div className="!overflow-x-hidden">
      <Navbar />
      {/* Routes */}
      <HomePage />
      {/* Routes */}
      <Footer />
    </div>
  );
}

export default App;
