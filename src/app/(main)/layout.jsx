import Banner from "@/components/shared/Banner";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Banner />
      {children}
    </>
  );
};

export default MainLayout;
