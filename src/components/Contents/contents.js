import './contents.css';

function Contents() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-1xl sm:text-1xl md:text-3xl lg:text-3xl font-Pixel center">About Me</div>
            <div className="text-1xl sm:text-1xl md:text-3xl lg:text-3xl font-Pixel center">Experiences</div>
            <div className="text-1xl sm:text-1xl md:text-3xl lg:text-3xl font-Pixel center">Projects</div>
            <div className="text-1xl sm:text-1xl md:text-3xl lg:text-3xl font-Pixel center">Other projects</div>
        </div>
    );
}

export default Contents;