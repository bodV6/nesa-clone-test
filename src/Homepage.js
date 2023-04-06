import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";

function Homepage() {
  return (
    <div>
      <div className="hp-container">
        <Header />
        <Main />
        <Footer />
      </div>

    </div>
  );
}

export default Homepage;
