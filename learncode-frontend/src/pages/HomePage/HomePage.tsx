import CollaborationSection from "./Components/CollaborationSection";
import Languages from "./Components/Languages";
import Hero from "./Components/Hero";
import HowItWorks from "./Components/HowItWorks";
import StartJourney from "./Components/StartJourney";
import Testimonial from "./Components/Testimonial";
import WhyLearnCodeAI from "./Components/WhyLearnCodeAI";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Languages />
      <WhyLearnCodeAI />
      <CollaborationSection />
      <HowItWorks />
      <Testimonial />
      <StartJourney />
    </div>
  );
};

export default HomePage;
