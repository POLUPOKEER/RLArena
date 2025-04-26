import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ComHero from "../components/ComHero";
import TabMenu from "../components/TabMenu";
import Footer from "../components/Footer";

export default function CompetitionPage() {

  return (
    <>
        <ComHero />
        <TabMenu />
        <Footer />
    </>
  );
}