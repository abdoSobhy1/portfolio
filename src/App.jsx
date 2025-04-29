import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./Pages/Layout";
import HomePage from "./Pages/HomePage/HomePage";
import ProjectPage from "./Pages/ProjectPage/ProjectPage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import PageTransition from "./Pages/PageTransition";
import ProjectsPage from "./Pages/ProjectsPage/ProjectsPage";

function App() {
  const location = useLocation();

  return (
    <PageTransition>
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/project/:name" element={<ProjectPage />} />
        </Route>
      </Routes>
    </PageTransition>
  );
}

export default App;
