import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './features/home/Home'
import AppLayout from './ui/AppLayout'
import Error from './ui/Error'
import Loader from './ui/Loader'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [{ path: '/', element: <Home /> }]
  }
])

export default function App() {
  return <RouterProvider router={router} fallbackElement={<Loader />} />
}
