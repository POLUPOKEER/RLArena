import CompetitionHero from "../components/competitions/CompetitionHero.jsx";
import CompetitionNow from "../components/competitions/Competitions-now.jsx";
import СompetitionNear from "../components/competitions/Competitions-near.jsx";
import CompetitionList from "../components/competitions/CompetitionList.jsx";
import Footer from "../components/Footer.jsx";


const CompetitonsPage = () => {
  return (
    <>
      <CompetitionHero />
      <CompetitionNow />
      <СompetitionNear />
      <CompetitionList />
      <Footer />
    </>
  );
};

export default CompetitonsPage;
