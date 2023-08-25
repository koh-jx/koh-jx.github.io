import './ProjectsPage.css';
import PageTitle from '../../components/PageTitle';
import ProjectCard from '../../components/ProjectCard';

function ProjectsPage() {
    return (
        <>
            <PageTitle name={"My Projects"}/>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:m-12">
            </div>
        </>
    );
}

export default ProjectsPage;