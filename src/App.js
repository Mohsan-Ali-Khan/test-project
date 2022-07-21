import { Routes, Route } from "react-router-dom";
import HamburgerContextProvider from "./context/HamburgerContext";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import OrderComplete from "./pages/OrderComplete";
import { App_Routes } from "./constants/Routes";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import { Navbar } from "./components/navbar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
        <HamburgerContextProvider>
          <Navbar />
          <Routes>
            <Route
              path={App_Routes.HOME}
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path={App_Routes.ORDER_COMPLETED}
              element={
                <ProtectedRoute>
                  <OrderComplete />
                </ProtectedRoute>
              }
            />
            <Route path={App_Routes.LOGIN} element={<Login />} />
            <Route path={App_Routes.SIGNUP} element={<Signup />} />
          </Routes>
        </HamburgerContextProvider>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
