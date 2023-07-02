import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom'
import MainLayout from './layouts/MainLayout.tsx'
import Home from './pages/home/Home.tsx'
import Product from './pages/product/Product.tsx'
import PageNotFoundView from './error/PageNotFoundView.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '*', element: <Navigate to='/404' /> },
      { path: '/', element: <Home /> },
      { path: '404', element: <PageNotFoundView /> },
      { path: '/product/:id', element: <Product /> },
    ],
  },
  {
    path: '/product/:id',
    element: <Product />,
  },
])
function AppRouter() {
  return <RouterProvider router={router} />
}

export default AppRouter
