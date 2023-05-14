import Footer from "@/Components/Footer/Footer";
import CandidateInput from "@/Components/InitiateForm/CandidateInput";
import NavBar from "@/Components/NavBar/NavBar";
import React from "react";

const candidateInput = () => {
  return (
    <div>
      <NavBar />
      <CandidateInput />
      <Footer />
    </div>
  );
};

export default candidateInput;
