import './AboutMePage.css';

function AboutMePage() {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:m-2">
            <div className="row-span-2 col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-1 center">
                <img src="https://i.imgur.com/WTeFjhh.png" alt="portrait" className="mx-auto portrait h-4/5"/>
            </div>

            <div className="col-span-2 center text-base sm:text-base md:text-2xl lg:text-2xl m-5">
                {/* Text introducing me  */}
                <p>
                    Hi, I'm <span className="text-white">Koh Jia Xian</span>!
                    <br />
                    <br />
                    I love ideating and crafting fun applications. I am also very passionate about Graphic Design! In my free time, you can find my playing video games, drawing or bouldering!
                    {/* I am a <span className="text-white">final-year Computer Science</span> student at the <span className="text-white">National University of Singapore</span>, specialising in <span className="text-white">Graphics and Game Development</span> and <span className="text-white">Databases</span>.  */}
                    <br />
                    <br />
                    I am most interested in <span className="text-white">Full Stack Software Engineering</span> and <span className="text-white">Game Development roles</span>!
                </p>
            </div>
        </div>
    );
}

export default AboutMePage;