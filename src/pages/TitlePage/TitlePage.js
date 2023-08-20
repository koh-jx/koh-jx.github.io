import './TitlePage.css';
import Title from '../../components/Title';
import Contents from '../../components/Contents';

function TitlePage() {
    return (
        <div className="flex flex-wrap flex justify-center items-center">
            <div className="w-full p-4 center"><Title /></div>
            <div className="w-full p-4 pt-8 center"><Contents /></div>
        </div>
    );
}

export default TitlePage;