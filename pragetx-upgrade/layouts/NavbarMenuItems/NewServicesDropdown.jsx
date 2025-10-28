import React from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import Image from 'next/image';
import Link from 'next/link';
import './dropdown.css'

const NewServicesDropdown = (scrollValue) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const dropdownRef = React.useRef(null);
    const timeoutRef = React.useRef(null);

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsOpen(false);
        }, 150);
    };

    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Dropdown
                isOpen={isOpen}
                onOpenChange={setIsOpen}
                classNames={{
                    trigger: `${isOpen ? "dropdown-icon" : ""} blog-header-title font-medium relative hover:cursor-pointer !opacity-100 text-medium max-[1100px]:text-sm`
                }}
            >
                <DropdownTrigger style={{fontWeight: 500}} className={'hover:text-[#024D81]'}>
                    <div className="group flex items-center gap-[10px] max-[1100px]:gap-[5px] max-[1100px]:text-sm">
                        Services
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
                </DropdownTrigger>
                <DropdownMenu aria-label="Services dropdown" className="" >
                    <DropdownItem textValue='header'>
                        <div className="nav-dropdowns new-service-dropdown" style={{borderRadius:'15px'}}>
                            {/* <div className="nav-dropdowns-content"> */}
                            <div className='nav-content'>
                                <div className="dropdown-navigations">
                                    <ul className="dropdown-navigation col1 border-r-2 border-[#eee] pr-4">
                                        <li className="dropdown-navigation-menu">
                                            <div className='title'>Artificial Intelligence</div>
                                            <Link href="/ai-consulting-service" className="!items-center digital">
                                                <div className="navigation-icon ">
                                                    <Image src='/icons/ai-consulting.svg' width={100} height={100} alt='AI Consulting' />

                                                </div>
                                                <div className="sub-title">AI Consulting</div>
                                            </Link>
                                            <Link href="/nlp-development-service" className="!items-center business-growth">
                                                <div className="navigation-icon">
                                                    <Image src='/icons/nlp-service.svg' width={100} height={100} alt='NLP' />
                                                </div>
                                                <div className="sub-title">NLP</div>
                                            </Link>
                                            <Link href="/computer-vision-service" className="!items-center business-growth">
                                                <div className="navigation-icon">
                                                    <Image src='/icons/computer-vision.svg' width={100} height={100} alt='Computer Vision' />
                                                </div>
                                                <div className="sub-title">Computer Vision</div>
                                            </Link>
                                            <Link href="/speech-text-service" className="!items-center business-growth">
                                                <div className="navigation-icon">
                                                    <Image src='/icons/speech-text.svg' width={100} height={100} alt='speech text' />
                                                </div>
                                                <div className="sub-title">Speech Text Service</div>
                                            </Link>
                                            <Link href="/business-automation-service" className="!items-center business-growth">
                                                <div className="navigation-icon">
                                                    <Image src='/icons/lcnc.svg' width={100} height={100} alt='low-code/no-code' />
                                                </div>
                                                <div className="sub-title">Business Automation</div>
                                            </Link>
                                        </li>
                                    </ul>
                                    <ul className="dropdown-navigation col2 border-r-2 border-[#eee] pr-4">
                                        <li className="dropdown-navigation-menu">
                                            <div className='title'>GEN AI</div>
                                            <Link href="/ai-agent-development-service" className="!items-center technology-service">
                                                <div className="navigation-icon ">
                                                    <Image src='/icons/ai-agent-development.svg' width={100} height={100} alt='AI Agent Development' />
                                                </div>
                                                <div className="sub-title">AI Agent Development</div>
                                            </Link>
                                            <Link href="/rag-development-service" className="!items-center technology-service">
                                                <div className="navigation-icon ">
                                                    <Image src='/icons/rag-development.svg' width={100} height={100} alt='Rag Development' />
                                                </div>
                                                <div className="sub-title">RAG Development</div>
                                            </Link>
                                            <Link href="/llm-inference-fine-tuning-service" className="!items-center technology-service">
                                                <div className="navigation-icon ">
                                                    <Image src='/icons/llm-inference-fine-tuning.svg' width={100} height={100} alt='LLM Inference & Fine Tuning' />
                                                </div>
                                                <div className="sub-title">LLM Inference & Fine Tuning</div>
                                            </Link>
                                            <Link href="/llm-chatbot-development-service" className="!items-center technology-service">
                                                <div className="navigation-icon ">
                                                    <Image src='/icons/chat-bot.svg' width={100} height={100} alt='LLM Chatbot' />
                                                </div>
                                                <div className="sub-title">LLM Chatbot Development</div>
                                            </Link>

                                        </li>
                                    </ul>
                                    <ul className="dropdown-navigation col3 border-r-2 border-[#eee] pr-4">
                                        <li className="dropdown-navigation-menu">
                                            <div className='title'>Devops</div>
                                            <Link href="/mlops-service" className="!items-center development custom-development">
                                                <div className="navigation-icon ">
                                                    <Image src='/icons/mlops-service.svg' width={100} height={100} alt='MLOps Service' />
                                                </div>
                                                <div className="sub-title">MLOps Service</div>
                                            </Link>
                                            <Link href="/devops-consulting-service" className="!items-center development">
                                                <div className="navigation-icon ">
                                                    <Image src='/icons/devops-consulting.svg' width={100} height={100} alt='Devops Consulting' />
                                                </div>
                                                <div className="sub-title">Devops Consulting</div>
                                            </Link>
                                            <Link href="/devops-automation-service" className="!items-center development mobile-development">
                                                <div className="navigation-icon ">
                                                    <Image src='/icons/devops-automation.svg' width={100} height={100} alt='Devops Automation' />
                                                </div>
                                                <div className="sub-title">Devops Automation</div>
                                            </Link>
                                            <Link href="/cloud-solutions-service" className="!items-center development mobile-development">
                                                <div className="navigation-icon ">
                                                    <Image src='/icons/cloud-solution.svg' width={100} height={100} alt='Cloud Solutions' />
                                                </div>
                                                <div className="sub-title">Cloud Solutions</div>
                                            </Link>
                                        </li>
                                    </ul>
                                    <ul className="dropdown-navigation col4">
                                        <li className="dropdown-navigation-menu">
                                            <div className='title'>Web & App development</div>
                                            <Link href="/web-app-development-service" className="!items-center ui">
                                                <div className="navigation-icon ">
                                                    <Image src='/icons/web-development.svg' width={100} height={100} alt='Web App Development' />
                                                </div>
                                                <div className="sub-title">Web App Development</div>
                                            </Link>
                                            <Link href="/mobile-app-development-service" className="!items-center ui">
                                                <div className="navigation-icon ">
                                                    <Image src='/icons/mobile-app-development.svg' width={100} height={100} alt='Mobile App Development' />
                                                </div>
                                                <div className="sub-title">Mobile App Development</div>
                                            </Link>
                                            <Link href="/ui-ux-design-service" className="!items-center ui">
                                                <div className="navigation-icon ">
                                                    <Image src='/icons/ui-ux-design.svg' width={100} height={100} alt='UI/UX design' />
                                                </div>
                                                <div className="sub-title">UI/UX Design</div>
                                            </Link>
                                            <Link href="/custom-software-development-service" className="!items-center ui">
                                                <div className="navigation-icon ">
                                                    <Image src='/icons/custom-software-development.svg' width={100} height={100} alt='custom software development' />
                                                </div>
                                                <div className="sub-title">Custom Software Development</div>
                                            </Link>
                                            <Link href="/product-development-service" className="!items-center ui">
                                                <div className="navigation-icon ">
                                                    <Image src='/icons/product-development.svg' width={100} height={100} alt='product development' />
                                                </div>
                                                <div className="sub-title">Product Development</div>
                                            </Link>
                                            <Link href="/qa-service" className="!items-center ui">
                                                <div className="navigation-icon ">
                                                    <Image src='/icons/quality-assurance.svg' width={100} height={100} alt='Quality Assurance' />
                                                </div>
                                                <div className="sub-title">Quality Assurance</div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* </div> */}
                        </div>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
};

export default NewServicesDropdown;