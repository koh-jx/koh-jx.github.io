import './StatusPage.css';
import PageTitle from '../../components/PageTitle';
import AboutMePage from '../AboutMePage/AboutMePage';

import { Route, Routes } from "react-router-dom"

function StatusPage() {
    return (
        <>
            <PageTitle name={"About Me"}/>
            <nav class="navbar mr-auto ml-8 mr-8">
                <div class="max-w-screen-xl px-4 py-3">
                    <div class="flex items-center">
                        <ul class="grid grid-cols-2 gap-3 text-left items-left text-xl sm:text-xl md:text-2xl md:grid-cols-3 lg:text-2xl lg:grid-cols-3">
                            <li>
                                <span class="hover:underline font-PixelBlock">Character</span>
                            </li>
                            <li>
                                <span class="hover:underline font-PixelBlock">Background</span>
                            </li>
                            <li>
                                <span class="hover:underline font-PixelBlock">Skills</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="window m-8 mt-2">
                <Routes>
                    <Route path="/" element={<AboutMePage/>}/>
                    <Route path="/character" element={<AboutMePage/>}/>
                    <Route path="/background" element={<AboutMePage/>}/>
                    <Route path="/skills" element={<AboutMePage/>}/>
                    <Route path="*" element={<AboutMePage/>} />
                </Routes>
            </div>
        </>
    );
}

export default StatusPage;