import './LinkBar.css';

function LinkBar() {
    return (
        <div className="w-full grid grid-cols-3 h-full">
            <a href="https://github.com/koh-jx" target="_blank" rel="noopener noreferrer" className='center h-2/4'>
                <img src="./pixel/github-pixel.png" alt="github" className="h-3/4"/>
            </a>
            <a href="https://www.linkedin.com/in/jxkoh/" target="_blank" rel="noopener noreferrer" className='center h-2/4'>
                <img src="./pixel/linkedin-pixel.png" alt="github" className="h-3/4"/>
            </a>
            <a href="mailto:kohjx96@gmail.com" target="_blank" rel="noopener noreferrer" className='center h-2/4'>
                <img src="./pixel/email-pixel.png" alt="github" className="h-3/4"/>
            </a>            
        </div>
    );
}

export default LinkBar;