import './ProjectCard.css';

function ProjectCard({ title="", subtitle="", descriptionArray=[], imgSrc="", link="" }) {
    return (
        <div className='m-4 ml-0 mt-0 py-4'>
            <div className='text-3xl md:text-4xl lg:text-4xl font-Pixel'>
                {title}
            </div>
            <div className='text-2xl md:text-2xl lg:text-3xl font-PixelBlock h-fit grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 w-full'>
                {subtitle}
            </div>
            
            <div className='text-sm md:text-sm lg:text-base font-sans '>
                <ul className='list-disc list-inside'>
                    {descriptionArray.map((description) => (
                        <li>{description} </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ProjectCard;