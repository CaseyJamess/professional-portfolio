import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const BottomNavigation = ({ sectionIds }) => {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

  const handlePrevSection = () => {
    setActiveSectionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextSection = () => {
    setActiveSectionIndex((prevIndex) => Math.min(prevIndex + 1, sectionIds.length - 1));
  };

  return (
    <nav className="bottom-navigation">
      <div className="bottom-navigation-links">
        {sectionIds.map((sectionId, index) => (
          <Link
            key={sectionId}
            to={sectionId}
            smooth
            duration={500}
            spy
            offset={-50} // Adjust the offset as needed
            active={activeSectionIndex === index}
            onClick={() => setActiveSectionIndex(index)}
          >
            {/* Render the section title or an icon */}
            Section {index + 1}
          </Link>
        ))}
      </div>

      <div className="bottom-navigation-arrows">
        <button
          className="bottom-navigation-arrow"
          onClick={handlePrevSection}
          disabled={activeSectionIndex === 0}
        >
          <FaChevronLeft />
        </button>
        <button
          className="bottom-navigation-arrow"
          onClick={handleNextSection}
          disabled={activeSectionIndex === sectionIds.length - 1}
        >
          <FaChevronRight />
        </button>
      </div>
    </nav>
  );
};

export default BottomNavigation;
