import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header"; // Import the Header component
import Home from "./pages/Home"; // Home page
import SignIn from "./pages/SignIn"; // Sign-In page
import SignOut from "./pages/SignUp"; // Sign-Out page

function App() {
  return (
    <Router>
      {/* Header that stays on all pages */}
      <Header />

      {/* Defining routes for different pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signout" element={<SignOut />} />
      </Routes>
    </Router>
  );
}

export default App;
