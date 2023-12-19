import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Error from "./pages/error";
import Makeup from "./pages/makeup";
import Nails from "./pages/nails";
import Hair from "./pages/hair";
import Payment from "./pages/payment";

function App() {
  const router= createBrowserRouter(
  createRoutesFromElements(
<Route path="/" element={<Navbar/>}>
      <Route index element={<Home/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/makeup" element={<Makeup/>} />
      <Route path="/nails" element={<Nails/>} />
      <Route path="/hair" element={<Hair/>} />
      <Route path="/payment" element={<Payment/>} />




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
