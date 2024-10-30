import React from 'react';
import Navbar from '../components/layout/Navbar';
import { Instagram, LinkedIn, X } from '@mui/icons-material';
import { Link } from 'react-router-dom';

// Import images directly
import AionyHaustImage from '../assets/images/content/profiles/aiony-haust-3TLl_97HNJo-unsplash.jpg';
import PrinceGuam from '../assets/images/content/profiles/bobo.jpg';
// import JoelJedi from '../assets/images/content/profiles/jake-nackos-IF9TK5Uy-KI-unsplash.jpg';

const profileData = [
    { 
        name: 'Fats-Cmd',
        img: AionyHaustImage,
        description: 'An amazing Front-End developer who designed this beautiful and creative website',
        socials: [
            { icon: <Instagram />, link: '#' },
            { icon: <X />, link: '#' },
            { icon: <LinkedIn />, link: '#' },
        ]
    },
    { 
        name: 'Prince Guam',
        img: PrinceGuam,
        description: 'Back-End and Technical Writer, CEO and founder of ANIQUOTE',
        socials: [
            { icon: <Instagram />, link: '#' },
            { icon: <X />, link: '#' },
            { icon: <LinkedIn />, link: '#' },
        ]
    },
    // { 
    //     name: 'Joel d. Jedi',
    //     img: JoelJedi,
    //     description: 'A lucrative graphics, UI/UX, Motion designer, designed this website',
    //     socials: [
    //         { icon: <Instagram />, link: '#' },
    //         { icon: <X />, link: '#' },
    //         { icon: <LinkedIn />, link: '#' },
    //     ]
    // }
];

const AboutPage = () => {
  return (
    <div className="relative bg-gray-900 w-full h-[200vh] font-sans">
      <Navbar />
      <div className="container max-w-7xl mx-auto px-4 md:pt-14 pt-3">
        <section className=" flex flex-col max-w-4xl mx-auto">
            {/* dexktop */}
          <h2 className="text-2xl text-white text-center flex justify-center items-center md:text-start pb-9">Meet The Team</h2>
          <div className="w-full flex flex-col md:flex md:flex-row items-center justify-center space-y-5 md:space-x-5">
            {profileData.map((data, index) => (
              <div key={index} className="w-64 h-[22rem] border border-gray-400 rounded-md">
                <div className="img-container relative h-[50%]">
                  <img src={data.img} alt={data.name} className="object-cover w-full h-full rounded-t-md" />
                </div>
                <div className="p-4">
                  <h3 className="text-white">{data.name}</h3>
                  <p className="text-gray-300 text-sm">{data.description}</p>
                </div>
                {/* Social Icons */}
                <div className="socials w-full justify-end flex items-center space-x-5 p-4">
                  {data.socials.map((social, i) => (
                    <Link key={i} to={social.link} className="text-white">
                      {social.icon}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div> 
    </div>
  );
};

export default AboutPage;
