import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import "react-router";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login.js";


function App() {
  //const adminUser = {};

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login/>}> 
          </Route>
          <Route path="/" > 
          </Route>
          {/* <Route path="/" element={}> 
          </Route>
          <Route path="/" element={}> 
          </Route>
          <Route path="/" element={}> 
          </Route> */}

        </Routes>

      </Router>
    </div>
  );
}

export default App;