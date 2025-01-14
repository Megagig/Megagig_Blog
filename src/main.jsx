import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import HomeRoute from './routes/HomeRoute.jsx';
import PostListPage from './routes/PostListPage';
import Write from './routes/Write';
import LoginPage from './routes/LoginPage';
import RegisterPage from './routes/RegisterPage';
import SinglePostPage from './routes/SinglePostPage';
import MainLayout from './layouts/MainLayout.jsx';
import PortfolioPage from './pages/portfolio/PortfolioPage.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomeRoute />,
      },
      {
        path: '/posts',
        element: <PostListPage />,
      },
      {
        path: '/write',
        element: <Write />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/register',
        element: <RegisterPage />,
      },
      {
        path: '/portfolio',
        element: <PortfolioPage />,
      },
      {
        path: '/contact',
        element: <PortfolioPage />,
      },
      {
        path: '/services',
        element: <PortfolioPage />,
      },
      {
        path: '/about',
        element: <PortfolioPage />,
      },
      {
        path: '/:slug',
        element: <SinglePostPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
