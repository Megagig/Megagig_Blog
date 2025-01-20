import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './App.jsx';

import HomeRoute from './routes/HomeRoute.jsx';
import PostListPage from './pages/blog/components/PostListPage';
import Write from './pages/blog/components/Write';
import LoginPage from './routes/LoginPage';
import RegisterPage from './routes/RegisterPage';
import SinglePostPage from './pages/blog/components/SinglePostPage';
import MainLayout from './layouts/MainLayout.jsx';
import PortfolioPage from './pages/portfolio/PortfolioPage.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from './pages/blog/Blog.jsx';
import ShopPage from './pages/shop/ShopPage';
import ProductDetailsPage from './pages/shop/ProductDetailsPage';
import CheckoutPage from './pages/shop/CheckoutPage';
import ContactPage from './pages/contact/ContactPage.jsx';

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
        element: <ContactPage />,
      },
      {
        path: '/services',
        element: <PortfolioPage />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/about',
        element: <PortfolioPage />,
      },
      {
        path: '/shop',
        element: <ShopPage />,
      },
      {
        path: '/shop/:id',
        element: <ProductDetailsPage />,
      },
      {
        path: '/checkout/:id',
        element: <CheckoutPage />,
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
