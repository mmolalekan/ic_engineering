import Navbar from "../crumbs/Navbar";
import Footer from "../crumbs/Footer";

// images
import Image1 from '../Images/contact.jpg';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faHammer, faCompassDrafting, faCog } from '@fortawesome/free-solid-svg-icons';

const Services = () => {

  const services = [
    {
      icon: faCog,
      title: "Project Management",
      story: "We are available to assist clients achieve their desired construction goals by working with them through the planning, design and execution of construction of projects."
    },
    {
      icon: faCompassDrafting,
      title: "Structural Design",
      story: "We are available to assist clients achieve their desired construction goals by working with them through the planning, design and execution of construction of projects."
    },
    {
      icon: faHouse,
      title: "Real Estate",
      story: "We are available to assist clients achieve their desired construction goals by working with them through the planning, design and execution of construction of projects."
    },
    {
      icon: faHammer,
      title: "Design & Modifications",
      story: "We are available to assist clients achieve their desired construction goals by working with them through the planning, design and execution of construction of projects."
    },
  ];

  return (
    <div>
      <Navbar />
      <img src={Image1} alt="services" className="py-10 h-[480px] w-full object-cover" />
      <div className="container mx-auto px-4 py-10 flex flex-col xl:flex-row justify-center items-center gap-12">
        <section className="flex flex-col gap-10 w-full">
          {services.map((service, index) => (
            index < (services.length / 2) ?
              <div key={index} className="flex flex-row justify-center items-center gap-5">
                <div className="flex flex-col gap-5">
                  <h1 className="text-cyan font-semibold text-xl uppercase w-full text-end">{service.title}</h1>
                  <p className="w-full text-end">{service.story}</p>
                </div>
                <div className="p-5 border-2 rounded-3xl w-fit h-fit">
                  <FontAwesomeIcon icon={service.icon} size="2x" className="text-cyan" />
                </div>
              </div> : ""
          ))}
        </section>

        <section className="w-full flex flex-col items-center gap-10 pt-10 bg-cyan rounded-t-[70px]">
          <h1 className="text-4xl text-white">Services</h1>
          <img src={Image1} alt="services" className="rounded-t-full" />
        </section>

        <section className="w-full flex flex-col gap-10">
          {services.map((service, index) => (
            index >= (services.length / 2) ?
              <div key={index} className="flex flex-row justify-center items-center gap-5">
                <div className="p-5 border-2 rounded-3xl w-fit h-fit">
                  <FontAwesomeIcon icon={service.icon} size="2x" className="text-cyan" />
                </div>
                <div className="flex flex-col gap-5">
                  <h1 className="text-cyan font-semibold text-xl uppercase w-full text-start">{service.title}</h1>
                  <p className="w-full text-start">{service.story}</p>
                </div>
              </div> : ""
          ))}
        </section>

      </div>

      <Footer />
    </div>
  );
}

export default Services;