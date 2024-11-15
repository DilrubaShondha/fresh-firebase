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
    ],
  },
]);

// Render the Application
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
);
