import React from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import Image from 'next/image';
import Link from 'next/link';
import './dropdown.css'


const AboutDropdown = ({ scrollValue }) => {
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
            style={{ border: 'none' }}
        >
            <Dropdown
                isOpen={isOpen}
                onOpenChange={setIsOpen}

                classNames={{
                    trigger: `${isOpen ? "dropdown-icon" : ""} blog-header-title font-medium relative hover:cursor-pointer !opacity-100 text-medium max-[1100px]:text-sm`
                }}
                tabIndex={-1}
            >
                <DropdownTrigger
                    className={`text-[16px] font-medium no-underline !underline-offset-0 !decoration-transparent hover:no-underline focus:no-underline active:no-underline transition-colors hover:text-[#024D81] dropdown-menu-name`}
                >
                    <div className="group flex items-center gap-[10px] max-[1100px]:gap-[5px] max-[1100px]:text-sm">
                        Company
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
                <DropdownMenu
                    style={{
                        outline: 'none',
                        boxShadow: 'none',
                        padding: 0,
                        border: 'none',
                    }}
                    aria-label="About dropdown"
                    className="about-dropdown"
                    tabIndex={-1}
                >
                    <DropdownItem
                        textValue='header'
                        style={{
                            outline: 'none',
                            boxShadow: 'none',
                            padding: 0,
                            border: 'none'
                        }}

                    >
                        <div className="nav-dropdowns" style={{ borderRadius: '15px' }}>
                            <div className="nav-dropdowns-content">
                                <div className='dropdown-img'>
                                    <div>
                                        <div className="main-heading">Hi there! <br />We’re PragetX.</div>
                                        <div className="sub-text">
                                            <span className='font-medium whitespace-break-spaces'>Fueling growth with AI-powered software development</span>
                                            <div>
                                                <Button
                                                    as={Link}
                                                    href="/contact-us"
                                                    color='primary'
                                                    variant='solid'
                                                    className="font-medium h-[38px] w-[120px] mt-[10px] px-[70px] rounded-full text-white bg-gradient-to-r from-[#3730A3] to-[#38BDF8] shadow-none active:scale-100"
                                                >
                                                    Contact Us
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='nav-content'>
                                    <div className="title">Helping businesses develop & grow</div>
                                    <div className="dropdown-navigations">
                                        <ul className="dropdown-navigation">
                                            <li className="dropdown-navigation-menu about" data-bs-dismiss="offcanvas" aria-label="Close">
                                                <Link href="/about">
                                                    <div className="navigation-icon">
                                                        <Image src='/icons/about.svg' width={100} height={100} alt='about pragetx' />
                                                    </div>
                                                    <div className=''>
                                                        <div className='title font-medium'>About PragetX</div>
                                                        <div className="sub-title whitespace-break-spaces">We believe in &ldquo;You grow - we grow&rdquo; mindset</div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="dropdown-navigation-menu service" data-bs-dismiss="offcanvas" aria-label="Close">
                                                <Link href="/how-we-work">
                                                    <div className="navigation-icon">
                                                        <Image src='/icons/work.svg' width={100} height={100} alt='how we work' />
                                                    </div>
                                                    <div className=''>
                                                        <div className='title font-medium'> How We Work</div>
                                                        <div className="sub-title whitespace-break-spaces">Learn how we combine smart & hard work
                                                            Set processes + smart work = Blitzscaling work</div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="dropdown-navigation-menu referral" data-bs-dismiss="offcanvas" aria-label="Close">
                                                <Link href="/referral-programs">
                                                    <div className="navigation-icon">
                                                        <Image src='/icons/referral.svg' width={100} height={100} alt='referral program' />
                                                    </div>
                                                    <div className=''>
                                                        <div className='title font-medium'>Client Referral Program</div>
                                                        <div className="sub-title whitespace-break-spaces">Refer our services & earn rewards</div>
                                                    </div>
                                                </Link>
                                            </li>

                                        </ul>
                                        <ul className="dropdown-navigation">

                                            <li className="dropdown-navigation-menu partner" data-bs-dismiss="offcanvas" aria-label="Close">
                                                <Link href="/become-partner">
                                                    <div className="navigation-icon">
                                                        <Image src='/icons/partner.svg' width={100} height={100} alt='Become A Partner' />
                                                    </div>
                                                    <div className=''>
                                                        <div className='title font-medium'>Become A Partner</div>
                                                        <div className="sub-title whitespace-break-spaces">We can be your reliable extended IT team</div>
                                                    </div>
                                                </Link>
                                            </li>

                                            <li className="dropdown-navigation-menu internship" data-bs-dismiss="offcanvas" aria-label="Close">
                                                <Link href="/internship-and-training">
                                                    <div className="navigation-icon">
                                                        <Image src='/icons/internship.svg' width={100} height={100} alt='internship & training' />
                                                    </div>
                                                    <div className=''>
                                                        <div className='title font-medium'>Internship & Training</div>
                                                        <div className="sub-title whitespace-break-spaces">Join a team that knows how to get things done</div>
                                                    </div>
                                                </Link>
                                            </li>

                                            <li className="dropdown-navigation-menu careers" data-bs-dismiss="offcanvas" aria-label="Close">
                                                <Link href="/careers">
                                                    <div className="navigation-icon">
                                                        <Image src='/icons/career.svg' width={100} height={100} alt='careers' />
                                                    </div>
                                                    <div className=''>
                                                        <div className='title font-medium'>Careers<span className="header-hiring">We Are Hiring</span></div>
                                                        <div className="sub-title whitespace-break-spaces">Explore opportunities to grow with us</div>
                                                    </div>
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

export default AboutDropdown;