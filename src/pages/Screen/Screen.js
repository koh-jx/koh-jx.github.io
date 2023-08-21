import './Screen.css';
import TitlePage from '../TitlePage';
import AboutMePage from '../AboutMePage';
import StatusPage from '../StatusPage';

function Screen() {
    return (
        <div className='h-full w-full overflow-scroll no-scrollbar'>
            <section className="h-full w-full center" id="title">
                <TitlePage />
            </section>

            <section className="min-h-full w-full" id="about">
                <StatusPage />
            </section>

            {/* <section className="min-h-full w-full" id="experiences">
                
            </section>

            <section className="min-h-full w-full" id="projects">
                
            </section> */}
        </div>
    );
}

export default Screen;