import React, { useState } from "react";
import Header from "./components/Header";
import "./index.css";
import Navbar from "./components/Navbar";
import CarouselComponent from "./components/Carousel";
import NewInStore from "./components/NewInStore";
import KhadlajLegacy from "./components/KhadlajLegacy";
import BestSellers from "./components/BestSellers";
import LeftOverlay from "./components/LeftOverlay";
import TrendingNow from "./components/TrendingNow";
import Details from "./components/Details";
import Footer from "./components/Footer";
import BottomIcons from "./components/BottomIcons";
import RightOverlay from "./components/RightOverlay";

const App = () => {
  const [leftOverlayActive, setLeftOverlayActive] = useState(false);
  const [rightOverlayActive, setRightOverlayActive] = useState(false);

  return (
    <div className="w-full">
      <Header />
      <Navbar
        leftOverlayActive={leftOverlayActive}
        setLeftOverlayActive={setLeftOverlayActive}
        rightOverlayActive={rightOverlayActive}
        setRightOverlayActive={setRightOverlayActive}
      />
      <CarouselComponent />
      <NewInStore />
      <KhadlajLegacy />
      <BestSellers />
      <LeftOverlay
        leftOverlayActive={leftOverlayActive}
        setLeftOverlayActive={setLeftOverlayActive}
      />
      <RightOverlay
        rightOverlayActive={rightOverlayActive}
        setRightOverlayActive={setRightOverlayActive}
      />
      <TrendingNow />
      <Details />
      <Footer />
      <BottomIcons />
    </div>
  );
};

export default App;
