import About from "./components/About"
import {useState} from 'react'
import Contact from "./components/Contact"
import Product from "./components/product"
import Home from "./components/Home"
import Products from "./components/Products"
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import "./App.css"
import { useEffect } from "react"
import Cart from "./components/Cart"
import BuyNow from "./components/BuyNow"
import Login from "./components/Login"
import ProtectedRoute from "./pages/protectedRoute"


function App() {

  const [cart,setcart]=useState([]);
  useEffect(()=>{
    const storedCart=localStorage.setItem("cart",JSON.stringify(cart));
   
  },[cart])
  const lagout=()=>{
    localStorage.removeItem("email");
    window.location.reload();
  
  };
  
  return (
    <>
    <div  className="min-h-screen w-full bg-teal-200 text-gray-900" >

         <header  className="bg-cyan-200 shadow-lg" >
          <h1 className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between" >My App </h1>     
          <nav className="flex flex-wrap items-center gap-4 text-sm font-semibold">
              <Link to="/" className="hover:text-red-600"> Home  |{" "} </Link>
              <Link to="/about"  className="hover:text-red-600" >About Us | {" "} </Link>
              <Link to="/contact" className="hover:text-red-600"> Contact us |{" "}   </Link>
              <Link to="/products" className="hover:text-red-600">Products | {" "}</Link>
              <Link to="/cart" className="hover:text-red-600">cart{cart.length} | {" "}</Link>
              
              <Link to="/cart" className="hover:text-red-600">
                Cart
                <span className="ml-1 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                  {cart.length}
                </span>
              </Link>
              {localStorage.getItem("email") ? (
                <button
                  onClick={lagout}
                  className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700 transition">
                  Logout
                </button>
              ) :
               (
                <Link
                  to="/login"
                  className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 transition"
                >
                  Login
                </Link>
              )}
              

          </nav>
          <hr></hr>

         </header>
         
         <main className="w-full" >      
          <Routes>
          <Route path="/" element={<Home/>}>Home</Route>
          <Route path="/About" element={<About/>}>About</Route>
          <Route path="/Contact" element={<Contact/>}>Contact</Route>
          <Route path="/Products" element={<Products cart={cart}setcart={setcart}/>}>Products</Route>
          <Route path="/product/:id" element={<Product/>}></Route>
          <Route path="/cart" element={
          <ProtectedRoute>
            <Cart cart={cart} setcart={setcart}/>
           </ProtectedRoute>
          }>

          </Route>
         <Route path="/buynow/:id" element={<BuyNow/>}></Route>
         <Route path="/login" element={<Login/>}></Route>
         </Routes>
         </main>
         
         </div>
  </>
  )
}

export default App
