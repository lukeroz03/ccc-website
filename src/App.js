import './App.css';
import NavBar from './NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Constitution from './Constitution';
import Members from './Members';
import Projects from './Projects';


const projects = [
	{
		name:"ASCII Function Grapher",
		description:"A program that graphs functions in ASCII art.",
		link:"something.something.website.com",
		languages:["React,Javascript,HTML,CSS"],
		date:"2021-01-01"
		}
	];
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
	    <Route path="/" element={<NavBar />}>
             <Route index element ={<Home />} />
             <Route path='constitution' element={<Constitution />} />
             <Route path='members' element={<Members />} />
             <Route path='projects' element={<Projects projects={projects}/>} />
	    </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
