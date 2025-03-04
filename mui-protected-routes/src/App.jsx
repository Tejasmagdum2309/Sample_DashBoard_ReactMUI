import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";

function App() {
  return (
    
      <Router>
        <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route  element={<ProtectedRoute/>} >
                  <Route path="/" element={<Dashboard />} />
          </Route>
        </Routes>
         </AuthProvider>
      </Router>
   
  );
}

export default App;
