import './Screen.css';
import TitlePage from '../TitlePage';
import AboutMePage from '../AboutMePage';

function Screen() {
    return (
        <div className='h-full w-full overflow-scroll no-scrollbar'>
            <section className="h-full w-full center" id="title">
                <TitlePage />
            </section>

            <section className="h-full w-full" id="about">
                <AboutMePage />
            </section>

            <section className="h-full w-full" id="experiences">
                <AboutMePage />
            </section>

            <section className="h-full w-full" id="projects">
                <AboutMePage />
            </section>
        </div>
    );
}

export default Screen;