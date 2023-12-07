import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Error from "./pages/error";
import Makeup from "./pages/makeup";

function App() {
  const router= createBrowserRouter(
  createRoutesFromElements(
<Route path="/" element={<Navbar/>}>
      <Route index element={<Home/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/makeup" element={<Makeup/>} />

      <Route path="*" element={<Error/>} />

      </Route>
  ))
  return (
   <div >
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
