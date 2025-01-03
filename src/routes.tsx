import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { DashBoard } from './pages/app/dashboard'
import { SingIn } from './pages/auth/sing-in'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [{ path: '/', element: <DashBoard /> }],
  },

  {
    path: '/sing-in',
    element: <AuthLayout />,
    children: [{ path: '/sing-in', element: <SingIn /> }],
  },
])
