import { createBrowserRouter } from "react-router";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    errorElement: <Error />,
    children: [
      {path: '/', element: <Home />},
    ]
  }
])

export default function App() {
  return <RouterProvider router={router} fallbackElement={<Loader />} />
}
