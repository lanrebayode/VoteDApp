import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Style from "./InitiateForm.module.css";

import { VotingSystemContext } from "@/Hooks/client";
import loadingGif from "../../public/loadinggif.gif";

const CandidateInput = () => {
  const {
    uploadToIPFS,
    ipfsUrl,
    addCandidate,
    candidatesLength,
    checkCandidates,
  } = useContext(VotingSystemContext);
  //Candidates Details
  const [campaignID, setCampaignID] = useState();
  const [candidateName, setCandidateName] = useState("");
  const [candidateImg, setCandidateImg] = useState("");
  const [candidateIndex, setCandidateIndex] = useState();
  const [loading, setLoading] = useState();
  const [addCount, setAddCount] = useState();

  const handleImageUpload = async (file) => {
    //const imgFile = file.target.files[0];
    setCandidateImg(file.target.files[0]);
    console.log(candidateImg);
    //await uploadToIPFS(candidateImg);
  };

  const handleSubmit = async () => {
    setLoading(true);
    await uploadToIPFS(candidateImg).then((url) =>
      addCandidate(campaignID, candidateName, url, candidateIndex)
    );
    setAddCount(addCount + 1);
  };

  useEffect(() => {
    //checkCandidates(campaignID, candidateIndex);
    setLoading(false);

    console.log(campaignID, candidateIndex);
  }, [addCount]);
  return (
    <div className={Style.InitiateForm}>
      <div className={Style.InitiateForm_box}>
        {/* Candidate addition */}
        <h3>Add Candidates/Options To a Campaign</h3>
        <div className={Style.candidateBox}>
          {" "}
          <div className={Style.candidate_id}>
            {" "}
            <label className={Style.InitiateForm_box_form_label}>
              Campaign ID:
              <input
                className={Style.InitiateForm_box_form_time}
                type="number"
                onChange={(e) => setCampaignID(e.target.value)}
              />
            </label>
            <label className={Style.InitiateForm_box_form_label}>
              Candidate Index:
              <input
                className={Style.InitiateForm_box_form_time}
                type="number"
                onChange={(e) => setCandidateIndex(e.target.value)}
              />
            </label>
          </div>
          <div className={Style.candidate}>
            <div className={Style.candidateName}>
              {" "}
              <label className={Style.candidateName_label}>
                Candidates Name
              </label>
              <input
                className={Style.candidateName_input}
                type="text"
                placeholder="Enter Candidate name"
                onChange={(e) => setCandidateName(e.target.value)}
              />
            </div>
            <div className={Style.candidate_img}>
              <label className={Style.InitiateForm_box_form_label}>
                Add Image
                <input
                  type="file"
                  name="cadidate Image"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </label>
            </div>
          </div>
        </div>
        <button
          className={Style.InitiateForm_box_form_btn}
          type="submit"
          onClick={handleSubmit}
        >
          {loading ? (
            <Image src={loadingGif} alt="loading gif" width={20} height={20} />
          ) : (
            "Add Candidate"
          )}
        </button>
      </div>
    </div>
  );
};

export default CandidateInput;
