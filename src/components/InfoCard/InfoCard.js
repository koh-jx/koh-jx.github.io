import './InfoCard.css';

function InfoCard({ title="", subtitle="", date="", descriptionArray=[] }) {
    return (
        <div className='m-4 ml-0 mt-0 py-4 md:pl-8 lg:pl-8'>
            <div className='text-xl md:text-4xl lg:text-4xl font-Pixel'>
                {title}
            </div>
            <div className='text-base md:text-2xl lg:text-3xl font-PixelBlock md:lg:font-bold h-fit grid grid-cols-1 lg:grid-cols-2 w-full'>
                {subtitle}
                <span>{date}</span><br/>
            </div>
            
            <div className='text-sm md:lg:text-xl font-PixelBlock description'>
                <ul className='list-disc list-inside'>
                    {descriptionArray.map((description, i) => (
                        <li key={i}>{description} </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default InfoCard;