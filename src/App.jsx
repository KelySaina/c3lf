import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import NavbarComponent from "./components/NavbarComponent";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ActivityPage from "./pages/ActivityPage";
import TeamPage from "./pages/TeamPage";
import FooterComponent from "./components/FooterComponent";
import NotFoundPage from "./pages/NotFoundPage"; // Import NotFoundPage

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

          {/* Catch-all route for unknown paths */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        <FooterComponent />
      </>
    </Router>
  );
}

export default App;
