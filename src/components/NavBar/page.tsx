"use client";
import { Button, Container } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const NavTitle = [
  { name: "About Us", path: "about-us" },
  { name: "Our Shop", path: "our-shop" },
  { name: "Gallery", path: "gallery" },
  { name: "Contact", path: "contact" },
];

const NavBar = () => {
  return (
    <div className="py-[20px] z-[10] absolute top-0 left-0 w-full bg-dark_overlay">
      <Container maxW="1536px" className="flex items-center justify-between">
        <Link href="/">
          <div className="cursor-pointer">
            <h3 className="text-[48px] font-bold text-teal_light">IClinik</h3>
          </div>
        </Link>
        <div className="flex gap-[57px] justify-center">
          {NavTitle.map((item, index) => (
            <Link
              key={item.name}
              href={item.path}
              className="cursor-pointer hover:opacity-70 hover:text-white_cloud text-white_cloud"
            >
              <p className="text-[18px] font-[700] uppercase">{item.name}</p>
            </Link>
          ))}
        </div>
        <div>
          <Button className="bg-teal_light" colorScheme="teal" size="lg">
            Contact
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
