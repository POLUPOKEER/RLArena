import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Competitions from "./components/Competitions";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import ForWho from "./components/ForWho";
import Header from "./components/Header";
import Hero from "./components/Hero";
import News from "./components/News";
import Course from "./components/Course.jsx";
import "./index.css";
import TabMenuCourse from "./components/TabMenuCourse.jsx";
import Registration from "./components/Registration.jsx";
import Login from "./components/Login.jsx";
import FAQpage from "./pages/FAQpage.jsx";
import LearningPage from "./pages/LearningPage.jsx";
import CompetitionPage from "./pages/CompetitionPage.jsx";
import CompetitonsPage from "./pages/CompetitonsPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

const App = () => {
  return (
    <Router>
      <Header />
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
              <Courses />
              <News />
              <Footer />
            </>
          }
        />
        <Route path="/Competitions" element={<CompetitonsPage />} />
        <Route path="/learning" element={<LearningPage />} />
        <Route
          path="/forum"
          element={
            <>
              <Footer />
            </>
          }
        />
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
        <Route
          path="/Registration"
          element={
            <>
              <Registration />
            </>
          }
        />
        <Route
          path="/Login"
          element={
            <>
              <Login />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
