import CompetitionHero from "../components/CompetitionHero.jsx";
import CompetitionTabs from "../components/competitionTabs.jsx";
import СompetitionTabsNow from "../components/СompetitionTabsNow.jsx";
import CompetitionList from "../components/CompetitionList.jsx";
import Footer from "../components/Footer.jsx";

const CompetitonsPage = () => {
  return (
    <>
      <CompetitionHero />
      <CompetitionTabs />
      <СompetitionTabsNow />
      <CompetitionList />
      <Footer />
    </>
  );
};

export default CompetitonsPage;
