import React from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import Image from 'next/image';
import Link from 'next/link';
import './dropdown.css'

const HireDevelopersDropdown = (scrollValue) => {
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
                <DropdownTrigger className={`${scrollValue?.scrollValue ? 'text-black dropdown-menu-name' : 'text-white dropdown-menu-name'}`}>
                    Hire Developers
                </DropdownTrigger>
                <DropdownMenu aria-label="Hire dropdown" className="">
                    <DropdownItem textValue='header'>
                        <div className="nav-dropdowns hire-dropdown">
                            <div className="nav-dropdowns-content">
                                <div className='dropdown-img'>
                                    <div>
                                        <div className="main-heading whitespace-break-spaces">Dedicated Team for you</div>
                                        <div className="sub-text">
                                            <span>Your Task | Your Time | Our Team</span>
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
                                        <ul className="dropdown-navigation">
                                            <li className="dropdown-navigation-menu">
                                                <div>
                                                    <div className='title'>App Development</div>
                                                    <Link href="/hire-ios-app-developers" className="!items-center business-growth hire-ios" data-bs-dismiss="offcanvas" aria-label="Close">
                                                        <div className="navigation-icon">
                                                            <Image src='/icons/appstore.svg' width={100} height={100} alt='business intelligence & analytics' />
                                                        </div>
                                                        <div className="sub-title">Hire iOS Developers</div>
                                                    </Link>
                                                    <Link href="/hire-android-app-developers" className="!items-center business-growth" data-bs-dismiss="offcanvas" aria-label="Close">
                                                        <div className="navigation-icon ">
                                                            <Image src='/icons/android.svg' width={100} height={100} alt='digital marketing' />
                                                        </div>
                                                        <div className="sub-title">Hire Android Developers</div>
                                                    </Link>
                                                    <Link href="/hire-flutter-developers" className="!items-center business-growth hire-flutter" data-bs-dismiss="offcanvas" aria-label="Close">
                                                        <div className="navigation-icon ">
                                                            <Image src='/icons/flutter.svg' width={100} height={100} alt='digital marketing' />
                                                        </div>
                                                        <div className="sub-title">Hire Flutter Developers</div>
                                                    </Link>
                                                    <Link href="/hire-react-native-developers" className="!items-center business-growth full-stack" data-bs-dismiss="offcanvas" aria-label="Close">
                                                        <div className="navigation-icon ">
                                                            <Image src='/icons/reactnative.svg' width={100} height={100} alt='QA & testing' />
                                                        </div>
                                                        <div className="sub-title">Hire React Native Developers</div>
                                                    </Link>
                                                </div>
                                            </li>
                                        </ul>
                                        <ul className="dropdown-navigation">
                                            <li className="dropdown-navigation-menu">
                                                <div>
                                                    <div className='title'>Full-stack force</div>
                                                    <Link href="/hire-nodejs-developers" className="!items-center qa full-stack" data-bs-dismiss="offcanvas" aria-label="Close">
                                                        <div className="navigation-icon ">
                                                            <Image src='/icons/nodeversion.svg' width={100} height={100} alt='QA & testing' />
                                                        </div>
                                                        <div className="sub-title">Hire Node js Developers</div>
                                                    </Link>
                                                    <Link href="/hire-reactjs-developers" className="!items-center qa full-stack" data-bs-dismiss="offcanvas" aria-label="Close">
                                                        <div className="navigation-icon ">
                                                            <Image src='/icons/reactnative.svg' width={100} height={100} alt='QA & testing' />
                                                        </div>
                                                        <div className="sub-title">Hire React js Developers</div>
                                                    </Link>
                                                    <Link href="/hire-angular-developers" className="!items-center qa full-stack" data-bs-dismiss="offcanvas" aria-label="Close">
                                                        <div className="navigation-icon ">
                                                            <Image src='/icons/nodeversion-1.svg' width={100} height={100} alt='QA & testing' />
                                                        </div>
                                                        <div className="sub-title">Hire Angular Developers</div>
                                                    </Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="dropdown-navigations !mt-4">
                                        <ul className="dropdown-navigation">
                                            <li className="dropdown-navigation-menu">
                                                <div>
                                                    <div className='title'>Design team</div>
                                                    <Link href="/hire-ui-ux-designers" className="!items-center ui" data-bs-dismiss="offcanvas" aria-label="Close">
                                                        <div className="navigation-icon ">
                                                            <Image src='/icons/uiux.svg' width={100} height={100} alt='UI/UX designing' />
                                                        </div>
                                                        <div className="sub-title">Hire UI/UX Designers</div>
                                                    </Link>
                                                </div>
                                            </li>
                                        </ul>
                                        <ul className="dropdown-navigation">
                                            <li className="dropdown-navigation-menu">
                                                <div>
                                                    <div className='title'>Microsoft frameworks</div>
                                                    <Link href="/hire-dot-net-developers" className="!items-center technology-service hire-dotnet" data-bs-dismiss="offcanvas" aria-label="Close">
                                                        <div className="navigation-icon ">
                                                            <Image src='/icons/dotnet1.svg' width={100} height={100} alt='cloud service' />
                                                        </div>
                                                        <div className="sub-title">Hire .Net Developers</div>
                                                    </Link>
                                                </div>
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

export default HireDevelopersDropdown;