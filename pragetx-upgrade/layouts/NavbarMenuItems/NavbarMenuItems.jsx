"use client";

import useWindowSize from "@/shared/hooks/useWindowSize";
import {
  Accordion,
  AccordionItem,
  Button,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import AboutDropdown from "./AboutDropdown";
import HireDevelopersDropdown from "./HireDevelopersDropdown";
import ProductDropdown from "./ProductDropdown";
import ServicesDropdown from "./ServicesDropdown";
import NewServicesDropdown from "./NewServicesDropdown";
import IndustryDropdown from "./IndustryDropdown";
import './dropdown.css'
import { ChevronDown, ChevronLeft } from "lucide-react";

const NavbarMenuItems = ({ mode }) => {
  const [windowSize, scrollValue] = useWindowSize();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      // Lock scrolling on both <body> and <html>
      document.documentElement.style.setProperty("overflow", "hidden", "important");
    } else {
      // Restore scrolling
      document.documentElement.style.setProperty("overflow", "auto", "important");
    }
  }, [isMenuOpen]);

  const handleClose = () => {
    setIsMenuOpen(false);
    setSelectedKeys([]);
  };

  return (
    <>
      <div className="burger-icon">
        <RxHamburgerMenu
          className={`text-[26px] burger-menu-icon hover:cursor-pointer ${scrollValue ? "text-black" : "text-white"
            }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>

      {
        //phone navbar div
      }
      <div
        style={{ height: '100vh' }}
        className={`toggle-menu-list ${isMenuOpen ? "menu-open" : "menu-close"
          }`}
      >
        <div className="flex !flex-row !justify-between !items-center mb-3">
          <Link href="/" onClick={handleClose}>
            <div className="h-[25px] w-[200px]">
              <Image
                priority
                width={200}
                height={200}
                alt="Pragetx logo"
                src="/images/header_logo_black.png"
                className=""
              />
            </div>
          </Link>
          <IoMdClose
            onClick={handleClose}
            className="hover:cursor-pointer text-2xl text-black"
          />
        </div>

        {// mobile screen drop
        }
        <div className="responsive-navbar overflow-y-auto overflow-x-hidden " style={{ color: 'black' }}>
          <ul className="flex flex-col gap-4">
            <NavbarMenuItem className="flex justify-between" style={{ padding: '0px', outline: 'NavbarItem' }}>
              <Accordion
                className="p-0 flex flex-col gap-4"
                selectedKeys={selectedKeys}
                onSelectionChange={setSelectedKeys}

              >
                <AccordionItem
                  key="1"
                  aria-label="Company"
                  className="!p-0" // optional, remove padding if needed
                  indicator={({ isOpen }) => (
                    <ChevronLeft
                      className={`transition-transform duration-300 ${isOpen ? "-rotate-90" : ""
                        }`}
                    />
                  )}
                  title={
                    <div className="flex justify-between items-center w-full" style={{
                      outline: 'none',
                      padding: '0px',
                      border: 'none'
                    }}>
                      <span className="text-[18px] font-semibold text-left outline-none" >
                        Company
                      </span>
                    </div>
                  }
                >
                  <ul className="dropdown-navigation side-dropdown-navigation">
                    <li
                      className="dropdown-navigation-menu about"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    >
                      <Link href="/about/" onClick={handleClose}>
                        <div className="navigation-icon">
                          <Image
                            src="/icons/about.svg"
                            width={100}
                            height={100}
                            alt="about pragetx"
                          />
                        </div>
                        <div className="">
                          <div className="title font-medium">About PragetX</div>
                          <div className="sub-title whitespace-break-spaces">
                            We believe in &ldquo;You grow - we grow&rdquo;
                            mindset
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li
                      className="dropdown-navigation-menu service"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    >
                      <Link href="/how-we-work/" onClick={handleClose}>
                        <div className="navigation-icon">
                          <Image
                            src="/icons/work.svg"
                            width={100}
                            height={100}
                            alt="how we work"
                          />
                        </div>
                        <div className="">
                          <div className="title font-medium"> How We Work</div>
                          <div className="sub-title whitespace-break-spaces">
                            Learn how we combine smart & hard work Set processes
                            + smart work = Blitzscaling work
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li
                      className="dropdown-navigation-menu referral"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    >
                      <Link href="/referral-programs/" onClick={handleClose}>
                        <div className="navigation-icon">
                          <Image
                            src="/icons/referral.svg"
                            width={100}
                            height={100}
                            alt="referral program"
                          />
                        </div>
                        <div className="">
                          <div className="title font-medium">
                            Client Referral Program
                          </div>
                          <div className="sub-title whitespace-break-spaces">
                            Refer our services & earn rewards
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li
                      className="dropdown-navigation-menu partner"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    >
                      <Link href="/become-partner/" onClick={handleClose}>
                        <div className="navigation-icon">
                          <Image
                            src="/icons/partner.svg"
                            width={100}
                            height={100}
                            alt="Become A Partner"
                          />
                        </div>
                        <div className="">
                          <div className="title font-medium">
                            Become A Partner
                          </div>
                          <div className="sub-title whitespace-break-spaces">
                            We can be your reliable extended IT team
                          </div>
                        </div>
                      </Link>
                    </li>

                    <li
                      className="dropdown-navigation-menu internship"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    >
                      <Link
                        href="/internship-and-training/"
                        onClick={handleClose}
                      >
                        <div className="navigation-icon">
                          <Image
                            src="/icons/internship.svg"
                            width={100}
                            height={100}
                            alt="internship & training"
                          />
                        </div>
                        <div className="">
                          <div className="title font-medium">
                            Internship & Training
                          </div>
                          <div className="sub-title whitespace-break-spaces">
                            Join a team that knows how to get things done
                          </div>
                        </div>
                      </Link>
                    </li>

                    <li
                      className="dropdown-navigation-menu careers"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    >
                      <Link href="/careers" onClick={handleClose}>
                        <div className="navigation-icon">
                          <Image
                            src="/icons/career.svg"
                            width={100}
                            height={100}
                            alt="careers"
                          />
                        </div>
                        <div className="">
                          <div className="title font-medium">
                            Careers{" "}
                            <span className="header-hiring">We Are Hiring</span>
                          </div>
                          <div className="sub-title whitespace-break-spaces">
                            Explore opportunities to grow with us
                          </div>
                        </div>
                      </Link>
                    </li>
                  </ul>

                </AccordionItem>

                <AccordionItem

                  key="Products"
                  aria-label="Products"
                  className="!p-0" // optional, remove padding if needed
                  indicator={({ isOpen }) => (
                    <ChevronLeft
                      className={`transition-transform duration-300 ${isOpen ? "-rotate-90" : ""
                        }`}
                    />
                  )}
                  title={
                    <div className="flex justify-between items-center w-full"><span style={{ fontSize: "18px", fontWeight: "600" }}>Products</span></div>}
                >
                  <ul className="dropdown-navigation side-dropdown-navigation">
                    <Accordion
                      className="p-0 flex flex-col gap-4"
                    // selectedKeys={selectedKeys}
                    // onSelectionChange={setSelectedKeys}
                    >
                      <AccordionItem
                        key=""
                        aria-label="Product"
                        indicator={({ isOpen }) => (
                          <ChevronLeft
                            className={`transition-transform duration-300 ${isOpen ? "-rotate-90" : ""
                              }`}
                          />
                        )}
                        title={
                          <li
                            className="dropdown-navigation-menu astrology"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                          >
                            <div className="text-black font-normal flex gap-3 items-start relative z-10 no-underline">
                              <div className="navigation-icon">
                                <Image
                                  src="/icons/consultx.svg"
                                  width={100}
                                  height={100}
                                  alt="consultation"
                                />
                              </div>
                              <div className="">
                                <div className="!text-[15px] font-[500] !text-[#000] satoshi text-start">
                                  Consultation Suite
                                </div>
                                <div className="text-[#434343] text-[14px] tracking-[0.5px] satoshi text-start leading-[18px] max-w-[400px] font-light mt-[3px] whitespace-break-spaces">
                                  A white-label solution for consultants,
                                  streamlining appointments, client management,
                                  and analytics.
                                </div>
                              </div>
                            </div>
                          </li>
                        }
                      >
                        <div className="!pl-[40px]">
                          <Link
                            href="/astrozod"
                            className="!items-center digital flex gap-2 my-3"
                          >
                            <div className="w-[30px] h-[30px] min-w-[30px] grid place-items-center !p-[4px] rounded-full bg-[#ffd196]">
                              <Image
                                src="/icons/astrology.svg"
                                width={100}
                                height={100}
                                alt="astrology"
                              />
                            </div>
                            <div className="text-[15px]">AstroZod</div>
                          </Link>
                          <Link
                            href="/consultx"
                            className="!items-center business-growth flex gap-2 my-3 "
                          >
                            <div className="w-[30px] h-[30px] min-w-[30px] grid place-items-center !p-[4px] rounded-full bg-[#e9ddff]">
                              <Image
                                src="/icons/consultation.svg"
                                width={100}
                                height={100}
                                alt="consultation"
                              />
                            </div>
                            <div className="text-[15px]">ConsultX</div>
                          </Link>
                        </div>
                      </AccordionItem>
                    </Accordion>
                    <li
                      className="dropdown-navigation-menu voice-agent"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    >
                      <Link
                        href="https://agentx.pragetx.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleClose}
                      >
                        <div className="navigation-icon">
                          <Image
                            src="/icons/agentx.svg"
                            width={100}
                            height={100}
                            alt="agentx"
                          />
                        </div>
                        <div className="">
                          <div className="title font-medium">AgentX</div>
                          <div className="sub-title whitespace-break-spaces">
                            Infinite voices, endless possibilities. Your
                            ultimate call companion, speaking your language.
                          </div>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </AccordionItem>
                <AccordionItem
                  key="Services"
                  aria-label="Services"
                  indicator={({ isOpen }) => (
                    <ChevronLeft
                      className={`transition-transform duration-300 ${isOpen ? "-rotate-90" : ""
                        }`}
                    />
                  )}
                  title={<div className="flex justify-between items-center w-full"><span style={{ fontSize: "18px", fontWeight: "600" }}>Services</span></div>}
                >
                  <ul className="dropdown-navigation side-dropdown-navigation service-dropdown">
                    <li className="dropdown-navigation-menu">
                      <div className="title">Artificial Intelligence</div>
                      <Link
                        href="/ai-consulting-service"
                        onClick={handleClose}
                        className="!items-center digital"
                      >
                        <div className="navigation-icon ">
                          <Image
                            src="/icons/ai-consulting.svg"
                            width={100}
                            height={100}
                            alt="AI Consulting"
                          />
                        </div>
                        <div className="sub-title">AI Consulting</div>
                      </Link>
                      <Link
                        href="/nlp-development-service"
                        onClick={handleClose}
                        className="!items-center business-growth"
                      >
                        <div className="navigation-icon">
                          <Image
                            src="/icons/nlp-service.svg"
                            width={100}
                            height={100}
                            alt="NLP"
                          />
                        </div>
                        <div className="sub-title">NLP</div>
                      </Link>
                      <Link
                        href="/computer-vision-service"
                        onClick={handleClose}
                        className="!items-center business-growth"
                      >
                        <div className="navigation-icon">
                          <Image
                            src="/icons/computer-vision.svg"
                            width={100}
                            height={100}
                            alt="Computer Vision"
                          />
                        </div>
                        <div className="sub-title">Computer Vision</div>
                      </Link>
                      <Link
                        href="/speech-text-service"
                        onClick={handleClose}
                        className="!items-center business-growth"
                      >
                        <div className="navigation-icon">
                          <Image
                            src="/icons/speech-text.svg"
                            width={100}
                            height={100}
                            alt="speech text"
                          />
                        </div>
                        <div className="sub-title">Speech Text Service</div>
                      </Link>
                      <Link
                        href="/business-automation-service"
                        onClick={handleClose}
                        className="!items-center business-growth"
                      >
                        <div className="navigation-icon">
                          <Image
                            src="/icons/lcnc.svg"
                            width={100}
                            height={100}
                            alt="low-code/no-code"
                          />
                        </div>
                        <div className="sub-title">Business Automation</div>
                      </Link>
                    </li>
                    <li className="dropdown-navigation-menu mt-4">
                      <div className="title">GEN AI</div>
                      <Link
                        href="/ai-agent-development-service"
                        onClick={handleClose}
                        className="!items-center technology-service"
                      >
                        <div className="navigation-icon ">
                          <Image
                            src="/icons/ai-agent-development.svg"
                            width={100}
                            height={100}
                            alt="AI Agent Development"
                          />
                        </div>
                        <div className="sub-title">AI Agent Development</div>
                      </Link>
                      <Link
                        href="/rag-development-service"
                        onClick={handleClose}
                        className="!items-center technology-service"
                      >
                        <div className="navigation-icon ">
                          <Image
                            src="/icons/rag-development.svg"
                            width={100}
                            height={100}
                            alt="Rag Development"
                          />
                        </div>
                        <div className="sub-title">RAG Development</div>
                      </Link>
                      <Link
                        href="/llm-inference-fine-tuning-service"
                        onClick={handleClose}
                        className="!items-center technology-service"
                      >
                        <div className="navigation-icon ">
                          <Image
                            src="/icons/llm-inference-fine-tuning.svg"
                            width={100}
                            height={100}
                            alt="LLM Inference & Fine Tuning"
                          />
                        </div>
                        <div className="sub-title">
                          LLM Inference & Fine Tuning
                        </div>
                      </Link>
                      <Link
                        href="/llm-chatbot-development-service"
                        onClick={handleClose}
                        className="!items-center technology-service"
                      >
                        <div className="navigation-icon ">
                          <Image
                            src="/icons/chat-bot.svg"
                            width={100}
                            height={100}
                            alt="LLM Chatbot"
                          />
                        </div>
                        <div className="sub-title">LLM Chatbot Development</div>
                      </Link>
                    </li>
                    <li className="dropdown-navigation-menu mt-4">
                      <div className="title">Devops</div>
                      <Link
                        href="/mlops-service"
                        onClick={handleClose}
                        className="!items-center development custom-development"
                      >
                        <div className="navigation-icon ">
                          <Image
                            src="/icons/mlops-service.svg"
                            width={100}
                            height={100}
                            alt="MLOps Service"
                          />
                        </div>
                        <div className="sub-title">MLOps Service</div>
                      </Link>
                      <Link
                        href="/devops-consulting-service"
                        onClick={handleClose}
                        className="!items-center development"
                      >
                        <div className="navigation-icon ">
                          <Image
                            src="/icons/devops-consulting.svg"
                            width={100}
                            height={100}
                            alt="Devops Consulting"
                          />
                        </div>
                        <div className="sub-title">Devops Consulting</div>
                      </Link>
                      <Link
                        href="/devops-automation-service"
                        onClick={handleClose}
                        className="!items-center development mobile-development"
                      >
                        <div className="navigation-icon ">
                          <Image
                            src="/icons/devops-automation.svg"
                            width={100}
                            height={100}
                            alt="Devops Automation"
                          />
                        </div>
                        <div className="sub-title">Devops Automation</div>
                      </Link>
                      <Link
                        href="/cloud-solutions-service"
                        onClick={handleClose}
                        className="!items-center development mobile-development"
                      >
                        <div className="navigation-icon ">
                          <Image
                            src="/icons/cloud-solution.svg"
                            width={100}
                            height={100}
                            alt="Cloud Solutions"
                          />
                        </div>
                        <div className="sub-title">Cloud Solutions</div>
                      </Link>
                    </li>
                    <li className="dropdown-navigation-menu mt-4">
                      <div className="title">Web & App development</div>
                      <Link
                        href="/web-app-development-service"
                        onClick={handleClose}
                        className="!items-center ui"
                      >
                        <div className="navigation-icon ">
                          <Image
                            src="/icons/web-development.svg"
                            width={100}
                            height={100}
                            alt="Web App Development"
                          />
                        </div>
                        <div className="sub-title">Web App Development</div>
                      </Link>
                      <Link
                        href="/mobile-app-development-service"
                        onClick={handleClose}
                        className="!items-center ui"
                      >
                        <div className="navigation-icon ">
                          <Image
                            src="/icons/mobile-app-development.svg"
                            width={100}
                            height={100}
                            alt="Mobile App Development"
                          />
                        </div>
                        <div className="sub-title">Mobile App Development</div>
                      </Link>
                      <Link
                        href="/ui-ux-design-service"
                        onClick={handleClose}
                        className="!items-center ui"
                      >
                        <div className="navigation-icon ">
                          <Image
                            src="/icons/ui-ux-design.svg"
                            width={100}
                            height={100}
                            alt="UI/UX design"
                          />
                        </div>
                        <div className="sub-title">UI/UX Design</div>
                      </Link>
                      <Link
                        href="/custom-software-development-service"
                        onClick={handleClose}
                        className="!items-center ui"
                      >
                        <div className="navigation-icon ">
                          <Image
                            src="/icons/custom-software-development.svg"
                            width={100}
                            height={100}
                            alt="custom software development"
                          />
                        </div>
                        <div className="sub-title">
                          Custom Software Development
                        </div>
                      </Link>
                      <Link
                        href="/product-development-service"
                        onClick={handleClose}
                        className="!items-center ui"
                      >
                        <div className="navigation-icon ">
                          <Image
                            src="/icons/product-development.svg"
                            width={100}
                            height={100}
                            alt="product development"
                          />
                        </div>
                        <div className="sub-title">Product Development</div>
                      </Link>
                      <Link
                        href="/qa-service"
                        onClick={handleClose}
                        className="!items-center ui"
                      >
                        <div className="navigation-icon ">
                          <Image
                            src="/icons/quality-assurance.svg"
                            width={100}
                            height={100}
                            alt="Quality Assurance"
                          />
                        </div>
                        <div className="sub-title">Quality Assurance</div>
                      </Link>
                    </li>
                  </ul>
                </AccordionItem>

                <AccordionItem
                  key="case-studies"
                  aria-label="Case Studies"

                  title={
                    <div className="flex justify-between items-center w-full">
                      <Link
                        style={{ fontSize: "18px", fontWeight: "600" }}
                        className="text-black blog-header-title dropdown-menu-name"
                        onClick={handleClose}
                        href="/portfolio/"
                      >
                        Case Studies
                      </Link>
                    </div>
                  }
                  hideIndicator
                />

                <AccordionItem
                  key="3"
                  aria-label="Industries"
                  indicator={({ isOpen }) => (
                    <ChevronLeft
                      className={`transition-transform duration-300 ${isOpen ? "-rotate-90" : ""
                        }`}
                    />
                  )}
                  title={<div className="flex justify-between items-center w-full"><span style={{ fontSize: "18px", fontWeight: "600" }}>Industries</span></div>}
                >
                  <ul className="dropdown-navigation side-dropdown-navigation service-dropdown">
                    <li className="dropdown-navigation-menu">
                      <Link
                        href="/education"
                        onClick={handleClose}
                        className="!items-center after:!bg-[#e6f1ff]"
                      >
                        <div className="navigation-icon ">
                          <Image
                            src="/icons/education.svg"
                            width={100}
                            height={100}
                            alt="Education"
                          />
                        </div>
                        <div className="sub-title">Education</div>
                      </Link>
                      <Link
                        href="/fintech"
                        onClick={handleClose}
                        className="!items-center after:!bg-[#f0e6ff]"
                      >
                        <div className="navigation-icon">
                          <Image
                            src="/icons/fintech.svg"
                            width={100}
                            height={100}
                            alt="Fintech"
                          />
                        </div>
                        <div className="sub-title">Fintech</div>
                      </Link>
                      <Link
                        href="/healthcare"
                        onClick={handleClose}
                        className="!items-center after:!bg-[#ffe6e6]"
                      >
                        <div className="navigation-icon">
                          <Image
                            src="/icons/healthcare.svg"
                            width={100}
                            height={100}
                            alt="Healthcare"
                          />
                        </div>
                        <div className="sub-title">Healthcare</div>
                      </Link>
                      <Link
                        href="/xaas-product-development"
                        onClick={handleClose}
                        className="!items-center after:!bg-[#e1fffd]"
                      >
                        <div className="navigation-icon">
                          <Image
                            src="/icons/xass-product.svg"
                            width={100}
                            height={100}
                            alt="Xass Product"
                          />
                        </div>
                        <div className="sub-title">XASS Product</div>
                      </Link>
                      <Link
                        href="/logistics-and-supply-chain"
                        onClick={handleClose}
                        className="!items-center after:!bg-[#ffedd4]"
                      >
                        <div className="navigation-icon ">
                          <Image
                            src="/icons/logistics.svg"
                            width={100}
                            height={100}
                            alt="logistics & Supply"
                          />
                        </div>
                        <div className="sub-title">
                          logistics & supply chain
                        </div>
                      </Link>
                      <Link
                        href="/manufacturing-innovation"
                        onClick={handleClose}
                        className="!items-center after:!bg-[#e6f1ff]"
                      >
                        <div className="navigation-icon ">
                          <Image
                            src="/icons/manufacturing.svg"
                            width={100}
                            height={100}
                            alt="Manufacturing"
                          />
                        </div>
                        <div className="sub-title">
                          Manufacturing and Innovation
                        </div>
                      </Link>
                      <Link
                        href="/social-networking-industry"
                        onClick={handleClose}
                        className="!items-center after:!bg-[#f0e6ff]"
                      >
                        <div className="navigation-icon ">
                          <Image
                            src="/icons/social-media.svg"
                            width={100}
                            height={100}
                            alt="Social Networking"
                          />
                        </div>
                        <div className="sub-title">Social Networking</div>
                      </Link>
                      <Link
                        href="/astrology-and-spiritual-tech"
                        onClick={handleClose}
                        className="!items-center after:!bg-[#ffe6e6]"
                      >
                        <div className="navigation-icon ">
                          <Image
                            src="/icons/astrology2.svg"
                            width={100}
                            height={100}
                            alt="Astrology and Spiritual Tech"
                          />
                        </div>
                        <div className="sub-title">
                          Astrology and Spiritual Tech
                        </div>
                      </Link>
                      <Link
                        href="/government-and-public-sector"
                        onClick={handleClose}
                        className="!items-center after:!bg-[#e1fffd]"
                      >
                        <div className="navigation-icon ">
                          <Image
                            src="/icons/government.svg"
                            width={100}
                            height={100}
                            alt="Govt & Public Sector"
                          />
                        </div>
                        <div className="sub-title">Govt & Public Sector</div>
                      </Link>
                      <Link
                        href="/insurance"
                        onClick={handleClose}
                        className="!items-center after:!bg-[#e6f1ff]"
                      >
                        <div className="navigation-icon ">
                          <Image
                            src="/icons/insurance.svg"
                            width={100}
                            height={100}
                            alt="Insurance Industry"
                          />
                        </div>
                        <div className="sub-title">Insurance Industry</div>
                      </Link>
                      <Link
                        href="/media-and-entertainment"
                        onClick={handleClose}
                        className="!items-center after:!bg-[#f0e6ff]"
                      >
                        <div className="navigation-icon ">
                          <Image
                            src="/icons/media.svg"
                            width={100}
                            height={100}
                            alt="Media & Entertainment"
                          />
                        </div>
                        <div className="sub-title">Media & Entertainment</div>
                      </Link>
                      <Link
                        href="/real-estate-and-construction"
                        onClick={handleClose}
                        className="!items-center after:!bg-[#ffe6e6]"
                      >
                        <div className="navigation-icon ">
                          <Image
                            src="/icons/real-estate.svg"
                            width={100}
                            height={100}
                            alt="Real Estate & Construction"
                          />
                        </div>
                        <div className="sub-title">
                          Real Estate & Construction
                        </div>
                      </Link>
                      <Link
                        href="/startup-ecosystem-and-future-technologies"
                        onClick={handleClose}
                        className="!items-center after:!bg-[#e1fffd]"
                      >
                        <div className="navigation-icon ">
                          <Image
                            src="/icons/startup.svg"
                            width={100}
                            height={100}
                            alt="Startup Ecosystem & Future Technologies"
                          />
                        </div>
                        <div className="sub-title">
                          Startup Ecosystem & Future Technologies
                        </div>
                      </Link>
                    </li>
                  </ul>
                </AccordionItem>

                <AccordionItem
                  key="5"
                  aria-label="Hire Developers"
                  indicator={({ isOpen }) => (
                    <ChevronLeft
                      className={`transition-transform duration-300 ${isOpen ? "-rotate-90" : ""
                        }`}
                    />
                  )}
                  title={<div className="flex justify-between items-center w-full"><span style={{ fontSize: "18px", fontWeight: "600" }}>Hire Developers</span></div>}
                >
                  <ul className="dropdown-navigation side-dropdown-navigation hire-dropdown">
                    <li className="dropdown-navigation-menu">
                      <Link
                        href="/hire-ios-app-developers/"
                        onClick={handleClose}
                        className="!items-center business-growth hire-ios"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      >
                        <div className="navigation-icon">
                          <Image
                            src="/icons/appstore.svg"
                            width={100}
                            height={100}
                            alt="business intelligence & analytics"
                          />
                        </div>
                        <div className="sub-title">Hire iOS Developers</div>
                      </Link>
                      <Link
                        href="/hire-android-app-developers/"
                        onClick={handleClose}
                        className="!items-center business-growth"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      >
                        <div className="navigation-icon ">
                          <Image
                            src="/icons/android.svg"
                            width={100}
                            height={100}
                            alt="digital marketing"
                          />
                        </div>
                        <div className="sub-title">Hire Android Developers</div>
                      </Link>
                      <Link
                        href="/hire-flutter-developers/"
                        onClick={handleClose}
                        className="!items-center business-growth hire-flutter"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      >
                        <div className="navigation-icon ">
                          <Image
                            src="/icons/flutter.svg"
                            width={100}
                            height={100}
                            alt="digital marketing"
                          />
                        </div>
                        <div className="sub-title">Hire Flutter Developers</div>
                      </Link>
                      <Link
                        href="/hire-react-native-developers/"
                        onClick={handleClose}
                        className="!items-center business-growth full-stack"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      >
                        <div className="navigation-icon ">
                          <Image
                            src="/icons/reactnative.svg"
                            width={100}
                            height={100}
                            alt="QA & testing"
                          />
                        </div>
                        <div className="sub-title">
                          Hire React Native Developers
                        </div>
                      </Link>
                      <Link
                        href="/hire-nodejs-developers/"
                        onClick={handleClose}
                        className="!items-center qa full-stack"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      >
                        <div className="navigation-icon ">
                          <Image
                            src="/icons/nodeversion.svg"
                            width={100}
                            height={100}
                            alt="QA & testing"
                          />
                        </div>
                        <div className="sub-title">Hire Node js Developers</div>
                      </Link>
                      <Link
                        href="/hire-reactjs-developers/"
                        onClick={handleClose}
                        className="!items-center qa full-stack"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      >
                        <div className="navigation-icon ">
                          <Image
                            src="/icons/reactnative.svg"
                            width={100}
                            height={100}
                            alt="QA & testing"
                          />
                        </div>
                        <div className="sub-title">
                          Hire React js Developers
                        </div>
                      </Link>
                      <Link
                        href="/hire-angular-developers/"
                        onClick={handleClose}
                        className="!items-center qa full-stack"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      >
                        <div className="navigation-icon ">
                          <Image
                            src="/icons/nodeversion-1.svg"
                            width={100}
                            height={100}
                            alt="QA & testing"
                          />
                        </div>
                        <div className="sub-title">Hire Angular Developers</div>
                      </Link>
                      <Link
                        href="/hire-ui-ux-designers/"
                        onClick={handleClose}
                        className="!items-center ui"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      >
                        <div className="navigation-icon ">
                          <Image
                            src="/icons/uiux.svg"
                            width={100}
                            height={100}
                            alt="UI/UX designing"
                          />
                        </div>
                        <div className="sub-title">Hire UI/UX Designers</div>
                      </Link>
                      <Link
                        href="/hire-dot-net-developers/"
                        onClick={handleClose}
                        className="!items-center technology-service hire-dotnet"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      >
                        <div className="navigation-icon ">
                          <Image
                            src="/icons/dotnet1.svg"
                            width={100}
                            height={100}
                            alt="cloud service"
                          />
                        </div>
                        <div className="sub-title">Hire .Net Developers</div>
                      </Link>
                    </li>
                  </ul>
                </AccordionItem>

              </Accordion>
            </NavbarMenuItem>

            {/* <NavbarMenuItem>
                            <Link className='text-black blog-header-title dropdown-menu-name' onClick={handleClose} href="/portfolio/">
                                Case Studies
                            </Link>
                        </NavbarMenuItem> */}
            {/* <NavbarMenuItem>
              <Link
              
                className="text-black blog-header-title dropdown-menu-name text-[18px]"
                onClick={handleClose}
                href="/blog/"
              >
                Blogs
              </Link>
            </NavbarMenuItem> */}
            {/* <NavbarMenuItem>
                            <Link className='text-black blog-header-title dropdown-menu-name' onClick={handleClose} href="/careers/">
                                Careers
                            </Link>
                        </NavbarMenuItem> */}
            <NavbarMenuItem>
              <Button
                className="font-medium h-[38px]   px-[70px] rounded-full text-white bg-gradient-to-r from-[#3730A3] to-[#38BDF8] shadow-none active:scale-100"
              >
                Get In Touch
              </Button>

            </NavbarMenuItem>
          </ul>
        </div>
      </div>

      {//main screen navbar not phone screens
      }
      <div
        className={` navbar-item-container py-[9px] px-[20px] my-box rounded-full ${mode === "black"
          ? "bg-[#191919] text-white"
          : "bg-[#FFFFFF] text-black"
          }`}
      >
        <NavbarItem className="">
          <AboutDropdown scrollValue={scrollValue} />
        </NavbarItem>
        <NavbarItem className="">
          <ProductDropdown scrollValue={scrollValue} />
        </NavbarItem>
        <NavbarItem className="">
          <NewServicesDropdown scrollValue={scrollValue} />
        </NavbarItem>

        <NavbarItem className="">
          <Link
            style={{ fontWeight: 500 }}
            className={`font-medium blog-header-title dropdown-menu-name max-[1100px]:text-sm hover:text-[#024D81]`}
            href="/portfolio/"
          >
            <div className="group flex items-center gap-[10px] max-[1100px]:gap-[5px] max-[1100px]:text-sm">
              Resources
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                className="transition-transform duration-300 group-hover:rotate-180"
              >
                <path
                  d="M17 12.5L12 16.5L7 12.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Link>
        </NavbarItem>


        <NavbarItem className="">
          <IndustryDropdown scrollValue={scrollValue} />
        </NavbarItem>

      </div>
      {isMenuOpen && (
        <div
          className="w-full h-full bg-[#00000093] backdrop-blur-sm fixed top-0 left-0"
          onClick={handleClose}
        />
      )}
    </>
  );
};

export default NavbarMenuItems;
