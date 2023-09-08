"use client";
import Image from "next/image";
import { Button, Stack, Box, Link } from "@chakra-ui/react";
import BackgroundHeaderHomepage from "@/assets/images/homepage-header-bg.png";
import HomepageHeaderOverlay from "@/assets/images/homepage-header-layer.png";

import { BLUE_WAVE, DARK_NIGHT, TEAL_LIGHT, WHITE_CLOUD } from "@/utils/colors";
import ButtonBlueWave from "@/components/common/ButtonBlueWave/page";
import Header from "@/components/Home/Header/page";
import AboutUsHome from "@/components/Home/AboutUs/page";
import GetInTouchForm from "@/components/Home/GetInTouchForm/page";
import Transformations from "@/components/Home/Transformations/page";
import Sponsors from "@/components/Home/Sponsors/page";

export default function Home() {
  return (
    <div className="h-full">
      <Header/>
      <AboutUsHome/>
      <Transformations/>
      <Sponsors/>
    </div>
  );
}
