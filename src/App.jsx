// src/App.jsx
import "./App.css";
import Login from "./FullLoginPart/Login.jsx";
import Register from "./FullLoginPart/Register.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Homepage/Home.jsx";
import ProtectedRoute from "./securityFolder/ProtectedRoute.jsx";
import RootRedirect from "./securityFolder/RootRedirect.jsx";
import Logout from "./FullLoginPart/Logout.jsx";
import SearchResultPage from "./Homepage/SearchResultPage.jsx";
import ScrollToTop  from "./ScrollToTop.jsx";
import CarDetailsPage from "./CarDetailsPage.jsx";

function App() {
  
  return (
     <>
     <ScrollToTop />
    <Routes>
      <Route path="/" element={<RootRedirect />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/cars" element={<SearchResultPage />} />

      {/* Home */}
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/home/car/:carId"
        element={
          <ProtectedRoute>
            <CarDetailsPage />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
    </>
  );
  
}

export default App;
