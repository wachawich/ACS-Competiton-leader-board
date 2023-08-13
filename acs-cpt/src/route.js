import { BrowserRouter,Routes,Route } from "react-router-dom";

import App from "./App";
import Leader from "./page/leader_board/leader";

import "./index.css"

function Toute() {
  return (
    <div className="route">
       <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<App/>}/> 
            <Route path='/leader_board' element={<Leader/>}/> 
            {/* <Route path='/*' element={<Error/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Toute;
