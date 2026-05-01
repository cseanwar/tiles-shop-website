import Banner from "@/components/Banner";
import Footer from "@/components/shared/Footer";
import LatestTiles from "@/components/LatestTiles";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Banner />
      <LatestTiles />
      {/* <FeaturedTiles /> */}
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
