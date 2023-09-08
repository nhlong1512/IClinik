"use client";
import React from "react";
import { Container } from "@chakra-ui/react";
import AboutUsHome1 from "@/assets/images/about-us-home-1.png";
import AboutUsHome2 from "@/assets/images/about-us-home-2.png";
import AboutUsHome3 from "@/assets/images/about-us-home-3.png"
import MainDoctor from "@/assets/images/main-doctor.png"
import Signature from "@/assets/images/signature.png"

import Image from "next/image";
import ButtonBlueWave from "@/components/common/ButtonBlueWave/page";
import { BLUE_WAVE, LINEAR_GRADIENT_PRIMARY } from "@/utils/colors";
import GetInTouchForm from "../GetInTouchForm/page";
import GalleryList from "../GalleryList/page";

const AboutUsHome = () => {
  return (
    <div className="bg-white_cloud relative py-[240px] pb-[120px]">
      <GetInTouchForm/>
      <Container maxW="1536px">
        <div className="flex gap-[50px] w-full flex-1">
          <div className="flex flex-col relative basis-[40%] w-full">
            <Image src={AboutUsHome1} alt="About Us Home 1" className="w-[90%]" />
            <Image src={AboutUsHome2} alt="About Us Home 2" className="absolute bottom-0 right-0" />
          </div>
          <div className="flex basis-[60%] flex-col">
            <ButtonBlueWave color={LINEAR_GRADIENT_PRIMARY} title="About us" className="px-[12px] py-[6px] text-[11px] tracking-[4px]" />
            <h3 className="my-0 mt-[30px] text-[50px] leading-[50px] tracking-[1px] font-normal text-dark_night mb-[30px]">Plastic Surgery</h3>
            <p className="text-[14px] leading-[28px] font-[400] tracking-[1px] text-gray_text mb-[40px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies magna sit amet ligula fermentum, vel egestas augue lobortis. Cras quam erat, lacinia sed eleifend sed, auctor non est. Vestibulum in orci magna. Suspendisse potenti. Suspendisse sagittis in ante eu blandit. 
            </p>
            <div className="flex gap-[40px] mb-[40px]">
              <Image
                src={AboutUsHome3}
                alt="About Us Home 3"
              />
              <p className="text-[14px] leading-[28px] font-[400] tracking-[1px] text-gray_text">
              Praesent ac aliquam augue. Nam ullamcorper orci quis tellus pretium euismod. Duis gravida ultricies erat eget ultrices. Aliquam leo magna, viverra vel pretium eu, cursus at lacus. Praesent sollicitudin odio ut leo pretium, quis malesuada turpis faucibus. 
              </p>
            </div>
            <p className="text-[14px] leading-[28px] font-[400] tracking-[1px] text-gray_text mb-[40px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non nunc eros. Suspendisse scelerisque felis ante, et mattis felis scelerisque sodales. Aenean id imperdiet lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit nulla.
            </p>
            <div className="flex justify-between">
              <div className="flex gap-[20px]">
                <Image
                  src={MainDoctor}
                  alt="Main Doctor"
                />
                <div className="flex flex-col justify-center">
                  <p className="text-[16px] leading-[32px] font-[700] tracking-[1px]">
                    Stephen Mcmiller
                  </p>
                  <p className="uppercase text-[12px] leading-[24px] font-[400] tracking-[2px]">
                    Main Doctor
                  </p>
                </div>
              </div>
              <Image
                src={Signature}
                alt="Signature"
              />
              <div></div>
            </div>
          </div>
        </div>
      </Container>
      <GalleryList/>
    </div>
  );
};

export default AboutUsHome;
