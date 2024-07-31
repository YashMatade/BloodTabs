import React, { lazy } from "react";
import "./Home.css";
import IndiaMap from "./Components/IndiaMap/IndiaMap";
import IndiaMapSample from "../../Components/IndiaMapSample/IndiaMapSample";

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
const OurTeam = lazy(() => import("./Components/Team//OurTeam"));
const VideoTestimonials = lazy(() =>
  import("./Components/VideoTestimonials/VideoTestimonials")
);
const DonationProcess = lazy(() =>
  import("./Components/DonationProcess/DonationProcess")
);
const MainBanner = lazy(() => import("./Components/MainBanner/MainBanner"));
const ReceiverForm = lazy(() =>
  import("./Components/ReceiverForm/ReceiverForm")
);

const Home = () => {
  return (
    <div className=" main_home">
      <Header />
      <MainBanner />
      <WhatweDo />
      <WhyDonate />
      <DonationProcess />
      <div>
        <h1>Explore Blood Donation Rates Across India</h1>
        <p>
          This interactive map visualizes blood donor registration data across
          all Indian states. Click on a state to see the specific number of
          registered donors.
        </p>
        <IndiaMap />
      </div>

      <div className="">
        <ReceiverForm />
      </div>

      <SaveBlood />
      <VideoTestimonials />
      <Testimonials />
      <OurTeam />
      <Footer />
    </div>
  );
};

export default Home;
