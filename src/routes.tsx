import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { NotFound } from './pages/404'
import { DashBoard } from './pages/app/dashboard/dashboard'
import { Order } from './pages/app/orders/order'
import { SingIn } from './pages/auth/sing-in'
import { SingUp } from './pages/auth/sing-up'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <DashBoard /> },
      { path: '/orders', element: <Order /> },
    ],
  },

  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/sing-in', element: <SingIn /> },
      { path: '/sing-up', element: <SingUp /> },
    ],
  },
])
