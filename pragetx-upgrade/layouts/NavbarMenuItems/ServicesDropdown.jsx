import React from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import Image from 'next/image';
import Link from 'next/link';
import './dropdown.css'

const ServicesDropdown = (scrollValue) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const dropdownRef = React.useRef(null);

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
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
                <DropdownTrigger className={scrollValue?.scrollValue ? 'text-black dropdown-menu-name' : 'text-white dropdown-menu-name'}>
                    Services
                </DropdownTrigger>
                <DropdownMenu aria-label="Services dropdown" className="">
                    <DropdownItem textValue='header'>
                        <div className="nav-dropdowns service-dropdown">
                            <div className="nav-dropdowns-content">
                                <div className='dropdown-img'>
                                    <div>
                                        <div className="main-heading">We like to scale</div>
                                        <div className="sub-text">
                                            <span className='whitespace-break-spaces'>We Craft Software for Your Growth.</span>
                                            <div>
                                                <Button
                                                    as={Link}
                                                    href="/contact-us"
                                                    color='primary'
                                                    variant='solid'
                                                    className='font-medium mt-3'
                                                    endContent={<Image src='/icons/up-arrow.svg' alt='up arrow' className='w-[15px] h-[15px]' height={15} width={15} />}
                                                >
                                                    Contact Us
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='nav-content'>
                                    <div className="dropdown-navigations">
                                        <ul className="dropdown-navigation col1">
                                            <li className="dropdown-navigation-menu">
                                                <div className='title'>Business growth</div>
                                                <Link href="/digital-marketing" className="!items-center digital">
                                                    <div className="navigation-icon ">
                                                        <Image src='/icons/digital-marketing.svg' width={100} height={100} alt='digital marketing' />
                                                    </div>
                                                    <div className="sub-title">Digital Marketing</div>
                                                </Link>
                                                <Link href="/branding" className="!items-center business-growth">
                                                    <div className="navigation-icon">
                                                        <Image src='/icons/branding.svg' width={100} height={100} alt='business intelligence & analytics' />
                                                    </div>
                                                    <div className="sub-title">Branding</div>
                                                </Link>
                                            </li>
                                        </ul>
                                        <ul className="dropdown-navigation col2">
                                            <li className="dropdown-navigation-menu">
                                                <div className='title'>Developing without bugs</div>
                                                <Link href="/qa-and-testing" className="!items-center qa">
                                                    <div className="navigation-icon ">
                                                        <Image src='/icons/quality.svg' width={100} height={100} alt='QA & testing' />
                                                    </div>
                                                    <div className="sub-title">QA & Testing</div>
                                                </Link>
                                            </li>
                                        </ul>
                                        <ul className="dropdown-navigation col3">
                                            <li className="dropdown-navigation-menu">
                                                <div className='title'> Delighting users with designs</div>
                                                <Link href="/ui-ux-designing" className="!items-center ui">
                                                    <div className="navigation-icon ">
                                                        <Image src='/icons/ui-ux-designing.svg' width={100} height={100} alt='UI/UX designing' />
                                                    </div>
                                                    <div className="sub-title">UI/UX designing</div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="dropdown-navigations !mt-4">

                                        <ul className="dropdown-navigation col1">
                                            <li className="dropdown-navigation-menu">
                                                <div className='title'>Moving ahead with technology</div>
                                                <Link href="/cloud-solutions" className="!items-center technology-service">
                                                    <div className="navigation-icon ">
                                                        <Image src='/icons/cloud-service.svg' width={100} height={100} alt='cloud service' />
                                                    </div>
                                                    <div className="sub-title">Cloud Services</div>
                                                </Link>
                                                <Link href="/devops" className="!items-center technology-service">
                                                    <div className="navigation-icon ">
                                                        <Image src='/icons/devops.svg' width={100} height={100} alt='devops solutions' />
                                                    </div>
                                                    <div className="sub-title">DevOps Solutions</div>
                                                </Link>
                                                <Link href="/enterprise-it-solutions" className="!items-center technology-service">
                                                    <div className="navigation-icon ">
                                                        <Image src='/icons/it-solution.svg' width={100} height={100} alt='enterprise solution' />
                                                    </div>
                                                    <div className="sub-title">Enterprise IT Solutions</div>
                                                </Link>
                                                <Link href="/salesforce" className="!items-center technology-service">
                                                    <div className="navigation-icon ">
                                                        <Image src='/icons/salesforce-nav.svg' width={100} height={100} alt='enterprise solution' />
                                                    </div>
                                                    <div className="sub-title">Salesforce</div>
                                                </Link>
                                            </li>
                                        </ul>

                                        <ul className="dropdown-navigation col2">
                                            <li className="dropdown-navigation-menu">
                                                <div className="title">Developing with care (Web 2.0)</div>
                                                <Link href="/software-development" className="!items-center development custom-development">
                                                    <div className="navigation-icon ">
                                                        <Image src='/icons/software.svg' width={100} height={100} alt='software solution' />
                                                    </div>
                                                    <div className="sub-title">Custom Software Development</div>
                                                </Link>
                                                <Link href="/web-app-development" className="!items-center development">
                                                    <div className="navigation-icon ">
                                                        <Image src='/icons/web.svg' width={100} height={100} alt='web development' />
                                                    </div>
                                                    <div className="sub-title">Web App Development</div>
                                                </Link>
                                                <Link href="/mobile-app-development" className="!items-center development mobile-development">
                                                    <div className="navigation-icon ">
                                                        <Image src='/icons/app.svg' width={100} height={100} alt='mobile development' />
                                                    </div>
                                                    <div className="sub-title">Mobile App Development</div>
                                                </Link>
                                            </li>
                                        </ul>


                                        <ul className="dropdown-navigation col3">
                                            <li className="dropdown-navigation-menu">
                                                <div className="title">Web 3.0 Technologies</div>
                                                <Link href="/ai-ml-development" className="!items-center technology-service">
                                                    <div className="navigation-icon ">
                                                        <Image src='/icons/ai-ml.svg' width={100} height={100} alt='ai/ml' />
                                                    </div>
                                                    <div className="sub-title">AI & ML</div>
                                                </Link>
                                                <Link href="/iot-development" className="!items-center technology-service">
                                                    <div className="navigation-icon ">
                                                        <Image src='/icons/iot-nav.svg' width={100} height={100} alt='ai/ml' />
                                                    </div>
                                                    <div className="sub-title">IoT Development</div>
                                                </Link>
                                                <Link href="/data-analytics-and-bi" className="!items-center technology-service">
                                                    <div className="navigation-icon">
                                                        <Image src='/icons/business-analytics.svg' width={100} height={100} alt='business intelligence & analytics' />
                                                    </div>
                                                    <div className="sub-title">Data Analytics & BI</div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
};

export default ServicesDropdown;