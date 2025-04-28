import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { setGuest } from "../storage"; // <-- add this import

function WelcomeScreen() {
  const navigate = useNavigate();

  const handleGuest = () => {
    setGuest();               // <- Save guest userType first
    navigate("/dashboard");    // <- Then navigate
  };

  return (
    <div className="p-8 w-full max-w-md mx-auto flex flex-col items-center mb-8">

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.4 }}
        className="text-4xl font-bold text-center mb-8"
      >
        Welcome to Monesy
      </motion.h1>

      {/* Buttons */}
      <div className="flex flex-col space-y-4 w-full">

        <motion.button
          onClick={() => navigate("/signup")}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 bg-black text-white font-semibold rounded-lg transition duration-300"
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Sign Up with Passphrase
        </motion.button>

        <motion.button
          onClick={() => navigate("/login")}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 bg-gray-700 text-white font-semibold rounded-lg transition duration-300"
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          Login with Passphrase
        </motion.button>

        <motion.button
          onClick={handleGuest} // <-- updated
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 bg-gray-300 text-black font-semibold rounded-lg transition duration-300"
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          Continue as Guest
        </motion.button>

      </div>
    </div>
  );
}

export default WelcomeScreen;
