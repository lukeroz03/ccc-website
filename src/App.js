import "./App.css";
import NavBar from "./NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Constitution from "./Constitution";
import Members from "./Members";
import Projects from "./Projects";

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element ={<Home />} />
            <Route path='constitution' element={<Constitution />} />
            <Route path='members' element={<Members />} />
            <Route path='projects' element={<Projects />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
