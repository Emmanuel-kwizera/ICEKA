import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Team = () => {
  const team = [
    {
      id: 1,
      name: "Cedric Izabayo",
      role: "BSE Student",
      image: "https://mdbcdn.b-cdn.net/img/new/avatars/6.jpg",
    },
    {
      id: 2,
      name: "Emilly Imena",
      role: "BEL Student",
      image: "https://mdbcdn.b-cdn.net/img/new/avatars/8.jpg",
    },
    {
      id: 3,
      name: "Emmy Nshimiye",
      role: "BSE Student",
      image: "https://mdbcdn.b-cdn.net/img/new/avatars/15.jpg",
    },
    {
      id: 4,
      name: "Alice Murebwayire",
      role: "BEL Student",
      image: "https://placekitten.com/150/150", // Example placeholder image
    },
    {
      id: 5,
      name: "Emmanuel Kwizera",
      role: "BSE Student",
      image: "https://placekitten.com/150/150", // Example placeholder image
    },
  ];

  return (
    <div className="team-container">
        <NavBar />
    <div className="container my-10 mx-auto md:px-6">
      <section className="mb-32 text-center">
        <h2 className="mb-32 text-3xl font-bold">
          Meet the team
        </h2>

        <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12 lg:gap-y-24">
          {team.map((member) => (
            <div key={member.id} className="mb-24 md:mb-0">
              <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className="flex justify-center">
                  <div className="flex justify-center -mt-[75px]">
                    <img
                      src={member.image}
                      className="mx-auto rounded-full shadow-lg dark:shadow-black/20 w-[150px]"
                      alt="Avatar"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="mb-4 text-lg font-bold">{member.name}</h5>
                  <p className="mb-6">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
    <Footer/>
    </div>
  );
};

export default Team;
