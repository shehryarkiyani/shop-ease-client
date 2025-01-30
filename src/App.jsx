// import AppRouter from "core/router/router";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/home/Signuppage";
import Loginpage from "./pages/home/Loginpage";

import Dashboard from "./pages/home/dashboard";
import { useState } from "react";
import { Inputcontext } from "./context";
import Productinfo from "./pages/home/Productinfo";
import {Signupverification} from "./components/signupverifcation";
import Cart from "./components/cart";

function App() {
  const [inputvalue,setinputvalue]=useState("");

  return (
    <>
<Inputcontext.Provider value={{inputvalue, setinputvalue}}>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Loginpage/>}/>
<Route path="/signup" element={<Signup/>}/>
<Route path="/dashboard" element={<Dashboard/>}/>
<Route path="/phones" element={<Productinfo/>}/>
<Route path="/email" element={<Signupverification verify="true"/>}/>
<Route path="/cart" element= { <Cart/>}/>
      </Routes>
      
      
      </BrowserRouter>
</Inputcontext.Provider>
    </>
  );
}

export default App;
