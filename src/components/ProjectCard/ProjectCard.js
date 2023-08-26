import './ProjectCard.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';

function ProjectCard({ title="", subtitle="", stack="", imgSrc="https://via.placeholder.com/250", link={} }) {

    const LINK_TO_ICON = {
        Github: <GitHubIcon />,
        Link: <LinkIcon />
    }

    return (
        <div className="min-w-fit h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className='relative group w-4/5 aspect-square'>
                <img src={imgSrc} alt='' className='object-cover w-full h-full picture' />            
            </div>

            <div className="col-span-1 text-base text-1xl m-2">
                <div className="font-Pixel text-3xl md:text-3xl lg:text-4xl underline">{title}</div>
                <div className="font-PixelBlock text-3xl md:text-1xl lg:text-3xl">{stack}</div>
                <div className="font-sans text-base">{subtitle}</div>
                {/* Row of button links  */}
                <div className="flex flex-row">
                    {Object.keys(link).map((key) => (
                        <div key={key} className="font-PixelBlock text-2xl sm:text-1xl md:text-1xl lg:text-2xl">
                            <a href={link[key]}  target="_blank" rel="noreferrer" className="button m-2 py-2 px-2 inline-flex items-center aspect-square">
                                {LINK_TO_ICON[key]}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;