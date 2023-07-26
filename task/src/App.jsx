import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  const Layout = () => {
    return (
      <div>
        <Home />
      </div>
    );
  };

  const [currentUser, setCurrentUser] = useState(false);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const handleLogin = () => {
    setCurrentUser(true);
  };

  const handleRegister = () => {
    setCurrentUser(true);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />{" "}
        <Route
          path="/register"
          element={<Register onRegister={handleRegister} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
