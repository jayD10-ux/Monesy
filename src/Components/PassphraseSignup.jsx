import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const words = [
  "tree", "cloud", "river", "stone", "light", "dream", "path", "star", "wind", "sky"
];

function PassphraseSignup() {
  const [passphrase, setPassphrase] = useState("");
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  

  useEffect(() => {
    const randomWords = [];
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * words.length);
      randomWords.push(words[randomIndex]);
    }
    setPassphrase(randomWords.join(" — "));
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(passphrase);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset "Copied!" after 2 sec
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const handleSave = () => {
    // We'll connect saving later
    navigate("/dashboard");
  };

  return (
    <div className="p-8 w-full max-w-md mx-auto flex flex-col items-center mb-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-6"
      >
        Your Passphrase
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-xl font-medium text-center mb-8"
      >
        {passphrase}
      </motion.div>

      {/* Copy Button */}
      <motion.button
        onClick={handleCopy}
        className="mb-8 bg-gray-300 text-black px-4 py-2 rounded-full text-sm font-medium"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {copied ? "Copied!" : "Copy Passphrase"}
      </motion.button>

      <motion.button
        onClick={handleSave}
        className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Save and Continue
      </motion.button>
    </div>
  );
}

export default PassphraseSignup;
