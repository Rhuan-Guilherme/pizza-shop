import { createBrowserRouter } from 'react-router-dom'

import { DashBoard } from './pages/app/dashboard'
import { SingIn } from './pages/auth/sing-in'

export const router = createBrowserRouter([
  { path: '/', element: <DashBoard /> },
  { path: '/sing-in', element: <SingIn /> },
])
