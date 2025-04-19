import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Competitions from "./components/Competitions";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import ForWho from "./components/ForWho";
import Header from "./components/Header";
import Hero from "./components/Hero";
import News from "./components/News";
import CompetitionHero from "./components/CompetitionHero";
import CompetitionTabs from "./components/competitionTabs";
import СompetitionTabsNow from "./components/СompetitionTabsNow.jsx";
import CompetitionList from "./components/CompetitionList.jsx";
import ComHero from "./components/ComHero.jsx";
import TabMenu from "./components/TabMenu.jsx";
import Course from "./components/Course.jsx";
import TabMenuCourse from "./components/TabMenuCourse.jsx";
import Registration from "./components/Registration.jsx";
import Login from "./components/Login.jsx";
import LearningPage from "./pages/LearningPage.jsx";
import "./index.css";

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
        <Route
          path="/Competitions"
          element={
            <>
              <CompetitionHero />
              <CompetitionTabs />
              <СompetitionTabsNow />
              <CompetitionList />
              <Footer />
            </>
          }
        />
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
          path="/faq"
          element={
            <>
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Footer />
            </>
          }
        />
        <Route
          path="/Competition"
          element={
            <>
              <ComHero />
              <TabMenu />
              <Footer />
            </>
          }
        />
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
