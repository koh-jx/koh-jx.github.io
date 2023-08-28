import { useEffect, useState, useRef, useCallback } from 'react';
import './Contents.css';
import { useNavigate } from "react-router-dom" 
import useOnScreen from './UseOnScreen';

function Contents() {
    const navigate = useNavigate();
    const elementRef = useRef(null);
    const isOnScreen = useOnScreen(elementRef);

    const scrollTo = (sectionId) => {
        const element = document.getElementById(sectionId);
        element.scrollIntoView({behavior: "smooth"});
    }


    // Cursor will be above one of the 4 options 0-3, 0 by default
    const [selected, setSelected] = useState(0);
    const updateSelected = (newSelected) => {
        setSelected(newSelected);
    }

    const playAudio = useCallback(() => {
        const audio = new Audio("/mixkit-game-click-1114.wav");
        audio.volume = 0.5;
        audio.play();
    }, []);

    // UseEffect to update selected option whenever user presses left or right arrow keys, or navigate on enter
    useEffect(() => {
        // Audio retrieved from https://mixkit.co/free-sound-effects/click/ under the Mixkit license

        const handleKeyDown = (event) => {
            if (!isOnScreen) return;
            if (event.key === "ArrowLeft") {
                if (selected === 0) {
                } else {
                    updateSelected(selected - 1);
                    playAudio();
                }
            } else if (event.key === "ArrowRight") {
                if (selected === 3) {
                } else {
                    updateSelected(selected + 1);
                    playAudio();
                }
            } else if (event.key === "Enter") {
                playAudio();
                if (selected === 0) {
                    scrollTo("about");
                    navigate('/character');
                } else if (selected === 1) {
                    scrollTo("about");
                    navigate('/background');
                } else if (selected === 2) {
                    scrollTo("projects");
                } else if (selected === 3) {
                    scrollTo("other-work");
                }
            }
        }
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, [selected, navigate, isOnScreen, playAudio]);

    return (
        <div ref={elementRef} className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-12 pr-12 md:pr-20 lg-pr-36">
            <div className={selected === 0 ? `selected-cursor` : undefined}></div>
            <div 
                className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-PixelBlock cursor-pointer col-span-2 pl-2"
                // Scroll to the about section
                onClick={() => {
                    playAudio();
                    scrollTo("about");
                    navigate('/character');
                }}
                onMouseEnter={() => updateSelected(0)}
                
            >
                About Me
            </div>
            <div className={selected === 1 ? `selected-cursor`: undefined}></div>
            <div 
                className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-PixelBlock cursor-pointer col-span-2 pl-2"
                onClick={() => {
                    playAudio();
                    scrollTo("about")
                    navigate('/background');
                }}
                onMouseEnter={() => updateSelected(1)}
            >
                Experience
            </div>
            <div className={selected === 2 ? `selected-cursor`: undefined}></div>
            <div 
                className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-PixelBlock cursor-pointer col-span-2 pl-2"
                // Scroll to the about section
                onClick={() => {
                    playAudio();
                    scrollTo("projects");
                }}
                onMouseEnter={() => updateSelected(2)}
            >
                Projects
            </div>
            <div className={selected === 3 ? `selected-cursor` : undefined}></div>
            <div 
                className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-PixelBlock cursor-pointer col-span-2 pl-2"
                // Scroll to the about section
                onClick={() => {
                    playAudio();
                    scrollTo("other-work");
                }}
                onMouseEnter={() => updateSelected(3)}
            >
                Other work
            </div>
        </div>
    );
}

export default Contents;