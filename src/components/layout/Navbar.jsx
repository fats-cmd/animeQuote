import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Corrected useNavigate
import Logo from '../Logo';
import { WebhookOutlined, DescriptionOutlined, Home, Menu,SearchSharp } from '@mui/icons-material';
import Mobile from './Mobile';
import ScrollContext from '../context/ScrollContext';

const links = [
  { name: 'Home', icon: <Home />, path: '/' },
  { name: 'Api', icon: <WebhookOutlined />, path: '/api' },
  { name: 'About', icon: <DescriptionOutlined />, path: '/about' }
];

const Navbar = () => {
  const { isScrolled } = useContext(ScrollContext);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); // Corrected useNavigate usage

  // Search logic
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      navigate(`/search?query=${searchTerm}`); 
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const toggleMobile = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <header className={` w-full z-20 font-default flex items-center h-20 ${isScrolled ? 'bg-gray-800' : 'bg-transparent'} ${isScrolled ? 'fixed': 'relative'}  `}>
        <nav className=" container max-w-7xl mx-auto px-4 flex items-center justify-between">
          <Logo />
          <div className="relative">
             {/* Mobile hamburger menu */}
             <button  onClick={toggleMobile} type="button" className='md:hidden flex'>
              <Menu className='w-36 h-16 text-white' />
            </button>
            {/* Desktop view content */}
          <div className="hidden md:flex md:items-center md:space-x-9 md:w-full md:justify-end">
            {/* Search bar */}
            <div className="relative">
              <input
                value={searchTerm}
                onChange={handleSearchChange}
                onKeyDown={handleKeyPress}
                type="text"
                className="w-[24em] px-8 bg-gray-100 py-3 rounded-full outline-none placeholder:text-gray-400 overflow-hidden placeholder:text-lg"
                placeholder="Search..."
              />
              <span onClick={handleSearch} className="absolute bottom-[16px] left-2 cursor-pointer">
                {/* Search icon */}
                <svg className=' fill-gray-300' width="17" height="17" viewBox="0 0 18 18" fill="" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="#323232" />
                </svg>
              </span>
            </div>
            {/* Navigation links */}
            <nav className="relative">
              <ul className="flex items-center space-x-7">
                {links.map((link, index) => (
                  <li key={index} className="group text-white font-medium">
                    <Link to={link.path} className="flex items-center gap-1">
                      {link.icon}
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <Link
              to='/subscribe'
              className="px-6 py-2 rounded-full text-white/80 border hover:text-white border-white/80 transition-all duration-500 hover:bg-blue-500"
            >
              Subscribe
            </Link>
          </div>
          </div>
        </nav>
      </header>
      {isOpen &&  
        <Mobile searchTerm={searchTerm}
          handleSearchChange={handleSearchChange}
          handleKeyPress={handleKeyPress}
          handleSearch={handleSearch} toggleMobile={toggleMobile}
        />
      }
    </>
  )
}

export default Navbar;