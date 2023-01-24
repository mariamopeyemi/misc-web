import React, { useState } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

const AppStructure = ({ children }) => {
  const [isMobileNavOpened, setIsMobileNavOpened] = useState(false);
  return (
    <div className="flex w-screen flex-col">
    <NavBar />
    {/* <div className=" overflow-x-scroll scroll_hide bg-red-900 w-screen  "> */}
    {children}
    {/* </div> */}
    <Footer />
  </div>
  );
};

export default AppStructure;