import './screen.css';
import Title from '../components/Title';
import Contents from '../components/Contents';

function Screen() {
    return (
        <div className='h-full w-full overflow-scroll no-scrollbar'>
            <section className="h-full w-full center" id="title">
                <div className="flex flex-wrap flex justify-center items-center">
                    <div className="w-full p-4 center"><Title /></div>
                    <div className="w-full p-4 pt-8 center"><Contents /></div>
                </div>
            </section>

            <section className="h-full w-full center" id="title">
                
            </section>

        </div>
    );
}

export default Screen;