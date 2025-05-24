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
import CompetitionPage from "./pages/CompetitionPage.jsx";
import CompetitonsPage from "./pages/CompetitonsPage.tsx";
import ContactPage from "./pages/ContactPage.jsx";
import { competitionType } from "./helpers/competitons-data.ts";
import { createContext, useEffect, useState } from "react";
import { fetchContests } from "./helpers/competion-api.ts";


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
              <Courses category={undefined} />
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
