import { Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Routing from "./Routes/Routing";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routing/>
    </div>
  );
}

export default App;
