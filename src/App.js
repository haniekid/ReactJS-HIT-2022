import Features from "./components/Features";
import Home from "./components/Home";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Home />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
