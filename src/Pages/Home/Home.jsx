import React, { lazy } from "react";
import "./Home.css";
const WhatweDo = lazy(() => import("./Components/WhatweDo/WhatweDo"));
const Header = lazy(() => import("../../Components/Header/Header"));
const Footer = lazy(() => import("../../Components/Footer/Footer"));
const WhyDonate = lazy(() => import("./Components/WhyDonate/WhyDonate"));
const SaveBlood = lazy(() =>import("./Components/SaveBloodBanner/SaveBloodBanner"));
const Testimonials = lazy(() => import("./Components/Testimonials/Testimonials"));
const OurTeam =lazy(()=>import('./Components/Team//OurTeam'))
const VideoTestimonials =lazy(()=>import('./Components/VideoTestimonials/VideoTestimonials'))
const DonationProcess=lazy(()=>import('./Components/DonationProcess/DonationProcess'))
const MainBanner=lazy(()=>import('./Components/MainBanner/MainBanner'))

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
