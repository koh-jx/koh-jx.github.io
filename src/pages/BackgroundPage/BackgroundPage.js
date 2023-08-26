import './BackgroundPage.css';
import InfoCard from '../../components/InfoCard';
import { EDUCATION, WORK_EXPERIENCE } from '../../common/info';

function BackgroundPage() {
    return (
        <div className='overflow-scroll no-scrollbar'>
            <div className='w-full h-fit m-4 text-3xl md:text-4xl lg:text-4xl'>
                <span className="underline">Education</span>
                <div className='grid grid-cols-1'>
                    {EDUCATION.map((info) => (
                        <InfoCard key={info.title} title={info.title} subtitle={info.subtitle} date={info.date} descriptionArray={info.descriptionArray} />
                    ))}
                </div>
            </div>

            <div className='w-fit h-fit m-4 text-2xl md:text-3xl lg:text-3xl'>
                <span className="underline">Work Experience</span>
                <div className='grid grid-cols-1'>
                    {WORK_EXPERIENCE.map((info) => (
                        <InfoCard key={info.title} title={info.title} subtitle={info.subtitle} date={info.date} descriptionArray={info.descriptionArray} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BackgroundPage;