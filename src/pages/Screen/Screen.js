import './Screen.css';
import TitlePage from '../TitlePage';
import StatusPage from '../StatusPage';
import ProjectsPage from '../ProjectsPage';
import OtherWorkPage from '../OtherWorkPage';
import { useState, useEffect } from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

function ScrollToTop() {
    const goToTop = () => {
        const element = document.getElementById("title");
        element.scrollIntoView({behavior: "smooth"});
    }
    return (
        <div className="top-to-btm" onClick={goToTop}>
            <ArrowUpwardIcon className="icon-position icon-style" style={{
                fontSize: 40,
                
            }}/>
        </div>
    );
}

function Screen() {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const handleScroll = (e) => {
        const top = e.target.scrollTop === 0;
        setShowTopBtn(!top);
    }

    return (
        <>
            <div className='h-full w-full overflow-scroll no-scrollbar' onScroll={handleScroll}>
                <section className="h-full w-full center" id="title">
                    <TitlePage />
                </section>

                {/* <section className="min-h-full h-fit w-full" id="about"> */}
                <section className="min-h-full h-full w-full" id="about">
                    <StatusPage />
                </section>

                { showTopBtn && <ScrollToTop /> }

                <section className="min-h-full h-fit w-full" id="projects">
                    <ProjectsPage />
                </section>

                <section className="min-h-full h-full w-full" id="other-work">
                    <OtherWorkPage />
                </section>
            </div>
        </>
    );
}

export default Screen;