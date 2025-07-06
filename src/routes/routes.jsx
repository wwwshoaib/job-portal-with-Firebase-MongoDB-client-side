
import {
  createBrowserRouter,
} from "react-router-dom";

import ErrorPage from "../components/ErrorPage/ErrorPage";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login/Login";
import SignUp from "../pages/Auth/SignUp/SignUp";
import AllJobs from "../pages/AllJobs/AllJobs";
import JobDetails from "../pages/JobDetails/JobDetails";

 export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/jobs",
        element: <AllJobs></AllJobs>
      },
      {
        path: "/jobs/:id",
        element: <JobDetails></JobDetails>,
        loader: ( {params} ) => fetch(`http://localhost:5000/jobs/${params.id}`)
      },
    ],
  },
  
]);
