
import Logo from '/toyfinity.ico';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const menus = [
    {
      title: 'Resources',
      links: [
        { label: 'React Router', url: 'https://reactrouter.com/' },
        { label: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
      ],
    },
    {
      title: 'Follow us',
      links: [
        { label: 'Github', url: 'https://github.com/Shahariarshanto' },
        { label: 'Facebook', url: 'https://www.facebook.com/SheikhShahariarShanto' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', url: '#' },
        { label: 'Terms & Conditions', url: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img
                src={Logo}
                className="h-8 mr-3"
                alt="FlowBite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Toyfinity
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {menus.map((menu, index) => (
              <div key={index}>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                  {menu.title}
                </h2>
                <ul className="text-gray-600 font-medium">
                  {menu.links.map((link, index) => (
                    <li key={index} className="mb-4">
                      <Link to={link.url} className="hover:underline">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="text-center">
          <span className="text-sm text-gray-800">
            © 2023{' '}
            <Link to="/" className="hover:underline">
            Toyfinity™
            </Link>
            . All Rights Reserved.
          </span>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
