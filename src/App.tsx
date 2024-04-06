import "./sass/main.scss";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Employees from "./pages/employees/Employees";

function App() {

  const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
      <div>
        <Navbar />
        {children}
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout><Outlet /></Layout>,
      children: [
        { path: "/", element: <Home /> },
        { path: "/employees", element: <Employees /> }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  ) 
}

export default App;
