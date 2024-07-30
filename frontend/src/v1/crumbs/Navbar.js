
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose, faPhone } from '@fortawesome/free-solid-svg-icons'
import Image from '../Images/favicon.png'
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';


const Navbar = () => {
  const pathname = useLocation().pathname;
  const [trigger, setTrigger] = useState(false)

  const toggleTrigger = () => {
    setTrigger(!trigger)
  }

  const links = [
    { name: "Home", link: "/home" },
    { name: "About us", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Projects", link: "/projects" },
    { name: "Contact us", link: "/contact" }
  ]
  return (
    <div className='relative flex flex-col md:flex-row justify-between items-center py-5 md:px-10'>
      <Link className="flex flex-col justify-center items-center p-4 md:p-0 border-b-2 md:border-b-0" to="/">
        <img src={Image} alt="logo" className="circle-wrap w-[100px] h-[100px] rounded-full border-4 border-double border-cyan" />
        <h1 className='font-merriweather font-extrabold text-sm text-cyan'>IC Engineering Inc.</h1>
      </Link>
      <div className='flex flex-col gap-5'>
        <div className='flex flex-col md:flex-row justify-end items-center gap-3'>
          <p className='p-4 md:p-0 border-b-2 md:border-b-0'><FontAwesomeIcon icon={faPhone} className="text-cyan mr-2" />+1 (919) 271-0051</p>
          <Link to="/contact" className='bg-cyan px-3 py-1 rounded-full text-white'>contact us</Link>
        </div>
        <nav className="hidden md:flex flex-row gap-5 justify-center items-center">
          {links.map((link, index) => (
            <Link to={link.link} key={index} className={`${link.link === pathname ? "text-cyan border-b-2 border-cyan" : ""} capitalize font-medium hover:text-cyan transition-all`}>{link.name}</Link>
          ))}
        </nav>
        {trigger &&
          <nav className="md:hidden fixed top-0 right-0 px-12 pt-36 flex flex-col items-end gap-10 bg-white/80 z-10 h-screen">
            {links.map((link, index) => {
              return (
                <Link to={link.link} key={index} className={`${link.link === pathname && "text-cyan border-b-2 border-cyan"} capitalize hover:text-cyan transition-all`}>
                  {link.name}
                </Link>
              );
            })}
          </nav>
        }
      </div>
      <FontAwesomeIcon icon={trigger ? faClose : faBars} onClick={toggleTrigger} size="1x" className='md:hidden fixed top-5 right-5 bg-cyan rounded-full p-4 text-white z-20' />
    </div>
  );
}

export default Navbar;