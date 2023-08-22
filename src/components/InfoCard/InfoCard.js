import './InfoCard.css';

function InfoCard({ title="", subtitle="", date="", descriptionArray=[] }) {
    return (
        <div className='m-4 ml-0 mt-0'>
            <div className='text-4xl md:text-4xl lg:text-4xl font-PixelBlock'>
                {title}
            </div>
            <div className='text-2xl md:text-3xl lg:text-3xl font-PixelBlock'>
                {subtitle}
            </div>
            
            <div className='text-base md:text-base lg:text-base font-sans '>
                {descriptionArray.map((description) => (
                    <>
                        {description + '\n'}
                        <br/>
                    </>
                ))}
            </div>

            {/* TODO bullted list of descriptions */}
            {/* TODO date beside subtitle */}
        </div>
    );
}

export default InfoCard;