import "./App.css";
import "./api/Api";
import Header from "./components/Header";
import Search from "./components/Search";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Search />
      <Footer />
    </div>
  );
}

export default App;
