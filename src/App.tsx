import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Service/Service";  // Fixed folder name to plural 'Services'
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./style/Global.css"; // or you can import GlobalStyle from styled-components if used

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;