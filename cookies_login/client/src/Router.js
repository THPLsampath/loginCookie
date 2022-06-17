import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Customers from "./components/customers/Customers";
import Navbar from "./components/layout/Navbar";
import AuthContext from "./context/AuthContext";

function Router() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<div>Home</div>}></Route>
        {loggedIn === false && (
          <>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </>
        )}
        {loggedIn === true && (
          <Route path="/customer" element={<Customers />}></Route>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
