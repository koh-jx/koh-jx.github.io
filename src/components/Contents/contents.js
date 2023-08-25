import { useEffect, useState } from 'react';
import './Contents.css';
import { useNavigate } from "react-router-dom" 

function Contents() {
    const navigate = useNavigate();

    const scrollTo = (sectionId) => {
        const element = document.getElementById(sectionId);
        element.scrollIntoView({behavior: "smooth"});
    }

    // Cursor will be above one of the 4 options 0-3, 0 by default
    const [selected, setSelected] = useState(0);
    const updateSelected = (newSelected) => {
        setSelected(newSelected);
    }

    return (
        <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-12 pr-12 md:pr-20 lg-pr-36">
            <div className={selected === 0 && `selected-cursor`}></div>
            <div 
                className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-PixelBlock cursor-pointer col-span-2 pl-2"
                // Scroll to the about section
                onClick={() => {
                    scrollTo("about");
                    navigate('/character');
                }}
                onMouseEnter={() => updateSelected(0)}
                
            >
                About Me
            </div>
            <div className={selected === 1 && `selected-cursor`}></div>
            <div 
                className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-PixelBlock cursor-pointer col-span-2 pl-2"
                onClick={() => {
                    scrollTo("about")
                    navigate('/background');
                }}
                onMouseEnter={() => updateSelected(1)}
            >
                Experience
            </div>
            <div className={selected === 2 && `selected-cursor`}></div>
            <div 
                className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-PixelBlock cursor-pointer col-span-2 pl-2"
                // Scroll to the about section
                onClick={() => scrollTo("projects")}
                onMouseEnter={() => updateSelected(2)}
            >
                Projects
            </div>
            <div className={selected === 3 && `selected-cursor`}></div>
            <div 
                className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-PixelBlock cursor-pointer col-span-2 pl-2"
                // Scroll to the about section
                onClick={() => scrollTo("other-work")}
                onMouseEnter={() => updateSelected(3)}
            >
                Other work
            </div>
        </div>
    );
}

export default Contents;