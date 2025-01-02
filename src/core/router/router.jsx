import { createBrowserRouter } from "react-router-dom";
import Home from "pages/home";
const AppRouter = () => {
  const routes = [
    {
      path: "/",
      element: (
        <>
          <Home />
        </>
      ),
    },
  ];
  const router = createBrowserRouter(routes);

  return router;
};
export default AppRouter;
