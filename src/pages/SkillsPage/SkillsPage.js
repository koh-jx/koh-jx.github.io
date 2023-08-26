import './SkillsPage.css';
import SkillCard from '../../components/SkillCard';
import { SKILLS } from '../../common/info';

function SkillSection({ title="", svgs=[], paddingTop=false}) {
    console.log(svgs)
    return (
        <section className='pb-8 px-4'>
            <div className='w-full h-fit m-4 text-2xl md:text-4xl lg:text-4xl'>
                <span className="underline">{title}</span>
            </div>
            <div className='grid grid-cols-3 px-8 gap-8 sm:grid-cols-5 md:grid-cols-10 lg:grid-cols-10'>
                {svgs.map((skill) => (
                    <SkillCard key={skill.title} title={skill.title} svgSrc={skill.svgSrc} paddingTop={paddingTop}/>
                ))}
            </div>
        </section>
    )
}


function SkillsPage() {
    return (
        <div className='overflow-scroll no-scrollbar'>
            {Object.keys(SKILLS).map((section) => (
                <SkillSection 
                    key={section} 
                    title={section} 
                    svgs={SKILLS[section]} 
                />
            ))}
        </div>
    );
}

export default SkillsPage;