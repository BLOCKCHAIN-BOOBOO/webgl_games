import logo from './logo.svg';
import './App.css';
import AppRoutes from "./components/AppRoutes/AppRoutes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home';
import Login from './components/login';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}


<BrowserRouter>
{/* <ExploreNFT/> */}
      <AppRoutes />
    </BrowserRouter>

     {/* <Home/> */}
     {/* <Login/> */}
    </div>
  );
}

export default App;

