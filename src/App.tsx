import "./sass/main.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

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
      element: <Layout>Home</Layout>
    }
  ])

  return (
    <RouterProvider router={router} />
  ) 
}

export default App;
