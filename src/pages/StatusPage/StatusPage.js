import './StatusPage.css';
import PageTitle from '../../components/PageTitle';
import AboutMePage from '../AboutMePage';
import BackgroundPage from '../BackgroundPage';
import SkillsPage from '../SkillsPage';

import { Route, Routes, useNavigate, useLocation } from "react-router-dom"   
import { useEffect, useState } from 'react';

function StatusPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeSection, setActiveSection] = useState("character");

    useEffect(() => {
        const path = location.pathname;
        if (path === "/background") {
            setActiveSection("background");
        } else if (path === "/skills") {
            setActiveSection("skills");
        } else {
            setActiveSection("character")
        }
    }, [navigate, location]);

    return (
        <>
            <PageTitle name={"About Me"}/>
            <nav class="navbar mr-auto ml-8 mr-8 h-fit">
                <div class="max-w-screen-xl px-4 py-3">
                    <div class="flex items-center">
                        <ul class="grid grid-cols-2 gap-3 text-left items-left text-xl sm:text-xl md:text-2xl md:grid-cols-3 lg:text-2xl lg:grid-cols-3 font-PixelBlock">
                            <li>
                                <span className={"hover:underline" + (activeSection === "character" ? " selected": "")} onClick={() => navigate('/character')}>Character</span>                                
                            </li>
                            <li>
                                <span className={"hover:underline" + (activeSection === "background" ? " selected": "")} onClick={() => navigate('/background')}>Experience</span>
                            </li>
                            <li>
                                <span className={"hover:underline" + (activeSection === "skills" ? " selected": "")} onClick={() => navigate('/skills')}>Skills</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="window h-4/6 m-8 mt-2 overflow-scroll no-scrollbar">
                <Routes>
                    <Route path="/" element={<AboutMePage/>}/>
                    <Route path="/character" element={<AboutMePage/>}/>
                    <Route path="/background" element={<BackgroundPage/>}/>
                    <Route path="/skills" element={<SkillsPage/>}/>
                    <Route path="*" element={<AboutMePage/>} />
                </Routes>
            </div>
        </>
    );
}

export default StatusPage;