import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Competitions from "./components/competitions/Competitions-main.jsx";
import Courses from "./components/courses/Courses-active.jsx";
import Footer from "./components/Footer.jsx";
import ForWho from "./components/ForWho.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import News from "./components/News.jsx";

import Course from "./components/Course.jsx";
import "./index.css";
import TabMenuCourse from "./components/TabMenuCourse.jsx";
import Registration from "./components/Registration.jsx";
import Login from "./components/Login.jsx";
import FAQpage from "./pages/FAQpage.jsx";
import LearningPage from "./pages/LearningPage.jsx";
import CompetitionPage from "./pages/CompetitionPage.tsx";
import CompetitonsPage from "./pages/CompetitonsPage.tsx";
import ContactPage from "./pages/ContactPage.jsx";
import { CreateCompetitionPage } from "./pages/CreateCompetitionPage.tsx";
import { CompetionsProvider } from "./components/providers/competions-provider.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";

const App = () => {
  return (
    <Router>
      <Header />
      <CompetionsProvider>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Registration />
              </>
            }
          />
          <Route
            path="/Main"
            element={
              <>
                <Hero />
                <ForWho />
                <Competitions />
                <Courses category={undefined} />
                <News />
                <Footer />
              </>
            }
          />
          <Route path="/Competitions" element={<CompetitonsPage />} />
          <Route path="CreateCompetition" element={<CreateCompetitionPage />} />
          <Route path="/learning" element={<LearningPage />} />
          <Route
            path="/forum"
            element={
              <>
                <Footer />
              </>
            }
          />
          <Route path="/faq" element={<FAQpage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/Competition" element={<CompetitionPage />} />
          <Route
            path="/Course"
            element={
              <>
                <Course />
                <TabMenuCourse />
                <Footer />
              </>
            }
          />
          <Route path="/Registration" element={<RegisterPage />} />
          <Route
            path="/Login"
            element={
              <>
                <Login />
              </>
            }
          />
        </Routes>
      </CompetionsProvider>
    </Router>
  );
};

export default App;
