import logo from './logo.svg';
import './App.css';
import AppRoutes from "./components/AppRoutes/AppRoutes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home';
import Login from './components/login';
import Sidebar from './components/sidebar';
// import Navbar from './components/navbar';


function App() {
  return (
    <div className="App relative">
    
<BrowserRouter>
<Sidebar/>
{/* <Navbar /> */}

      <AppRoutes />
    </BrowserRouter>

     {/* <Home/> */}
     {/* <Login/> */}
    </div>
  );
}


export default App;

