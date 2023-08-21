import './StatusPage.css';
import PageTitle from '../../components/PageTitle';
import AboutMePage from '../AboutMePage/AboutMePage';

function StatusPage() {
    return (
        <>
            <PageTitle name={"About Me"}/>
            <nav class="navbar mr-auto ml-8">
                <div class="max-w-screen-xl px-4 py-3">
                    <div class="flex items-center">
                        <ul class="flex flex-row flex-wrap mt-0 space-x-8 text-xl sm: text-xl md:text-2xl lg:text-2xl ">
                            <li>
                                <a href="#" class="hover:underline font-PixelBlock">Character</a>
                            </li>
                            <li>
                                <a href="#" class="hover:underline font-PixelBlock">Background</a>
                            </li>
                            <li>
                                <a href="#" class="hover:underline font-PixelBlock">Skills</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="window m-8 mt-2">
                <AboutMePage/>
            </div>
        </>
    );
}

export default StatusPage;