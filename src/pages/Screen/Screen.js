import './Screen.css';
import TitlePage from '../TitlePage';

function Screen() {
    return (
        <div className='h-full w-full overflow-scroll no-scrollbar'>
            <section className="h-full w-full center" id="title">
                <TitlePage />
            </section>

            <section className="h-full w-full center" id="about-me">
                
            </section>

        </div>
    );
}

export default Screen;