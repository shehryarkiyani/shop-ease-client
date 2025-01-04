// import AppRouter from "core/router/router";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
// import { RouterProvider } from "react-router-dom";
import Loginpage from "./pages/home/Loginpage";

function App() {
  return (
    <>
      {/* <RouterProvider router={AppRouter()} /> */}
      <Loginpage/>
    </>
  );
}

export default App;
