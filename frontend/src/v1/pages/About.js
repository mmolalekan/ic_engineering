import React, { useState } from "react";
import Navbar from "../crumbs/Navbar";
import Footer from "../crumbs/Footer";
import About1 from "./../Images/about/about1.jpg";
import Khaled from './../Images/about/khaled.jpg';

const About = () => {

  const [mission, setMission] = useState(false);
  const [vision, setVision] = useState(true);
  const [values, setValues] = useState(false);

  const actiVateMissionTab = () => {
    setMission(true);
    setVision(false);
    setValues(false);
  }

  const actiVateVisionTab = () => {
    setVision(true);
    setMission(false);
    setValues(false);
  }

  const actiVateValuesTab = () => {
    setValues(true);
    setMission(false);
    setVision(false);
  }

  const options = [
    {
      text: "Our Mission",
      function: actiVateMissionTab,
      status: mission,
      writeUp: "To deploy optimal integrated engineering solutions to achieving timely, qualitative and cost-effective Infrastructural Planning, Design and Management for Public and Private sectors of the economy."
    },
    {
      text: "Our Vision",
      function: actiVateVisionTab,
      status: vision,
      writeUp: "IC Engineering Inc. aspires to be a state-of-the-art Engineering global outfit of first choice upholding international best practices for infrastructural service delivery."
    },
    {
      text: "Our Values",
      function: actiVateValuesTab,
      status: values,
      writeUp: "At IC Engineering, our foundation is built on core values of honesty, integrity, and client satisfaction. These principles are at the heart of our Business Principles, guiding our responsibilities to shareholders, customers, employees, business partners, and society at large. Complemented by our Professional Code of Conduct, they shape how we deliver excellence in every project we undertake."
    }
  ]

  return (
    <section>
      <Navbar />
      <div className="flex flex-col gap-[32px]">
        <div
          className="bg-gradient-to-b from-white via-transparent/50 to-white"
          style={{
            backgroundImage: `linear-gradient(to bottom, white, rgba(255, 255, 255, 0.5), white), url(${About1})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            // height: '100vh'
          }}
        >
          <div className="flex flex-col items-center gap-[24px] md:p-[16px]">
            <h1 className="text-cyan text-[36px] font-bold">About Us</h1>
            <p className="md:leading-[40px] text-black md:text-[20px] py-4 px-8 md:text-justify">IC Engineering began its journey in 1994, founded by Khaled Ali Al-zoubi with a visionary approach to address North America's infrastructure needs using cutting-edge technology. With over two decades of professional and academic expertise, Khaled established IC Engineering's early focus on telecommunications, specializing in antenna mount design and upgrades nationwide.
              <br /> <br /> As our reputation grew, so did our capabilities. We expanded into project management and real estate services, leveraging our expertise to coordinate a wide range of projects, from consultancy to construction. Our commitment to sustainable technology solutions has been a cornerstone of our projects for 3 decade.
              <br /> <br /> From our origins in North Carolina, IC Engineering's projects have spanned across the United States, from Texas to California and Illinois, and internationally in Turkey. Our growth is fueled not only by our diverse portfolio but also by the talented professionals who have joined our team, enriching our capabilities and expanding our reach in the engineering sector.
              <br /> <br /> Today, IC Engineering continues to lead with innovation, delivering quality infrastructure solutions that meet the evolving needs of our clients while maintaining our core values of honesty, integrity, and client satisfaction.</p>

            {/* quality statements */}
            <div className="h-96 bg-gradient-to-b from-transparent to-black/80 md:px-20 pt-5 pb-10 flex flex-col items-center justify-start">
              <div className="bg-black/60 rounded-[16px] p-[6px] flex flex-row gap-[8px] w-fit items-center text-[14px]">
                {options.map((option, index) => (
                  <span onClick={option.function} key={index} className={`cursor-pointer ${option.status ? "rounded-[12px] bg-cyan px-[14px] py-[10px] font-semibold text-white" : "rounded-[6px] px-[14px] py-[10px] font-semibold text-black/50"}`}>{option.text}</span>
                ))}
              </div>
              {options.map((option, index) => (
                <p key={index} className={`max-w-[800px] md:leading-[40px] text-white text-[15px] md:text-[20px] py-4 px-12 text-center ${option.status ? "" : "hidden"}`}>{option.writeUp}</p>
              ))}
            </div>
          </div>

          {/* CEO Section */}
          <div className="flex flex-col gap-8 py-4 px-6 md:px-12">
            <h2 className="text-cyan text-[24px] md:text-[36px] font-bold text-center uppercase">Message from the CEO</h2>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              <img src={Khaled} alt="" className="w-fit h-[360px] md:h-[480px] object-top rounded-t-full" />
              <p className=" text-black font-light py-4 max-w-[480px]">
                Welcome to IC Engineering Inc.,
                <br />
                Since 1994, IC Engineering has been at the forefront of engineering innovation, delivering quality solutions across North America. Our commitment to excellence and client satisfaction drives everything we do.
                <br /> <br /> From telecommunications to project management and real estate, we are dedicated to pushing boundaries and embracing sustainable practices. At IC Engineering, we are not just building structures; we are creating lasting partnerships and shaping the future of infrastructure.
                <br /> <br /> Thank you for trusting us with your projects. Together, let's continue to innovate and build a better tomorrow.
                <br /><br />
                <span className="text-cyan font-extrabold text-[20px]">Khaled Al-Zoubi</span>
                <br />
                <span className="text-cyan italic font-light text-[18px]">CEO, IC Engineering Inc.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default About;
