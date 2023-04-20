import Header from "./components/header/Header";
import About from "./components/about/About";
import Interests from "./components/Interests/Interests";
import Footer from "./components/footer/Footer";
import "./App.css";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <About />
        <Interests />
        <Footer />
      </div>
    </div>
  );
}

export default App;
