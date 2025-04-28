import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import WelcomeScreen from "./Components/WelcomeScreen";
import ExpenseTracker from "./Components/ExpenseTracker";
import PassphraseSignup from "./Components/PassphraseSignup"; 
import PassphraseLogin from "./Components/PassphraseLogin";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-100">
      <Router>
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/login" element={<PassphraseLogin />} />
          {/* Placeholder for signup route */}
          <Route path="/signup" element={<PassphraseSignup />} />
          {/* Placeholder for login route */}
          <Route path="/dashboard" element={<ExpenseTracker />} />
          {/* If any unknown route, redirect to Welcome */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
