import './BackgroundPage.css';
import InfoCard from '../../components/InfoCard';

function BackgroundPage() {
    return (
        <div className='grid grid-rows-2 overflow-scroll no-scrollbar'>
            <div className='w-fit h-full m-4 text-2xl md:text-3xl lg:text-3xl'>
                <span className="underline">Education</span>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                    <InfoCard title="Hello" subtitle="job description" descriptionArray={["Performed this task for the good of the people ", 2, 3, 4]} />
                    {/* <InfoCard /> */}
                </div>
            </div>

            <div className='w-fit m-4 text-2xl md:text-3xl lg:text-3xl'>
                <span className="underline">Work Experience</span>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                    {/* <InfoCard />
                    <InfoCard /> */}
                </div>
            </div>
        </div>
    );
}

export default BackgroundPage;