import './ProjectsPage.css';
import PageTitle from '../../components/PageTitle';
import ProjectCard from '../../components/ProjectCard';
import { PROJECTS } from '../../common/info';

function ProjectsPage() {
    return (
        <>
            <PageTitle name={"My Projects"}/>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-4 m-12">
                {PROJECTS.map((project) => (
                    <div key={project.title} className="col-span-1">
                        <ProjectCard
                            title={project.title}
                            subtitle={project.subtitle}
                            stack={project.stack}
                            descriptionArray={project.descriptionArray}
                            imgSrc={project.imgSrc}
                            link={project.links}
                        />
                    </div>
                ))}
            </div>
        </>
    );
}

export default ProjectsPage;