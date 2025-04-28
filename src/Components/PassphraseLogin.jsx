import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { getPassphrase } from "../storage"; // helper we already have
import { motion } from "framer-motion";

function PassphraseLogin() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const savedPassphrase = getPassphrase();
    if (input.trim().toLowerCase() === savedPassphrase?.toLowerCase()) {
      navigate("/dashboard");
    } else {
      setError("Incorrect passphrase. Please try again.");
    }
  };

  return (
    <div className="p-8 w-full max-w-md mx-auto flex flex-col items-center mb-8">
      
      {/* Title */}
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-2xl font-bold text-center mb-6"
      >
        Enter Your Passphrase
      </motion.h1>

      {/* Input */}
      <motion.textarea
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        rows={3}
        placeholder="Type your 3 words here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full text-center bg-transparent outline-none text-black placeholder-gray-400 text-sm font-medium p-4 border rounded-lg mb-4"
      />

      {/* Error */}
      {error && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-red-500 text-sm mb-4 text-center"
        >
          {error}
        </motion.div>
      )}

      {/* Login Button */}
      <motion.button
        onClick={handleLogin}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-black text-white rounded-full px-6 py-3 text-sm font-medium"
      >
        Login
      </motion.button>
    </div>
  );
}

export default PassphraseLogin;
