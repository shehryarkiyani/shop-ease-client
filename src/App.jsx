// import AppRouter from "core/router/router";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
// import { RouterProvider } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Reuse from "./pages/home/Loginpage";
import Signup from "./pages/home/Signuppage";
import Loginpage from "./pages/home/Loginpage";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Loginpage/>}/>
<Route path="/signup" element={<Signup/>}/>
      </Routes>
      
      
      </BrowserRouter>
    </>
  );
}

export default App;
