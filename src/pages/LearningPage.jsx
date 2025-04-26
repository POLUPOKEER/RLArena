import LearningHero from "../components/LearningHero";
import BeginnerCourses from "../components/BeginnerCourses";
import ImproveSkillsCoursesList from "../components/ImproveSkillsCoursesList";
import ProfessionalCoursesList from "../components/ProfessionalCoursesList";
import Footer from "../components/Footer";

const LearningPage = () => {
  return (
    <>
      <LearningHero />
      <BeginnerCourses />
      <ImproveSkillsCoursesList />
      <ProfessionalCoursesList />
      <Footer />
    </>
  );
};

export default LearningPage;
