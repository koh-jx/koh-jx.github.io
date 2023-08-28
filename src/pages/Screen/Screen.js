import './Screen.css';
import TitlePage from '../TitlePage';
import StatusPage from '../StatusPage';
import ProjectsPage from '../ProjectsPage';
import OtherWorkPage from '../OtherWorkPage';

function Screen() {
    return (
        <>
            <div className='h-full w-full overflow-scroll no-scrollbar'>
                <section className="h-full w-full center" id="title">
                    <TitlePage />
                </section>

                {/* <section className="min-h-full h-fit w-full" id="about"> */}
                <section className="min-h-full h-full w-full" id="about">
                    <StatusPage />
                </section>

                <section className="min-h-full h-fit w-full" id="projects">
                    <ProjectsPage />
                </section>

                <section className="min-h-full h-fit w-full" id="other-work">
                    <OtherWorkPage />
                </section>
            </div>
        </>
    );
}

export default Screen;