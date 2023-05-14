import InitiateForm from "@/Components/InitiateForm/InitiateForm";
import NavBar from "@/Components/NavBar/NavBar";
import React, { useState, useContext, useEffect } from "react";
import Style from "../styles/initiate.module.css";

import { VotingSystemContext } from "@/Hooks/client";
import Footer from "@/Components/Footer/Footer";

const initiate = () => {
  const { getTotalCampaignID, initiate } = useContext(VotingSystemContext);

  useEffect(() => {
    console.log("gd");
    getTotalCampaignID();
  }, []);
  return (
    <div className={Style.initiate}>
      <NavBar />
      <InitiateForm />
      <Footer />
    </div>
  );
};

export default initiate;
