import React, { useState } from 'react';
import Logo from '/vroombox.ico';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const menuItems = [
    { title: 'Home', link: '/' },
    { title: 'All Toys', link: '/toys' },
    { title: 'My Toys', link: '/my-toys' },
    { title: 'Add A Toy', link: '/add-toy' },
    { title: 'Blogs', link: '/blogs' },
    { title: 'Login', link: '/login' },
];

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="max-w-screen-xl mx-auto  border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center">
                    <img src={Logo} className="h-8 mr-3" alt="VroomBox logo" />
                    <span className="self-center font-['Acme'] text-2xl font-semibold whitespace-nowrap">VroomBox</span>
                </Link>
                <div className="flex items-center md:order-2">
                    <div className="flex items-center ml-3">
                        <img
                            src={Logo}
                            className="w-8 h-8 rounded-full"
                            alt="User Profile"
                        />
                    </div>
                    <button
                        type="button"
                        className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="mobile-menu-2"
                        aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
                        onClick={handleMobileMenuToggle}
                    >
                        <span className="sr-only">Open main menu</span>
                        <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
                    </button>

                </div>
                <div
                    className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMobileMenuOpen ? '' : 'hidden'
                        }`}
                    id="mobile-menu-2"
                >
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-1 lg:space-x-8 md:mt-0 md:border-0 md:bg-white">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <NavLink
                                    to={item.link}
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100"
                                    style={({ isActive }) => {
                                        return { color: isActive ? "#ff385c" : "" };
                                    }}
                                >
                                    {item.title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
