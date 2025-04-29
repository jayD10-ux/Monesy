import ExpenseTracker from "./Components/ExpenseTracker";
import WelcomeScreen from "./Components/WelcomeScreen";
import PassphraseSignup from "./Components/PassphraseSignup";
import PassphraseLogin from "./Components/PassphraseLogin";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { getUserType } from "./storage";

function App() {
  const userType = getUserType();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Router>
        <Routes>
          {/* If user is guest or registered, show Dashboard */}
          {userType ? (
            <>
              <Route path="/dashboard" element={<ExpenseTracker />} />
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </>
          ) : (
            <>
              {/* Otherwise show Welcome/Login/Signup screens */}
              <Route path="/" element={<WelcomeScreen />} />
              <Route path="/signup" element={<PassphraseSignup />} />
              <Route path="/login" element={<PassphraseLogin />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
