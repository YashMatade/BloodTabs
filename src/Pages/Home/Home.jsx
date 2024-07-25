import React, { lazy } from "react";
import "./Home.css";
import MainBanner from "./Components/MainBanner/MainBanner";
import DonationProcess from "./Components/DonationProcess/DonationProcess";
import VideoTestimonials from "./Components/VideoTestimonials/VideoTestimonials";
import OurTeam from "./Components/Team/OurTeam";
const WhatweDo = lazy(() => import("./Components/WhatweDo/WhatweDo"));
const Header = lazy(() => import("../../Components/Header/Header"));
const Footer = lazy(() => import("../../Components/Footer/Footer"));
const WhyDonate = lazy(() => import("./Components/WhyDonate/WhyDonate"));
const SaveBlood = lazy(() =>
  import("./Components/SaveBloodBanner/SaveBloodBanner")
);
const Testimonials = lazy(() =>
  import("./Components/Testimonials/Testimonials")
);

const Home = () => {
  return (
    <div>
      <Header />
      <MainBanner />
      <WhatweDo />
      <WhyDonate />
      <DonationProcess />
      <SaveBlood />
      <VideoTestimonials />
      <Testimonials />
      <OurTeam />
      <Footer />
    </div>
  );
};

export default Home;
