import './Contents.css';
import { useNavigate } from "react-router-dom" 

function Contents() {
    const navigate = useNavigate();

    const scrollTo = (sectionId) => {
        const element = document.getElementById(sectionId);
        element.scrollIntoView({behavior: "smooth"});
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div 
                className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-PixelBlock center hover:underline cursor-pointer"
                // Scroll to the about section
                onClick={() => {
                    scrollTo("about");
                    navigate('/character');
                }}
            >
                About Me
            </div>
            <div 
                className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-PixelBlock center hover:underline cursor-pointer"
                onClick={() => {
                    scrollTo("about")
                    navigate('/background');
                }}
            >
                Experience
            </div>
            <div 
                className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-PixelBlock center hover:underline cursor-pointer"
                // Scroll to the about section
                onClick={() => scrollTo("projects")}
            >
                Projects
            </div>
            <div 
                className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-PixelBlock center hover:underline cursor-pointer"
                // Scroll to the about section
                onClick={() => scrollTo("other-work")}
            >
                Other work
            </div>
        </div>
    );
}

export default Contents;