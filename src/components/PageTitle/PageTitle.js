import './PageTitle.css';

function PageTitle({ name }) {
    return (
        <div className="left-0 top-0 w-full p-8">
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-bold font-Pixel">{name}</h1>
            <hr className="w-2/5 h-1 border-0 rounded md:my-0 hline"/>
        </div>
    );
}

export default PageTitle;