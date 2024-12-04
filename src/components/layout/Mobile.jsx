import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { WebhookOutlined, DescriptionOutlined, Home } from '@mui/icons-material';

const Mobile = ({ toggleMobile, ...searchProps }) => {
  const links = [
    { name: 'Home', icon: <Home />, path: '/' },
    { name: 'Api', icon: <WebhookOutlined />, path: '/api' },
    { name: 'About', icon: <DescriptionOutlined />, path: '/about' },
  ];

  // Define the animation variants for open and closed states
  const menuVariants = {
    open: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    closed: { x: '100%', opacity: 0, transition: { duration: 0.5} },
  };
  return (
    <motion.div
      initial="closed"
      animate="open"
      exit="closed"
      variants={menuVariants}
      className="fixed top-0 right-0 w-64 h-full bg-gray-50 text-black shadow-lg z-50 md:hidden flex-col"
    >
      <div className="flex justify-between p-5">
        <div
          className="relative p-5 w-9 h-9 hover:w-40 bg-gray-50 shadow-md rounded-full flex group items-center duration-300 md:hidden"
        >
          <div
            className="absolute right-[5px] top-[11px] m-auto w-6 h-6 fill-gray-400"
            onClick={searchProps.handleSearch}
          >
            {/* SVG Search Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
            >
              <path d="M18.9,16.776A10.539,10.539,0,1,0,16.776,18.9l5.1,5.1L24,21.88ZM10.5,18A7.5,7.5,0,1,1,18,10.5,7.507,7.507,0,0,1,10.5,18Z" />
            </svg>
          </div>
          <input
            value={searchProps.searchTerm}
            onChange={searchProps.handleSearchChange}
            onKeyDown={searchProps.handleKeyPress}
            placeholder="search quotes"
            type="text"
            className="outline-none text-sm bg-transparent w-full text-gray-500 font-normal px-4"
          />
        </div>
        <button onClick={toggleMobile}>
          <CloseIcon className="text-black" />
        </button>
      </div>

      <nav className="mt-10">
        <ul className="flex flex-col gap-6 pl-5">
          {links.map((link, index) => (
            <li key={index} className="text-lg font-medium">
              <Link to={link.path} onClick={toggleMobile} className="hover:text-blue-400 flex gap-3">
                {link.icon}
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to="/subscribe"
          className="absolute bottom-9 left-4 px-16 py-2 uppercase rounded-lg text-center font-medium text-white/80 bg-blue-500 hover:shadow-lg transition-all duration-500"
        >
          Subscribe
        </Link>
      </nav>
    </motion.div>
  );
};

export default Mobile;
