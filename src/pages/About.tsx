import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Kidmend from "../assets/intro.jpg";

const About = () => {
  return (
    <div className="aboutPage">
      <NavBar />
      <section className="mt-4 mb-32">
        {/* Jumbotron */}
        <div className="container mx-auto text-center lg:text-left xl:px-32">
          <div className="flex grid items-center lg:grid-cols-2">
            <div className="mb-12 lg:mb-0">
              <div className="block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14 backdrop-blur-[30px]">
                <h3 className="mb-3 text-2xl font-bold">
                  We know how valuable your time is
                </h3>
                <h5 className="mb-12 text-lg font-bold text-primary dark:text-primary-400 lg:mb-10 xl:mb-12">
                  Let us share all about us and KIDMEND
                </h5>

                <p className="mb-4 font-bold">
                  Our Problem Statment
                </p>
                <p className="mb-6 text-gray-500 dark:text-neutral-300">
                According to the statistics of NRS, 17.2% of children live in the streets in Rwanda; how can placing them into foster families help obtain the health and safety of 10% of them by 2033.

                </p>

                <p className="mb-4 font-bold">
                  Our Solution
                </p>
                <p className="mb-6 text-gray-500 dark:text-neutral-300">
                Our solution is to put together resources so as to provide these children with basic needs like food, water, clothing and shelter where they will be put into families this will be possible  with the help of advocation. ,this program will take place with the collaboration with the already existing NGOs like UNICEF for a welfare of these children.
                </p>

                <p className="mb-4 font-bold">
                  Praesentium voluptatibus temporibus consequatur non
                  aspernatur?
                </p>
                <p className="text-gray-500 dark:text-neutral-300">
                  Minima sunt at nulla tenetur, numquam unde quod modi magnam ab
                  deserunt ipsam sint aliquid dolores libero repellendus
                  cupiditate mollitia quidem dolorem.
                </p>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1515658323406-25d61c141a6e?q=80&w=1909&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full rounded-lg shadow-lg dark:shadow-black/20"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* Jumbotron */}
      </section>
      <Footer />
    </div>
  );
};

export default About;
