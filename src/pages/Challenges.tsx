import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import image1 from "../assets/PXL_20231003_073850551.jpg";
import image3 from "../assets/PXL_20231024_111611733.jpg";
import image4 from "../assets/PXL_20231103_124330546.jpg";
import Kidmend from "../assets/Kidmend.jpeg";
const challenges = [
    {
        name: "Introduction",
        role: "Challenge 1",
        content:
            "Each member of the team should create a 30 seconds elevator pitch on what they're passionate about, why, and what they want to do to solve it as well as what htey bring to the team.",
        image: image1,
        link: "https://www.youtube.com/watch?v=mbd3kjy2t1o"
    },
    {
        name: "Discover Africa",
        role: "Challenge 2",
        content:
            "Choose an african community, and create a story about an african character through the lens of the lifestyle of that community. The goal is to tell the untold story of the continent.",
        image: "https://plus.unsplash.com/premium_photo-1679350312952-194ec48e276f?q=80&w=1783&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "https://docs.google.com/presentation/d/1_A0cXGDAhcWPSjxKSW6_AqkyoEKBZbAwTlYyMXweApo/edit?usp=sharing"
    },
    {
        name: "HELP-LAB",
        role: "Challenge 3",
        content:
            "Community engagement is striving towards improving the quality of life of a given community.",
        image: image3,
        link: "https://www.youtube.com/watch?v=Z-7NZQDh_q0"
    },
    {
        name: "Hunt for Treasure",
        role: "Challenge 4",
        content:
            "No thief, however skillful, can rob one of the knowledge, and that is why knowledge is the best and safest treasure to acquire.",
        image: image4,
        link:"https://docs.google.com/presentation/d/1gcDdHVZ68hlb6hbLl_BctdZvIrmUtqMZVT2U4PBvDXQ/edit?usp=sharing"
    },
    {
        name: "Launch Mission V2",
        role: "Challenge 5",
        content:
            "Based on your Think Tank's mission, the problem you have identified, and researched on. This is your opportunity to launch the solution to the problem identified",
        image: Kidmend,
        link: "https://docs.google.com/presentation/d/1j6nnqxFvX-NHaF5KvC8wt-SIJSaF2l80XPGs87iV4X8/edit?usp=sharing",
    },
];

const Challenges = () => {
    return (
        <div className="challenges-container">
            <Navbar />
            <section className="mb-20 text-center lg:text-left">
                <div className="py-12 md:px-6 md:px-12">
                    <div className="container mx-auto xl:px-32">
                        {challenges.map((challenge, index) => (
                            <div
                                key={index}
                                className="flex grid items-center lg:grid-cols-2 mb-8 lg:mb-10"
                            >
                                <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                                    <div className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[25px] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                                        <h2 className="mb-2 text-3xl font-bold text-primary dark:text-primary-400">
                                            {challenge.name}
                                        </h2>
                                        <p className="mb-4 font-semibold">
                                            {challenge.role}
                                        </p>
                                        <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                                            {challenge.content}
                                        </p>
                                    </div>
                                </div>
                                <div className="md:mb-12 lg:mb-0">
                                    <a href={challenge.link} target="_blank" rel="noopener noreferrer">
                                    <img
                                        src={challenge.image}
                                        className="lg:rotate-[6deg] w-full h-[400px] rounded-lg shadow-lg dark:shadow-black/20"
                                        alt={`image-${index}`}
                                    />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Challenges;