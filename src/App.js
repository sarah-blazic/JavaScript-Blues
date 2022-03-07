import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Catalog from "./components/catalog/Catalog";

function App() {
  const adminUser = {};

  return (
    <div className="App">
      <Navbar />
        <Catalog />
    </div>
  );
}

export default App;
