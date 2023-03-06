import "../../App.css";
// import { WalletConnect } from "./Component/wallet/wallet";
// import { CreateNFT } from "./Component/CreateNFT/MintButton";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Game from "../game";
import Home from "../home";
import Login from "../login";
// import Frontend from "./layouts/Frontend";

function AppRoutes() {
  return (
    <div className="App">
      <Routes>     
     
        <Route path="/" element={<Home />}> </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/game" element={<Game />}></Route>
       
      </Routes>

      {/* <header className="App-header">
         
         <WalletConnect></WalletConnect>
          <CreateNFT> 
        
      </header> */}
    </div>
  );
}

export default AppRoutes;
