import './MySkillsPage.css';
import PageTitle from '../../components/PageTitle';

function MySkillsPage() {
    return (
        <>
            <PageTitle name={"About Me"}/>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:m-12">
                <div className="col-span-2 center text-base sm:text-1xl md:text-1xl lg:text-2xl m-5">
                    {/* Text introducing me  */}
                    <p>
                        Hi
                    </p>
                </div>
            </div>
        </>
    );
}

export default MySkillsPage;