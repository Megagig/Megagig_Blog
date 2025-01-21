import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './App.jsx';

//Public Routes
import HomeRoute from './routes/HomeRoute.jsx';
import PostListPage from './pages/blog/components/PostListPage';
import Write from './pages/blog/components/Write';
// import LoginPage from './routes/LoginPage';
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

// Auth Routes
import SignupPage from './pages/auth/SignupPage';
import LoginPage from './pages/auth/LoginPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';

// Admin Routes
import AdminLayout from './layouts/AdminLayout';
import DashboardPage from './pages/admin/DashboardPage';
import AllBlogs from './pages/admin/blogs/AllBlogs';
import DraftBlogs from './pages/admin/blogs/DraftBlogs';
import AddBlog from './pages/admin/blogs/AddBlog';
import AllProjects from './pages/admin/projects/AllProjects';
import DraftProjects from './pages/admin/projects/DraftProjects';
import AddProject from './pages/admin/projects/AddProject';
import AllProducts from './pages/admin/products/AllProducts';
import DraftProducts from './pages/admin/products/DraftProducts';
import AddProduct from './pages/admin/products/AddProduct';
import AnalyticsPage from './pages/admin/analytics/AnalyticsPage';
import CommentsPage from './pages/admin/comments/CommentsPage';
import UsersPage from './pages/admin/users/UsersPage';

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      // Main Routes
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
      // {
      //   path: '/login',
      //   element: <LoginPage />,
      // },
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
      // Auth Routes
      {
        path: '/signup',
        element: <SignupPage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/forgot-password',
        element: <ForgotPasswordPage />,
      },
      // Admin Routes
      {
        path: '/admin',
        element: <AdminLayout />,
        children: [
          {
            path: 'dashboard',
            element: <DashboardPage />,
          },
          {
            path: 'blogs',
            element: <AllBlogs />,
          },
          {
            path: 'blogs/drafts',
            element: <DraftBlogs />,
          },
          {
            path: 'blogs/new',
            element: <AddBlog />,
          },
          {
            path: 'projects',
            element: <AllProjects />,
          },
          {
            path: 'projects/drafts',
            element: <DraftProjects />,
          },
          {
            path: 'projects/new',
            element: <AddProject />,
          },
          {
            path: 'products',
            element: <AllProducts />,
          },
          {
            path: 'products/drafts',
            element: <DraftProducts />,
          },
          {
            path: 'products/new',
            element: <AddProduct />,
          },
          {
            path: 'analytics',
            element: <AnalyticsPage />,
          },
          {
            path: 'comments',
            element: <CommentsPage />,
          },
          {
            path: 'users',
            element: <UsersPage />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
