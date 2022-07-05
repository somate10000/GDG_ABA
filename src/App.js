import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Organiser from "./components/Organiser";
import Community from "./components/Community";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <div className="box-border p-0 m-0">
      <Header />
      <Hero />
      <About />
      <Organiser />
      <Community />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
