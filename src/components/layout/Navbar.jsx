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
      <header className= {` w-full z-20 font-default flex items-center h-20 ${isScrolled ? 'bg-gray-900' : 'bg-transparent'} ${isScrolled ? 'fixed': 'relative'}  `}>
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
                className="w-[16em] px-8 bg-gray-100 py-3 rounded-full outline-none placeholder:text-gray-400 overflow-hidden placeholder:text-lg"
                placeholder="Search quotes"
              />
              <span onClick={handleSearch} className="absolute bottom-[12px] left-1 cursor-pointer">
                {/* Search icon */}
                <SearchSharp className=' text-gray-400 ' />
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
              className="px-6 py-2 rounded-full font-bold text-white transition-all duration-500 hover:scale-105 bg-blue-600"
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