import './Contents.css';

function Contents() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-PixelBlock center">About Me</div>
            <div className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-PixelBlock center">Experiences</div>
            <div className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-PixelBlock center">Projects</div>
            <div className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-PixelBlock center">Other projects</div>
        </div>
    );
}

export default Contents;