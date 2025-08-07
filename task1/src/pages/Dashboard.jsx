import { useAuth } from "../authContext";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl">Welcome, {user?.name}</h1>
      <p>This is a protected dashboard.</p>
    </div>
  );
};

export default Dashboard;
