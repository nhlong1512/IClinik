"use client";
import React from "react";
import { Container } from "@chakra-ui/react";
import AboutUsHome1 from "@/assets/images/about-us-home-1.png";
import AboutUsHome2 from "@/assets/images/about-us-home-2.png";
import Image from "next/image";
import ButtonBlueWave from "@/components/common/ButtonBlueWave/page";
import { BLUE_WAVE } from "@/utils/colors";

const AboutUsHome = () => {
  return (
    <div className="bg-white_cloud">
      <Container maxW="1536px" className="my-[120px]">
        <div className="flex gap-[50px]">
          <Image src={AboutUsHome1} alt="About Us Home 1" />
          <div>
            <ButtonBlueWave color={BLUE_WAVE} title="About us" className="px-[12px] py-[8px] text-[11px] tracking-[4px]"/>
          <h3>Plastic Surgery</h3>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUsHome;
