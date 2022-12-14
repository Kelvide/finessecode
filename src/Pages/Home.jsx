import AboutSection from "../Components/AboutSection"
import FooterSection from "../Components/FooterSection"
import HomeHero from "../Components/HomeHero"
import Navbar from "../Components/Navbar"
import OurTeamSection from "../Components/OurTeamSection"
import ServiceSection from "../Components/ServiceSection"
import StatsSection from "../Components/StatsSection"

const Home = () => {
  return (
    <div>
        {/* Header Section */}
        <Navbar />
        <HomeHero />
        {/* About Section */}
        <AboutSection />
        {/* Service section */}
        <ServiceSection />
        {/* Statistic Section */}
        <StatsSection />
        {/* TeamSection */}
        <OurTeamSection />
        {/* Footer Section */}
        <FooterSection />
    </div>
  )
}

export default Home