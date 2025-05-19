import CompetitionHero from "../components/competitions/CompetitionHero.jsx";
import CompetitionList from "../components/competitions/CompetitionList.jsx";
import Footer from "../components/Footer.jsx";
import { Competitions } from "../components/competitions/Competition-active.tsx";

const CompetitonsPage = () => {
  return (
    <>
      <CompetitionHero />
      <Competitions category={'now'} />
      <Competitions category={'near'} />
      <CompetitionList />
      <Footer />
    </>
  );
};

export default CompetitonsPage;
