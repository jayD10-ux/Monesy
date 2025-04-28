import { useNavigate } from "react-router-dom";

function WelcomeScreen() {
  const navigate = useNavigate();

  const handleGuest = () => {
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-6">Welcome to Monesy</h1>

      <button
        onClick={() => alert("Login coming soon")}
        className="mb-4 px-6 py-2 bg-blue-500 text-white rounded"
      >
        Login with Passphrase
      </button>

      <button
        onClick={() => alert("Signup coming soon")}
        className="mb-4 px-6 py-2 bg-green-500 text-white rounded"
      >
        Sign Up (New Passphrase)
      </button>

      <button
        onClick={handleGuest}
        className="px-6 py-2 bg-gray-500 text-white rounded"
      >
        Continue as Guest
      </button>
    </div>
  );
}

export default WelcomeScreen;
