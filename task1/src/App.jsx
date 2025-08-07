import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginSignup from "./pages/LoginSignup";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import { AuthProvider } from "./authContext";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col">
        <Router>
          <Navbar />
          
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginSignup />} />
              <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            </Routes>
          </div>
          
          <Footer />
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
