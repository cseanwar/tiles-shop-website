import Banner from "@/components/shared/Banner";
import LatestTiles from "@/components/shared/LatestTiles";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Banner />
      <LatestTiles />
      {children}
    </>
  );
};

export default MainLayout;
