"use client";
import Image from "next/image";
import { Button, Stack, Box, Link } from "@chakra-ui/react";
import BackgroundHeaderHomepage from "@/assets/images/homepage-header-bg.png";
import HomepageHeaderOverlay from "@/assets/images/homepage-header-layer.png";

import { BLUE_WAVE, DARK_NIGHT, TEAL_LIGHT, WHITE_CLOUD } from "@/utils/colors";
import ButtonBlueWave from "@/components/common/ButtonBlueWave/page";

export default function Header() {
  return (
    <div className="w-[100vw] max-h-[90%] h-[90%]">
      <div className="h-[100%] relative">
        <Image
          src={BackgroundHeaderHomepage}
          alt="Picture of the author"
          fill
          className="h-[100%]"
        />
        <Image
          src={HomepageHeaderOverlay}
          alt="Homepage header overlay"
          fill
          className="object-fill z-[1] absolute"
        />
        <div className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-[3]">
          <ButtonBlueWave
            title="Plastic Surgery"
            color={BLUE_WAVE}
            className="px-[24px] py-[6px]"
          />
          <p
            className="text-[100px] leading-[130px] font-[600]"
            style={{
              WebkitTextFillColor: "transparent",
              WebkitTextStrokeWidth: "0.5px",
              WebkitTextStrokeColor: WHITE_CLOUD,
            }}
          >
            This is the
          </p>
          <p className="text-[130px] leading-[160px] font-[600] text-white_cloud">
            Best Clinic
          </p>
          <div className="flex justify-between">
            <Link href="/our-shop">
              <Button
                colorScheme={TEAL_LIGHT}
                size="lg"
                className="bg-transparent hover:bg-teal_light text-[25px]"
              >
                Shop Now
              </Button>
            </Link>
            <p className="max-w-[400px] text-white_cloud">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua, nulla
              consequat risus ac lectus imperdiet
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
