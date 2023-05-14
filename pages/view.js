import NavBar from "@/Components/NavBar/NavBar";
import React from "react";
import Link from "next/link";
import View from "@/Components/View/View";
import Footer from "@/Components/Footer/Footer";

const view = () => {
  return (
    <div>
      <NavBar />
      <View />
      {/* <Footer /> */}
    </div>
  );
};

export default view;
