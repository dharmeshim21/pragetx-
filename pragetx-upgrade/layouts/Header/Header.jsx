"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar, NavbarBrand, NavbarContent, Button } from "@nextui-org/react";
import NavbarMenuItems from "../NavbarMenuItems/NavbarMenuItems";
import useWindowSize from "@/shared/hooks/useWindowSize";
import "./header.css";

const Header = ({ mode = "white" }) => {
  const [scrolled, setScrolled] = useState(false);
  const [windowSize, scrollValue] = useWindowSize();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // === Color logic ===
  const isWhiteMode = mode === "white";

  const bgColor = isWhiteMode
    ? scrolled
      ? "bg-white shadow-md"
      : "bg-white"
    : scrolled
      ? "bg-white shadow-md"
      : "bg-black";

  const textColor = isWhiteMode
    ? scrolled
      ? "text-black"
      : "text-black"
    : scrolled
      ? "text-black"
      : "text-white";

  const logoSrc =
    isWhiteMode || scrolled
      ? "/images/header_logo_black.png"
      : "/images/header_logo_white.png";

  // Dynamic mode for menu items
  const menuMode = scrolled ? "white" : mode;

  return (
    <div
      className={`navbar-bg sticky top-0 z-100000 transition-all duration-300 ${bgColor} ${textColor}`}
    >
      <div className="container mx-auto">
        <Navbar className="navbar flex  items-center 2xl:px-[80px] py-[20px]">
          {/* Logo */}
          <NavbarContent>
            <NavbarBrand>
              <Link href="/">
                <div className="w-[165px] company-logo">
                  <Image
                    priority
                    width={165}
                    height={40}
                    alt="Pragetx logo"
                    src={logoSrc}
                    className="transition-all duration-300"
                  />
                </div>
              </Link>
            </NavbarBrand>
          </NavbarContent>

          {/* Desktop Menu */}
          <NavbarContent
            className={`hidden lg:flex gap-6 items-center transition-colors duration-300 ${textColor}`}
            justify="center"
          >
            <NavbarMenuItems mode={menuMode} />
          </NavbarContent>

          {/* Mobile Menu */}
          <NavbarContent className="lg:hidden">
            <NavbarMenuItems mode={menuMode} />
          </NavbarContent>

          {/* Get In Touch Button */}
          <NavbarContent justify="end" className="buttonHide">
            <Button
              as={Link}
              href="/contact-us/"
              variant="solid"
              className="text-[16px] px-[25px] py-2 h-auto bg-gradient-to-r from-[#3730A3] to-[#38BDF8] text-white rounded-full"
            >
              Get In Touch
            </Button>
          </NavbarContent>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
