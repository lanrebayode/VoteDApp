import React from "react";
import Image from "next/image";

import Style from "./Hero.module.css";
import Img1 from "../../public/img1.png";

const Hero = () => {
  return (
    <div className={Style.Hero}>
      <div className={Style.Hero_box}>
        <div className={Style.Hero_box_first}>
          <div>
            <h1>Mission</h1>
            <p>
              Voterz is a decentralized voting application that allows users to
              create voting campaigns and allows voters to cast anonymous votes
              for their preferred choice.The platform ensures that the winner is
              declared based on the actual highest number of votes, without any
              form of tampering possible. The platform's decentralized nature
              ensures that there is no central authority controlling the voting
              process, which enhances the security of the voting process. It
              also provides transparency, as users can easily monitor the voting
              process and ensure that the outcome is fair and accurate.
            </p>
          </div>
          <Image
            className={Style.Hero_box_first_img}
            src={Img1}
            alt="Blockchaim Image"
            width={500}
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
