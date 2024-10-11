// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from "react";
import "./Header.scss";
import { useSelector } from "react-redux";
import TranslateOptions from "../TranslateOptions/TanslateOptions.jsx";

function Header() {
  // State to toggle the dropdown menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Reference for the dropdown menu

  // Function to handle menu toggle
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false); // Close the menu if clicked outside
      }
    };

    // Attach event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const languages = useSelector((store) => store.translateHome.languages);

  return (
    <div className="header">
      <div className="header__headContainer">
        <div className="header__headContainer__titleSite">Elven Dictionary</div>
      </div>
      <div className="header__HeadSide">
        <a
          className="header__HeadSide__nav-item-link"
          onClick={toggleMenu} // Add onClick event to toggle the dropdown
        >
          <img src="../src/assets/dotMenu.svg" alt="logOut" className="header__HeadSide__nav-item-link__iconLogOut" />
        </a>

        {/* Conditionally render the dropdown menu */}
        {isMenuOpen && (
          <ul className="header__HeadSide__dropdown-menu" ref={menuRef}>
            <li className="header__HeadSide__dropdown-menu__item">
              <div style={{ width: "5em" }}>{languages}:</div>
              <TranslateOptions />
            </li>
            <li className="header__HeadSide__dropdown-menu__item">Settings</li>
            <li className="header__HeadSide__dropdown-menu__item">Log out</li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Header;
