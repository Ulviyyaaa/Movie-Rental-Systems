import { createBrowserRouter } from "react-router-dom";
import DetailPage from "../Pages/DetailPage";
import Films from "../Pages/Films";
import HomePage from "../Pages/HomePage";
import TvShows from "../Pages/TvShows";

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
    },
    {
      path: "/films",
      element: <Films/>,
    },
    {
      path: "/tvshow",
      element: <TvShows/>,
    },
    {
      path: "/detail/:_id",
      element: <DetailPage/>,
    },
  ]);
  export {router}