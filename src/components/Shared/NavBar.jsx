import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthPrvider";
import Logo from "/vroombox.ico";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  // Logging out
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="max-w-screen-xl mx-auto  border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <img src={Logo} className="h-8 mr-3" alt="VroomBox logo" />
          <span className="self-center font-['Acme'] text-2xl font-semibold whitespace-nowrap">
            VroomBox
          </span>
        </Link>
        <div className="flex items-center md:order-2">
          <div className="flex items-center ml-3">
            {/* Conditioal Rendering  */}
            {user ? (
              <img
                src={
                  user?.photoURL ||
                  "https://cdn.pixabay.com/photo/2018/11/13/22/01/avatar-3814081_960_720.png"
                }
                className="w-8 h-8 rounded-full"
                alt={user?.displayName}
                title={user?.displayName}
              />
            ) : (
              <NavLink
                to="/login"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100"
                style={({ isActive }) => {
                  return { color: isActive ? "#ff385c" : "" };
                }}
              >
                Login
              </NavLink>
            )}
          </div>
          <button
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="mobile-menu-2"
            aria-expanded={isMobileMenuOpen ? "true" : "false"}
            onClick={handleMobileMenuToggle}
          >
            <span className="sr-only">Open main menu</span>
            <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMobileMenuOpen ? "" : "hidden"
          }`}
          id="mobile-menu-2"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-1 lg:space-x-8 md:mt-0 md:border-0 md:bg-white">
            <li>
              <NavLink
                to="/"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100"
                style={({ isActive }) => {
                  return { color: isActive ? "#ff385c" : "" };
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/toys"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100"
                style={({ isActive }) => {
                  return { color: isActive ? "#ff385c" : "" };
                }}
              >
                All Toys
              </NavLink>
            </li>
            {/* Conditional Rendering Prrivate Route  */}
            {user ? (
              <>
                {" "}
                <li>
                  <NavLink
                    to="/my-toys"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100"
                    style={({ isActive }) => {
                      return { color: isActive ? "#ff385c" : "" };
                    }}
                  >
                    My Toys
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/add-toy"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100"
                    style={({ isActive }) => {
                      return { color: isActive ? "#ff385c" : "" };
                    }}
                  >
                    Add A Toy
                  </NavLink>
                </li>
              </>
            ) : null}
            <li>
              <NavLink
                to="/blogs"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100"
                style={({ isActive }) => {
                  return { color: isActive ? "#ff385c" : "" };
                }}
              >
                Blogs
              </NavLink>
            </li>
            {/* login and regesteion conditionaly */}

            {user ? (
              <li
                onClick={handleLogOut}
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100"
              >
                Logout
              </li>
            ) : (
              <li>
                <NavLink
                  to="/register"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100"
                  style={({ isActive }) => {
                    return { color: isActive ? "#ff385c" : "" };
                  }}
                >
                  Regester
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
