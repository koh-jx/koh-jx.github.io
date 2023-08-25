import './Screen.css';
import TitlePage from '../TitlePage';
import StatusPage from '../StatusPage';
import ProjectsPage from '../ProjectsPage';

function Screen() {
    return (
        <>
            <div className='h-full w-full overflow-scroll no-scrollbar'>
                <section className="h-full w-full center" id="title">
                    <TitlePage />
                </section>

                <section className="min-h-full h-full w-full" id="about">
                    <StatusPage />
                </section>

                <section className="min-h-full w-full" id="projects">
                    <ProjectsPage />
                </section>

                {/* <section className="min-h-full w-full" id="Other projects">
                    
                </section> */}
            </div>
        </>
    );
}

export default Screen;