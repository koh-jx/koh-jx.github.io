import './InfoCard.css';

function InfoCard({ title="", subtitle="", date="", descriptionArray=[] }) {
    return (
        <div className='m-4 ml-0 mt-0 py-4 lg:w-4/6'>
            <div className='text-3xl md:text-4xl lg:text-4xl font-Pixel'>
                {title}
            </div>
            <div className='text-2xl md:text-2xl lg:text-2xl font-PixelBlock h-fit grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
                {subtitle}
                <span className='pr-8'>{date}</span>
            </div>
            
            <div className='text-base md:text-base lg:text-base font-sans '>
                <ul className='list-disc list-inside'>
                    {descriptionArray.map((description) => (
                        <li>{description} </li>
                    ))}
                </ul>
            </div>

            {/* TODO bullted list of descriptions */}
            {/* TODO date beside subtitle */}
        </div>
    );
}

export default InfoCard;