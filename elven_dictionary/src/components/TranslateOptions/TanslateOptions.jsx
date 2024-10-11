import "./TranslateOptions.scss";
import frenchFlag from "/src/assets/france.svg";
import englishFlag from "/src/assets/britain.svg";
import spanishFlag from "/src/assets/spain.svg";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setToFrench, setToEnglish, setToSpanish } from "../../store/translateHomeSlice";

function TranslateOptions() {
  // eslint-disable-next-line no-unused-vars
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleMouseEnter = (link) => {
    setHoveredLink(link);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  const dispatch = useDispatch();

  const handleFrenchClick = () => {
    dispatch(setToFrench());
  };

  const handleEnglishClick = () => {
    dispatch(setToEnglish());
  };

  const handleSpanishClick = () => {
    dispatch(setToSpanish());
  };

  return (
    <div className="languageContainer">
      <div
        className="languageContainer__languages"
        onClick={handleFrenchClick}
        onMouseEnter={() => handleMouseEnter("french")}
        onMouseLeave={handleMouseLeave}
      >
        <img src={frenchFlag} className="languageContainer__languages__flag" alt="French Flag" />
      </div>
      <div
        className="languageContainer__languages"
        onClick={handleEnglishClick}
        onMouseEnter={() => handleMouseEnter("english")}
        onMouseLeave={handleMouseLeave}
      >
        <img src={englishFlag} className="languageContainer__languages__flag" alt="English Flag" />
      </div>
      <div
        className="languageContainer__languages"
        onClick={handleSpanishClick}
        onMouseEnter={() => handleMouseEnter("spanish")}
        onMouseLeave={handleMouseLeave}
      >
        <img src={spanishFlag} className="languageContainer__languages__flag" alt="Spanish Flag" />
      </div>
    </div>
  );
}

export default TranslateOptions;
