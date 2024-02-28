import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import MainContent from "./MainContent";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default HomePage;
