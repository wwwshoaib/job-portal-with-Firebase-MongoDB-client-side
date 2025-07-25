
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
import PrivateRoute from '../routes/PrivateRoute';
import JobApply from "../pages/JobApply/JobApply";
import MyApplications from "../pages/MyApplications/MyApplications";
import AddJob from "../pages/AddJob/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import ViewApplications from "../pages/ViewApplications/ViewApplications";
import FAQs from "../pages/FAQs/FAQs";


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
        path: "/addjob",
        element: <PrivateRoute><AddJob></AddJob></PrivateRoute>,
      },
      {
        path: "/jobs",
        element: <AllJobs></AllJobs>
      },
      {
        path: "/jobs/:id",
        element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
        loader: ( {params} ) => fetch(`https://job-portal-server-drab-five.vercel.app/jobs/${params.id}`)
      },
      {
        path: "/jobApply/:id",
        element: <PrivateRoute><JobApply></JobApply></PrivateRoute>,
        loader: ( {params} ) => fetch(`https://job-portal-server-drab-five.vercel.app/jobs/${params.id}`)
      },
      {
        path: "/my-applications",
        element: <PrivateRoute><MyApplications></MyApplications></PrivateRoute>,
      },
      {
        path: "/my-posted-jobs",
        element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>,
      },
      {
        path: "/faqs",
        element: <FAQs></FAQs>,
      },
      {
        path: "/viewApplications/:job_id",
        element: <PrivateRoute><ViewApplications></ViewApplications></PrivateRoute>,
        loader: ( {params }) => fetch(`https://job-portal-server-drab-five.vercel.app/job-applications/jobs/${params.job_id}`)
      },
    ],
  },
  
]);
