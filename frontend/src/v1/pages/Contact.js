import Navbar from "../crumbs/Navbar";
import Footer from "../crumbs/Footer";
import ContactImg from "../Images/contactImg.jpg";
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {

  const info = [
    {
      icon: faPhoneAlt,
      title: "Phone",
      description: "+1(919)271-0051",
    },
    {
      icon: faEnvelope,
      title: "Email",
      description: "info@icengineeringinc.com",
    },
    {
      icon: faMapMarkerAlt,
      title: "Address",
      description: "Raleigh NC, USA",
    },
  ]
  return (
    <div>
      <Navbar />
      <img src={ContactImg} alt="contact" className=" object-cover h-[480px] w-full" />
      <div className="container mx-auto px-10 py-16  flex flex-col gap-8 w-full">
        <section className="flex flex-col md:flex-row gap-8">
          <div className="w-full flex flex-col items-center justify-center gap-12 h-full">
            <p className="text-2xl text-justify text-cyan font-light px-2">Feel free to talk to our Business Department at any time. Please be patient while waiting for response.</p>
            <ul className="flex flex-col gap-6 items-start justify-center w-full">
              {info.map((item, index) => {
                return <li key={index} className="flex items-center gap-3">
                  <div className="w-[60px] h-[60px] bg-cyan rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={item.icon} size="2x" className="text-white" />
                  </div>
                  <h3 className="font-light text-xl italic">{item.description}</h3>
                </li>
              })}
            </ul>
          </div>

          <form action="" className="flex flex-col gap-8 w-full bg-cyan rounded-tl-[48px] rounded-br-[48px] items-center justify-center px-8 py-16">
            <input className="bg-white rounded-2xl p-5 w-full max-w-[560px] text-cyan" type="text" placeholder="Name*" required />
            <input className="bg-white rounded-2xl p-5 w-full max-w-[560px] text-cyan" type="email" placeholder="Email*" required />
            <textarea name="" id="" placeholder="Message*" className="bg-white rounded-2xl px-5 py-3 w-full max-w-[560px] h-48 text-cyan" required></textarea>
            <button className="border p-4 w-3/5 bg-cyan text-white uppercase text-[20px] font-bold rounded-full hover:bg-black/50">Submit</button>
          </form>



        </section>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.9216296321715!2d-78.73305652355555!3d35.75273097256416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89acf4be750513f3%3A0x4e704b07ff4cfd24!2s5409%20Dillard%20Dr%2C%20Raleigh%2C%20NC%2027606%2C%20USA!5e0!3m2!1sen!2sng!4v1722362222191!5m2!1sen!2sng"
          width="w-full"
          height="600"
          style={{
            border: "0",
            paddingTop: "32px",
          }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="IC Engineering Address"></iframe>
      </div >

      <Footer />
    </div >
  );
}

export default Contact;