import Image from "next/image";
import Marquee from "react-fast-marquee";
import "./company-marquee.css";

export const data = [
    {
        id: 1,
        name: "Zen Coast University",
        image: "/project-logo/zen-coast-niversity.png",
    },
    {
        id: 2,
        name: "NaWee Courier",
        image: "/project-logo/nawee-courier.png",
    },
    {
        id: 3,
        name: "Folo App",
        image: "/project-logo/folo-app.png",
    },
    {
        id: 4,
        name: "ELC Tutoring",
        image: "/project-logo/elc-tutoring.png",
    },
    {
        id: 5,
        name: "Hungry Veels",
        image: "/project-logo/hungry-veels.png",
    },
    {
        id: 6,
        name: "J1click",
        image: "/project-logo/j1-click.png",
    },
    {
        id: 7,
        name: "Familyhives",
        image: "/project-logo/family-hives.png",
    },
    {
        id: 8,
        name: "Theintegrated",
        image: "/project-logo/the-integrated.jpg",
    },
    {
        id: 9,
        name: "Red Fox Web",
        image: "/project-logo/red-fox-web.jpg",
    },
    {
        id: 10,
        name: "Villagio",
        image: "/project-logo/villagio.png",
        width: 1000,
    },
    {
        id: 11,
        name: "Auyuvani",
        image: "/project-logo/auyuvani.png",
        width: 1000,
    },
    {
        id: 12,
        name: "SchoolOwls",
        image: "/project-logo/school-owls.png",
        width: 1000,
    },
    {
        id: 13,
        name: "UrNest",
        image: "/project-logo/ur-nest.png",
        width: 1000,
    },
    {
        id: 14,
        name: "NeoGrowth",
        image: "/project-logo/neo-growth.png",
        width: 1000,
    },
    {
        id: 15,
        name: "Fluke",
        image: "/project-logo/fluke.png",
        width: 1000,
    },
    {
        id: 16,
        name: "Ultrapawz",
        image: "/project-logo/ultrapawz.png",
    },
    {
        id: 17,
        name: "Nepal Government App",
        image: "/project-logo/nepal-government-app.png",
    },
    {
        id: 18,
        name: "Zip42lap",
        image: "/project-logo/zip-42-lap.png",
        width: 1000,
    },
    {
        id: 19,
        name: "Empyreal Infotech",
        image: "/project-logo/empyreal-infotech.svg",
        width: 1000,
    },
    {
        id: 20,
        name: "Wooqer",
        image: "/project-logo/wooqer.jpg",
        width: 1000,
    },
    {
        id: 21,
        name: "Geekyants",
        image: "/project-logo/geekyants.svg",
    },
    {
        id: 22,
        name: "Sysberries",
        image: "/project-logo/sysberries.png",
        width: 1000,
    },
    {
        id: 23,
        name: "Fingent",
        image: "/project-logo/fingent.webp",
        width: 1000,
    },
    {
        id: 24,
        name: "Supersourcing",
        image: "/project-logo/super-sourcing.svg",
        width: 1000,
    },
    {
        id: 25,
        name: "Altum",
        image: "/project-logo/altum.jpg",
        width: 1000,
    },
    {
        id: 26,
        name: "Cognitix",
        image: "/project-logo/cognitix.png",
        width: 1000,
    },
    {
        id: 27,
        name: "Softude",
        image: "/project-logo/softude.svg",
        width: 1000,
    },
    {
        id: 28,
        name: "Nisarg Rachna",
        image: "/project-logo/nisarg-rachna.png",
        width: 1000,
    },
]


const CompanyMarquee = ({ className }) => {
    return (
        <section className={className}>
            <div className="flex justify-center">
                <div className="w-full overflow-hidden">
                    <Marquee gradient={false} speed={50} pauseOnHover={true}>
                        {data?.map((d) => (
                            <div className="flex items-center justify-center mx-7 marquee-item" key={d?.id}>
                                <div className="h-10 custom-max-height filter grayscale marquee-image">
                                    <Image
                                        src={d?.image}
                                        alt={d?.name}
                                        title={d?.name}
                                        height={d?.height ?? 100}
                                        width={d?.width ?? 100}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    );
}

export default CompanyMarquee