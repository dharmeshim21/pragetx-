import { schemaData } from "@/shared/schema/regular/schemaData";
import SchemaScript from "@/shared/schema/regular/SchemaScript";
import Star from "@/public/homescreen/homeCard/star.png"
import Line from "@/public/homescreen/line.png"
import Dots from "@/public/homescreen/homeCard/dottedImg.png"
import BGImg from "@/public/homescreen/optionsImgs/teamOption3.png"
// import WorkLife from "@/public/homescreen/WorkLife.png"
// import TeamWork from "@/public/homescreen/TeamWork.png"
import HappyUser from "@/public/images/smitImgs/happy-user.jpg"
import Listen from "@/public/images/smitImgs/listen.png"
import { Button, Chip } from "@heroui/react";
import { BsStars } from "react-icons/bs";
import '../company.css'
import Image from "next/image";
import CompanyMarquee from "@/components/CompanyMarquee/CompanyMarquee";
import { array } from "yup";
import Counter from "@/components/Counter/Counter";
import Team from "@/components/TeamSlider/Team";
import ScaleTeam from "@/components/ScaleTeamSlider/ScaleTeam";
import WorkLifeSlider from "@/components/WorkLife/WorkLifeSlider";
import AnimationWrapper from "@/components/AnimationWrapper/AnimationWrapper";
import TeamWork from "@/components/TeamWork/TeamWork";
import LetsTalk from "@/components/Lets Talk/LetsTalk";
// import TeamWork from "/path/to/image.jpg";

const WorkInServicesData = [
    {
        key: 1,
        image: "/icons/customer-comes-first.svg",
        title: "Customer Comes First",
        subData:
            "All clients of PragetX are our key to success and an essential part of this thriving organization.",
    },
    {
        key: 2,
        image: "/icons/satisfaction.svg",
        title: "Satisfaction",
        subData: "A team that sticks to the words given till the project delivery.",
    },
    {
        key: 3,
        image: "/icons/honesty.svg",
        title: "Honesty",
        subData:
            "Complete transparency is what we aim for, and we follow through by all means.",
    },
    {
        key: 4,
        image: "/icons/integrity.svg",
        title: "Integrity",
        subData:
            "Our ethics and professionalism to deal with industry problems define our work culture.",
    },
    {
        key: 5,
        image: "/icons/accountability.svg",
        title: "Accountability",
        subData:
            "No matter how difficult a project is, we strive to achieve the desired benchmarks.",
    },
    {
        key: 6,
        image: "/icons/cognitive-teamwork.svg",
        title: "Cognitive Teamwork",
        subData:
            "No project work can be done alone better than teamwork, and that’s what lies at the center of PragetX.",
    },
    {
        key: 7,
        image: "/icons/passionate-teams.svg",
        title: "Passionate Teams",
        subData:
            "A passion to deliver projects with multiple times, cross-verifications and amendments until the objectives are met.",
    },
    {
        key: 8,
        image: "/icons/skills-above-everything.svg",
        title: "Skills Above Everything",
        subData:
            "At PragetX, we choose our team members by assessing their skills rather than giving priority to their degree.",
    },
    {
        key: 9,
        image: "/icons/value-to-time.svg",
        title: "Value to Time",
        subData:
            "No matter how big or small and easy or difficult a project is, we ensure to meet the deadline every time.",
    },
];



export const metadata = {
    title: "About PragetX : Software Company Overview | Why PragetX",
    description:
        "Discover the story of PragetX — who we are, our vibrant culture, and why we’re the right web & mobile app development partner. Got a project? Let’s talk!",
    keywords:
        "mobile app development company, app development, food delivery app, food delivery solution, online food app, android app development, iOS app development, India, USA, UAE, Sweden, Turkey, California, Top app development companies, on-demand solution",
    alternates: {
        canonical: "/about/",
    },
    openGraph: {
        title: "About PragetX : Software Company Overview | Why PragetX",
        description:
            "Discover the story of PragetX — who we are, our vibrant culture, and why we’re the right web & mobile app development partner. Got a project? Let’s talk!",
        url: "/about",
        images: "https://pragetx.ai/images/about-us-main-bg.jpg",
    },
    icons: {
        icon: [{ url: "/images/favicon.png", type: "image/webp" }],
        shortcut: [
            { url: "/images/favicon.png", type: "image/x-icon" },
            { url: "/images/favicon.ico", type: "image/x-icon" },
        ],
    },
};

const About = () => {


    const aboutSchema = {
        ...schemaData,
        "@graph": [
            ...schemaData["@graph"],
            {
                "@id": "https://pragetx.ai/about/#webpage",
                url: "https://pragetx.ai/about/",
                name: "About PragetX : Software Company Overview | Why PragetX",
                primaryImageOfPage: {
                    "@id": "https://pragetx.ai/about/#primaryimage",
                },
                description:
                    "Discover the story of PragetX — who we are, our vibrant culture, and why we’re the right web & mobile app development partner. Got a project? Let’s talk!",
            },
        ],
    };

    const stats = [
        { icon: "/icons/projects.svg", label: "Projects Completed", unit: 'plus', value: 125 },
        { icon: "/icons/clients.svg", label: "Clients Served", unit: 'plus', value: 90 },
        { icon: "/icons/countries.svg", label: "Countries Covered", unit: 'plus', value: 9 },
        { icon: "/icons/retentions.svg", label: "Recurring & Retentions", unit: 'percentage', value: 98 },
        { icon: "/icons/professionals.svg", label: "Working Professionals", unit: 'plus', value: 25 },
        { icon: "/icons/partners.svg", label: "Offshore Partners", unit: 'plus', value: 7 },
    ];
    const options = [
        "Constructive Feedback",
        "Learning & Development",
        "Mindful Personal Guidance",
        "Inclusive & Open-Culture",
        "Innovation & Quality First",
        "Productive Implementation",
        "Best & Global Opportunities",
        "Work with Latest Technologies",
        "Evolving Culture",
    ];

    return (
        <div className="about">
            <SchemaScript schema={aboutSchema} />

            <section className="flex items-center justify-center bg-black min-h-screen">
                <div className="container text-white flex flex-col items-center justify-between">
                    <div
                        className="aboutLinem flex items-center justify-center 2xl:gap-2 gap-1 px-3 py-[5px] rounded-full"
                        style={{
                            fontSize: "14px",
                            fontWeight: 500,
                            background:
                                "linear-gradient(90deg, rgba(168, 86, 247, 0.5) 0%, rgba(106, 90, 205, 0.5) 50%, rgba(0, 161, 224, 0.5) 100%)",
                        }}
                    >
                        {/* For the white star use stars1 and for gradient star use stars */}
                        <Image
                            src="/homescreen/stars1.png"
                            alt="Stars"
                            className="rounded-md w-[15px] h-[20px] sm:w-[18px] sm:h-[23px] md:w-[20px] md:h-[25px] transition-all duration-300"
                            height={30}
                            width={30}
                        />
                        <span
                            className="text-white text-[14px] sm:text-[15px] font-medium leading-tight text-center"
                        >
                            A visionary & upcoming leading software development company based in India
                        </span>
                    </div>

                    <h1 className="font-[700] text-center text-[50px] leading-[100%] tracking-normal mt-[33px] ibm">A Dedicated, Agile Team of Developers At Your Service</h1>
                    <p className="font-[500] text-center text-[16px] leading-5 tracking-normal mt-[35px] px-8" style={{ color: 'white' }}>PragetX is an extended team of experienced software developers who are on a mission to help businesses in their digital transformation journey through dedication and the latest technology support.</p>
                    <Button radius="full" type="button" className="bg-custom-gradient mt-[36px] py-2.5 px-[30px] font-[500]  text-xl leading-[100%] tracking-[0.2px]">Talk to Our Consultant</Button>
                </div>
            </section>

            <section>
                <div className="container bg-gradient-to-l from-[#4FACFE]/80 to-[#FF9A9E]/80 text-white rounded-[50px] p-[30px] w-full flex flex-col items-center justify-center text-center">
                    <div className="flex items-end justify-end h-20 w-20 self-end">
                        <Image
                            src={Star}
                            alt="Star SVG"
                            height={10000}
                            width={10000}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="mt-[30px] ">
                        <h2 className="font-[700] text-center leading-[100%] tracking-normal ibm">PragetX: How It All Started?</h2>
                        <p className="font-[500] text-center leading-5 tracking-normal mt-5 px-[auto] md:px-28 " style={{ color: 'white', fontWeight: '500' }}>The idea of PragetX was like a buzzword in our founders’ minds that they couldn’t resist because the change it could bring across the IT sector. That’s how the leaders at PragetX came in front and laid its pillars in 2021 with an aim to be a helping hand to businesses suffering in their digital transformation journey due to a sudden need to transition to remote work settlements. Though it’s just a startup, during just a year of the journey, this visionary team has accomplished many milestones and has served 54+ global brands with extraordinary and compelling results as promised.</p>
                    </div>
                    <div className="flex items-start justify-start self-start h-20 w-20 mt-[30px]">
                        <Image
                            src={Star}
                            alt="Star SVG"
                            height={10000}
                            width={10000}
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </section>

            <section className="pt-0 bg-[linear-gradient(90deg,rgba(168,86,247,0.06)_0%,rgba(106,90,205,0.06)_50%,rgba(0,161,224,0.06)_100%)]">
                <div className="container flex flex-col 2xl:flex-row w-full items-center justify-between gap-10 2xl:gap-30 ">
                    <div className="h-[300px] md:h-[450px] w-2/3  lg:w-[600px] 2xl:w-1/2 rounded-[46px] bg-white shadow-[0_0_6px_0_#00000040] bg-cover bg-center">

                    </div>
                    <div className="flex flex-col gap-6 xl:w-1/2 justify-center items-start ">
                        <h2 className="font-[700] leading-[110%] tracking-normal text-center  2xl:text-start">Build your Companys Pragetanam with <span className="text-[#38BDF8]">PragetX</span></h2>
                        <p className="font-[500] leading-5 tracking-normal md:max-w-[500px] text-center 2xl:text-start lg:mx-0 mx-auto" style={{ fontSize: '18px', fontWeight: '500' }}>A team of smart and passionate leaders and adaptive software developers, working all together to deliver customized IT solutions, like web & mobile app development, cloud computing, DevOps, and Enterprise IT solutions, with precisions to meet the vision to help you build your brand credibility</p>
                        <Button radius="full" type="button" className="bg-custom-gradient mt-[10px] py-2.5 px-[40px] font-[500] text-xl mx-auto 2xl:mx-0 leading-[100%] tracking-[0.2px]">Get Start</Button>
                    </div>
                </div>
            </section>

            <section className="pt-0">
                <div className="flex flex-col items-center justify-center gap-14">
                    <Image
                        src={Line}
                        alt="Line svg"
                        height={10000}
                        width={10000}
                    />
                    <div className="container">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[100px]">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-center"
                                >
                                    <p className="font-[500] text-[22px] leading-[100%] tracking-normal">
                                        {stat.label}
                                    </p>

                                    <h2
                                        className="text-transparent text-center bg-clip-text font-bold bg-gradient-to-r from-[#A856F7] via-[#6A5ACD] to-[#00A1E0]  leading-[100%] mt-[20px] flex items-center satoshi min-h-[100px]"
                                        style={{ fontSize: "120px", fontWeight: "lighter" }}
                                    >
                                        <Counter end={stat.value} duration={2000} />
                                        {stat.unit === "percentage" && "%"}
                                        {stat.unit === "plus" && "+"}
                                    </h2>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Image
                        src={Line}
                        alt="Line svg"
                        height={10000}
                        width={10000}
                    />
                </div>
            </section>

            <section className="pt-0">
                <div className="container bg-gradient-to-l from-[#FF9A9E]/80 to-[#4FACFE]/80 text-white rounded-[50px] p-[50px] w-full flex flex-col items-center justify-center text-center">
                    <div className="flex items-end justify-end h-20 w-20 self-end">
                        <Image
                            src={Star}
                            alt="Star SVG"
                            height={10000}
                            width={10000}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="mt-[30px] ">
                        <h1 className="font-[700] text-center leading-[100%] tracking-normal">Build a Best Ethical Career with PragetX</h1>
                        <p className="font-[500] text-center leading-5 tracking-normal mt-5 px-20 md:px-48">We like to bring creativity to life for our team members. Belief in the culture of our company makes it the best place to work.</p>
                        <Button
                            className="
                            mt-[30px]
                            relative
                            inline-flex items-center justify-center
                            px-12 py-4
                            rounded-full
                            overflow-hidden
                            group
                            transition-all duration-300 ease-out transform
                            hover:scale-105 active:scale-95
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white
                        "
                        >
                            {/* ... button spans (unchanged) ... */}
                            <span
                                className="absolute inset-0 
                                bg-gradient-to-r from-gray-50 to-white 
                                transition-all duration-300 ease-out 
                                group-hover:opacity-0"
                            ></span>

                            <span
                                className="absolute inset-0 
                                bg-gradient-to-r from-white to-gray-50 
                                opacity-0 group-hover:opacity-100 
                                transition-all duration-300 ease-out"
                            ></span>

                            {/* Text with gradient */}
                            <span
                                className="relative z-10 text-xl font-bold 
                                bg-gradient-to-r from-[#3730A3] to-[#38BDF8] 
                                text-transparent bg-clip-text
                                transition-colors duration-300 ease-out"
                            >
                                Join Us Today
                            </span>
                        </Button>
                    </div>
                    <div className="flex items-start justify-start self-start h-20 w-20 mt-[30px]">
                        <Image
                            src={Star}
                            alt="Star SVG"
                            height={10000}
                            width={10000}
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </section>

            <section className="pt-0">
                <div className="container text-center flex flex-col items-center justify-center gap-5 ">
                    <h2>We only <span className="text-[#A856F7]">commit</span>, if we can do it</h2>
                    <p className="font-[500] text-[16px] text-center text-[#374151] leading-5 tracking-normal ">our focused business strategy is designed to enhance client’s existing development methodology and improve their conventional way of business operations.</p>
                    <ScaleTeam />
                </div>
            </section>


            <section className="pt-0 bg-[linear-gradient(90deg,rgba(168,86,247,0.06)_0%,rgba(106,90,205,0.06)_50%,rgba(0,161,224,0.06)_100%)]">
                <div className="container flex flex-col items-center justify-center">
                    <h2 className="font-[700] leading-[100%] tracking-normal text-center lg:text-start">
                        At <span className="text-[#A856F7]">PragetX</span>, We Live By Our Mantra
                    </h2>
                    <p className="font-[500] text-xl leading-[100%] tracking-normal mt-2.5 text-center lg:text-start">
                        Give us a chance to be your extended IT team and help you achieve your competitive edge
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center items-start gap-10 md:gap-[20px] mt-14">
                        {[
                            {
                                title: "Listen",
                                video: "/videos/listen.gif",
                            },
                            {
                                title: "Develop",
                                video: "/videos/develop.gif",
                            },
                            {
                                title: "Deploy",
                                video: "/videos/deploy.gif",
                            },
                        ].map((item, index) => (
                            <div className="h-fit" key={index}>
                                <div
                                    className="relative 2xl:min-w-[390px] 2xl:max-h-[300px] rounded-[30px] overflow-hidden shadow-[0_0_4px_0_#00000040] flex items-center justify-center"
                                    style={{
                                        backgroundImage: "url('/images/deploy_develop_bg.png')",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                >

                                    <Image
                                        src={item.video}
                                        width={300}
                                        height={300}
                                        className="object-contain mx-auto relative z-10"
                                        alt={item.title}
                                    />
                                </div>
                                <p className="font-[700] text-sm text-center leading-[100%] tracking-normal mt-2.5">
                                    {item.title}
                                </p>
                            </div>


                        ))}
                    </div>
                </div>
            </section>


            <WorkLifeSlider />



            <section className="  p-0">
                <AnimationWrapper>
                    <div
                        className="
                    container
                    relative
                    mx-auto 
                    py-[100px]   // Vertical padding for inner content centering
                    rounded-[50px]
                    overflow-hidden  
                    text-center
                    my-box
                "
                        style={{
                            // Combine the dotted pattern and the gradient background
                            background: `
                        url(${'/homescreen/homeCard/dottedImg2.png'}) center/auto repeat, 
                        linear-gradient(91.69deg, #FF9A9E -0.03%, #4FACFE 99.97%)
                    `,
                        }}
                    >
                        {/* Decorative Star 1 (Top-Right) */}
                        <img
                            src={'/homescreen/homeCard/star.png'}
                            alt="Decorative Star"
                            className="absolute top-8 right-8 h-10 w-10  z-10"
                        />

                        {/* Decorative Star 2 (Bottom-Left) */}
                        <img
                            src={'/homescreen/homeCard/star.png'}
                            alt="Decorative Star"
                            className="absolute bottom-8 left-8 h-10 w-10  z-10"
                        />

                        {/* Content Wrapper */}
                        <div className="relative z-20 flex flex-col items-center justify-center">
                            {/* Top Subtitle */}


                            {/* Main Heading */}
                            <h1 className="text-white  leading-tight mb-8 mt-2 2xl:w-[900px]" style={{ }}>
                                {/* ⚡ Added mt-2 (margin-top: 2) to compensate slightly for mb-0 on p-tag */}
                                Accelerate Your Digital Business Transformation Journey with PragetX
                            </h1>

                            <p className="text-white text-lg  mb-0 font-light tracking-wide w-auto 2xl:w-[90%]" style={{  color: 'white', fontWeight: 600 }}>
                                {/* ⚡ KEY FIX: Changed mb-4 to mb-0 (margin-bottom: 0) to remove the gap */}
                                Being a Startup, we understand how important it is for a business to have the right technology and tools in place. Leverage us to be an essential part of your digital transformation journey and pave this initial phase of business growth TOGETHER!
                            </p>
                            {/* Get Started Button (Kept existing styling) */}
                            <Button
                                className="
                                mt-[30px]
                            relative
                            inline-flex items-center justify-center
                            px-12 py-4
                            rounded-full
                            overflow-hidden
                            group
                            transition-all duration-300 ease-out transform
                            hover:scale-105 active:scale-95
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white
                        "
                            >
                                {/* ... button spans (unchanged) ... */}
                                <span
                                    className="absolute inset-0 
                                bg-gradient-to-r from-gray-50 to-white 
                                transition-all duration-300 ease-out 
                                group-hover:opacity-0"
                                ></span>

                                <span
                                    className="absolute inset-0 
                                bg-gradient-to-r from-white to-gray-50 
                                opacity-0 group-hover:opacity-100 
                                transition-all duration-300 ease-out"
                                ></span>

                                {/* Text with gradient */}
                                <span
                                    className="relative z-10 text-xl font-bold 
                                bg-gradient-to-r from-[#3730A3] to-[#38BDF8] 
                                text-transparent bg-clip-text
                                transition-colors duration-300 ease-out"
                                >
                                    Join Us Today
                                </span>
                            </Button>
                        </div>
                    </div>
                </AnimationWrapper>

            </section>





            <TeamWork />

            <section className="py-0" style={{ paddingBottom: '0px' }}>
                <div className="text-center flex flex-col items-center justify-center gap-5">
                    <h2 className="font-[700] leading-[100%] tracking-normal"><span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#A856F7_0%,#6A5ACD_50%,#00A1E0_100%)]">Loved</span>{" "}by Our Happy Users</h2>
                    <p className="font-[500] text-[16px] text-center text-[#374151] leading-5 tracking-normal">Trusted by industry leaders, PragetX delivers innovative, agile product solutions.</p>
                    <div className="w-full">
                        <CompanyMarquee />
                    </div>
                </div>
            </section>




            <section className="  p-0">
                <AnimationWrapper>
                    <div
                        className="
                    container
                    relative
                    py-[100px] px-auto  // Vertical padding for inner content centering
                    rounded-[50px]
                    overflow-hidden  
                    text-center
                    my-box
                "
                        style={{
                            // Combine the dotted pattern and the gradient background
                            background: `
                        url(${'/homescreen/homeCard/dottedImg2.png'}) center/auto repeat, 
                        linear-gradient(91.69deg, #FF9A9E -0.03%, #4FACFE 99.97%)
                    `,
                        }}
                    >
                        {/* Decorative Star 1 (Top-Right) */}
                        <img
                            src={'/homescreen/homeCard/star.png'}
                            alt="Decorative Star"
                            className="absolute top-8 right-8 h-10 w-10  z-10"
                        />

                        {/* Decorative Star 2 (Bottom-Left) */}
                        <img
                            src={'/homescreen/homeCard/star.png'}
                            alt="Decorative Star"
                            className="absolute bottom-8 left-8 h-10 w-10  z-10"
                        />

                        <div className="relative z-20 flex flex-col items-center justify-center">
                            {/* Main Heading */}
                            <h1 className="text-white  leading-tight  mt-2 " style={{ fontSize: '50px' }}>
                                {/* ⚡ Added mt-2 (margin-top: 2) to compensate slightly for mb-0 on p-tag */}
                                We are your ideal partner to leverage emerging tech in innovative ways
                            </h1>
                            <Button
                                className="
                                mt-[30px]
                            relative
                            inline-flex items-center justify-center
                            px-12 py-4
                            rounded-full
                            overflow-hidden
                            group
                            transition-all duration-300 ease-out transform
                            hover:scale-105 active:scale-95
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white
                        "
                            >
                                {/* ... button spans (unchanged) ... */}
                                <span
                                    className="absolute inset-0 
                                bg-gradient-to-r from-gray-50 to-white 
                                transition-all duration-300 ease-out 
                                group-hover:opacity-0"
                                ></span>

                                <span
                                    className="absolute inset-0 
                                bg-gradient-to-r from-white to-gray-50 
                                opacity-0 group-hover:opacity-100 
                                transition-all duration-300 ease-out"
                                ></span>

                                {/* Text with gradient */}
                                <span
                                    className="relative z-10 text-xl font-bold 
                                bg-gradient-to-r from-[#3730A3] to-[#38BDF8] 
                                text-transparent bg-clip-text
                                transition-colors duration-300 ease-out"
                                >
                                    Join Us Today
                                </span>
                            </Button>
                        </div>
                    </div>
                </AnimationWrapper>
            </section>



            <section className="">
                <div className="container">
                    <h2 className="font-[700] leading-[100%] tracking-normal text-center ibm"><span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#A856F7_0%,#6A5ACD_50%,#00A1E0_100%)]">Loved</span>{" "} by Our Happy Users</h2>
                    <p className="font-[500] text-[16px] text-center text-[#374151] leading-5 tracking-normal px-auto mt-[20px]">Trusted by industry leaders, PragetX delivers innovative, agile product solutions.</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 justify-items-center gap-[20px] lg:gap-[30px] md:gap-[30px] items-start mt-[70px]">

                        {WorkInServicesData.map((item, index) => (
                            <div
                                key={index}
                                className="card rounded-[30px] bg-white overflow-hidden shadow-[0_0_8px_rgba(0,0,0,0.2)] flex flex-col
             transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,0,0,0.25)] hover:cursor-pointer"
                            >
                                {/* Top image section */}
                                <div className="relative w-full h-[230px] overflow-hidden rounded-t-[30px]">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                        height={10000}
                                        width={10000}
                                    />

                                    {/* Soft white blur hugging bottom curve */}
                                    <div className="absolute bottom-[-15px] left-0 w-full h-[70px] bg-white blur-[25px] opacity-70 z-[2]"></div>

                                    {/* Smooth circular bottom shape */}
                                    <svg
                                        viewBox="0 0 500 150"
                                        preserveAspectRatio="none"
                                        className="absolute bottom-[-2px] left-0 w-full h-[80px] z-[3]"
                                    >
                                        <path
                                            d="M0,100 C130,150 370,150 500,100 L500,150 L0,150 Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>

                                {/* Text content */}
                                <div className="flex flex-col px-6 py-[17px] min-h-[140px]">
                                    <h3
                                        className="font-[700] leading-tight text-transparent bg-clip-text bg-[linear-gradient(90deg,#A856F7_0%,#6A5ACD_50%,#00A1E0_100%)]"
                                        style={{ fontSize: "18px" }}
                                    >
                                        {item.title}
                                    </h3>
                                    <p
                                        className="mt-3 text-[#374151] font-[500] leading-[22px]"
                                        style={{ fontSize: "16px" }}
                                    >
                                        {item.subData}
                                    </p>
                                </div>
                            </div>

                        ))}

                    </div>
                </div>
            </section>


            <LetsTalk />
        </div>
    );
};

export default About;
