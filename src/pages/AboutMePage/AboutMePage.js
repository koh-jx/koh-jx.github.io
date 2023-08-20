import './AboutMePage.css';
import PageTitle from '../../components/PageTitle';

function AboutMePage() {
    return (
        <>
            <PageTitle name={"About Me"}/>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:m-12">
                <div className="row-span-2 col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-1 center">
                    <img src="https://i.imgur.com/91vobZ9.png" alt="portrait" className="rounded-full mx-auto portrait h-4/5"/>
                </div>

                <div className="col-span-2 center text-base sm:text-1xl md:text-1xl lg:text-2xl m-5">
                    {/* Text introducing me  */}
                    <p>
                        Greetings, My name is <span className="text-white">Koh Jia Xian</span>!
                        <br />
                        <br />
                        I am a <span className="text-white">final-year Computer Science</span> student at the <span className="text-white">National University of Singapore</span>, specialising in <span className="text-white">Graphics and Game Development</span> and <span className="text-white">Databases</span>. 
                        <br />
                        <br />
                        I am most interested in Full Stack Software Engineering and Game Development roles!
                    </p>
                </div>

                <div className="col-span-2 center text-1xl sm:text-1xl md:text-3xl lg:text-3xl">
                    <p>
                        Feel free to reach out!
                    </p>
                </div>
            </div>
        </>
    );
}

export default AboutMePage;