import './LinkBar.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

function LinkBar() {
    return (
        <div className="w-full grid grid-cols-3 h-full">
            <a href="https://github.com/koh-jx" target="_blank" rel="noopener noreferrer" className='center h-3/4'>
                <GitHubIcon style={
                    {
                        fontSize: '2rem',
                    }
                } />
            </a>
            <a href="https://www.linkedin.com/in/jxkoh/" target="_blank" rel="noopener noreferrer" className='center h-3/4'>
                <LinkedInIcon style={
                    {
                        fontSize: '2rem',
                    }
                } />
            </a>
            <a href="mailto:kohjx96@gmail.com" target="_blank" rel="noopener noreferrer" className='center h-3/4'>
                <EmailIcon style={
                    {
                        fontSize: '2rem',
                    }
                } />
            </a>            
        </div>
    );
}

export default LinkBar;