import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { getAuth } from 'firebase/auth';
import { authContext } from './components/MainLayout/MainLayout.jsx';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom';
import MainLayout from './components/MainLayout/MainLayout.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import './index.css';

// Create a context (Assuming it's required for your app)
import { createContext } from 'react';
import LogIn from './components/LogIn/LogIn.jsx';
import Register from './components/Register/Register.jsx';
import Profile from './components/Profile/Profile.jsx';

// export const authContext = createContext();

// Define Routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/login',
        element: <LogIn />,
      },
      {
        path: '/profile',
        element: <Profile></Profile>,
      }
    ],
  },
]);

// Render the Application
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
);
