import ComHero from "../components/competition/ComHero.tsx";
import TabMenu from "../components/competition/TabMenu.tsx";
import Footer from "../components/Footer.jsx";
import { useLocation } from 'react-router-dom';
import { contestDetails, fetchContestBySlug } from "../helpers/competitions-api.ts";
import { useEffect, useState } from "react";
import { p } from "framer-motion/client";
export default function CompetitionPage() {
  const location = useLocation();
  const competitionSlug = location.state.competitionSlug;

  const [loading, setLoading] = useState(true);
  const [competition, setCompetition] = useState<contestDetails>();

  useEffect(() => {
    fetchContestBySlug(setCompetition, setLoading, competitionSlug);
  }, [])
  if (loading) return (<p>Загрузка...</p>);
  return (
    <>
      <ComHero competition={competition as contestDetails} />
      <TabMenu competition={competition as contestDetails} />
      <Footer />
    </>
  );
}