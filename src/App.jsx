import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import NavbarComponent from "./components/NavbarComponent";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ActivityPage from "./pages/ActivityPage";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <Router>
      <>
        <NavbarComponent />

        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/activity" element={<ActivityPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <FooterComponent />
      </>
    </Router>
  );
}

export default App;
