import "./App.css";
import Login from "./components/Auth/Login";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Auth/Signup";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Home from "./pages/Home";
import { Navbar } from "./components/navbar";
import HamburgerContextProvider from "./context/HamburgerContext";
import OrderComplete from "./pages/OrderComplete";

function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
        <HamburgerContextProvider>
      <Navbar />
          <Routes>
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
             <Route
              path="/order-completed"
              element={
                <ProtectedRoute>
                  <OrderComplete />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </HamburgerContextProvider>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
