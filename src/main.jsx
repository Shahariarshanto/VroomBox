import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Layout/Home.jsx';
import AddToy from './components/pages/AddToy.jsx';
import AllToys from './components/pages/AllToys.jsx';
import Blogs from './components/pages/Blogs.jsx';
import Login from './components/pages/LoginRegistration/Login.jsx';
import Registration from './components/pages/LoginRegistration/Registration.jsx';
import MyToys from './components/pages/MyToys.jsx';
import NotFoundPage from './components/Shared/NotFoundPage.jsx';
import AuthProviders from './components/providers/AuthPrvider.jsx';
import PrivateRoute from './components/Routes/PrivateRoute.jsx';
import { HelmetProvider } from 'react-helmet-async';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/toys",
        element: <AllToys />,
      },
      {
        path: "/my-toys",
        element: <PrivateRoute><MyToys /></PrivateRoute>,
      },
      {
        path: "/add-toy",
        element: <PrivateRoute><AddToy /></PrivateRoute>,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProviders>
  </React.StrictMode>,
)
