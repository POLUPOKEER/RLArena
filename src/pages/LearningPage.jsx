import LearningHero from "../components/courses/LearningHero";
import Courses from "../components/courses/Courses-active";
import CoursesList from "../components/courses/CoursesList";
import Footer from "../components/Footer";

const LearningPage = () => {
  return (
    <>
      <LearningHero />
      <Courses category={'easy'} />
      <Courses category={'medium'} />
      <CoursesList />
      <Footer />
    </>
  );
};

export default LearningPage;
