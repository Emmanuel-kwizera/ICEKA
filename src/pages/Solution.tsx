import React from "react";
import Kidmend from "../assets/Kidmend.jpeg";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const solutionsData = [
  {
    projectName: "KIDMEND",
    imageUrl: Kidmend,
    description:
      "Our solution involves coordinating with NGOs like UNICEF to provide basic needs to children, including food, water, clothing, and shelter, fostering family formation.",
    link: "https://docs.google.com/presentation/d/1j6nnqxFvX-NHaF5KvC8wt-SIJSaF2l80XPGs87iV4X8/edit?usp=sharing",
  },
];

const Solution = () => {
  return (
    <div>
    < NavBar/>
    <div className="container my-14 mx-auto md:px-6">
      {solutionsData.map((solution, index) => (
        <section key={index} className="mb-16 text-center md:text-left">
          <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div className="flex flex-wrap items-center">
              <div className="block w-full shrink-0 grow-0 basis-auto md:w-5/12 lg:flex">
                <img
                  src={solution.imageUrl}
                  alt={`Project: ${solution.projectName}`}
                  className="w-full h-auto md:w-full rounded-t-lg md:rounded-tr-none md:rounded-bl-lg"
                />
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto md:w-7/12">
                <div className="px-6 py-12 md:px-12">
                  <h2 className="mb-6 text-3xl font-bold">
                    <span className="text-[#d6d2b7] dark:text-danger-500">
                      "{solution.projectName}"
                    </span>{" "}
                    project
                  </h2>
                  <p className="mb-6 pb-2 text-neutral-500 dark:text-neutral-300">
                    {solution.description}
                  </p>
                  <a href={solution.link} target="_blank" rel="noopener noreferrer">
                  <button
                    type="button"
                    className="inline-block rounded-full bg-[#00000] px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#d6d2b7] transition duration-150 ease-in-out "
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Learn more
                  </button>

                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

    </div>
      <Footer />

    </div>
  );
};

export default Solution;
