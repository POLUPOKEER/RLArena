import CompetitionHero from "../components/competitions/CompetitionHero.jsx";
import CompetitionList from "../components/competitions/CompetitionList.jsx";
import Footer from "../components/Footer.jsx";
import { Competitions } from "../components/competitions/Competition-active.tsx";
import { createContext, useContext, useEffect, useState } from "react";
import { filter } from "framer-motion/client";
import { competitionType } from "../helpers/competitons-data.ts";
import { fetchContests } from "../helpers/competion-api.ts";
import { FilterContext, FilterProvider } from "../components/providers/filter-provider.tsx";

const CompetitonsPage = () => {
  return (
    <FilterProvider>
      <CompetitionHero />
      <Competitions category={'now'} />
      <Competitions category={'near'} />
      <CompetitionList />
      <Footer />
    </FilterProvider>
  );
};

export default CompetitonsPage;
