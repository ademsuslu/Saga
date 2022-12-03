import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";
import Projects from "./pages/Projects/Projects";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
