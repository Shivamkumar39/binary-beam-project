import Navbar from "../Navbar";
import Footer from "../Footer";

const Home = () => (
  <>
  <div className="p-10 text-center">
    <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
    <p className="text-lg max-w-xl mx-auto text-gray-700">
      🚀 This website demonstrates how to <strong>implement protected routes</strong> that require authentication to access.
      <br />
      🔒 You <span className="font-semibold">cannot directly access the Dashboard</span> without logging in.
      <br />
      Please <span className="text-blue-600 font-semibold">Login</span> first to get authorized access.
    </p>
  </div>
    
  </>
);

export default Home;
