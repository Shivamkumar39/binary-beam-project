import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./authContext";

const Navbar = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login"); // Redirect to login
  };

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">MyApp</Link>
      <div className="flex items-center">
        {!user ? (
          <Link to="/login" className="mx-2">Login</Link>
        ) : (
          <>
            <span className="mx-2">👋 Hello, {user.name}</span>
            <Link to="/dashboard" className="mx-2">Dashboard</Link>
            <button
              onClick={handleLogout}
              className="ml-4 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
