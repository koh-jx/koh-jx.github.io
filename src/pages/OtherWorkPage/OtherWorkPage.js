import './OtherWorkPage.css';
import PageTitle from '../../components/PageTitle';
import { useState } from 'react';
import { DETAILS_LIST } from '../../common/info';

function OtherWorkPage() {



    const [page, setPage] = useState(0);
    const [selection, setSelection] = useState(0);
    const MAX_PAGES = Math.ceil(DETAILS_LIST.length / 9);
    // Index to select in details info list is selection + page * 9

    

    const updateSelection = (newSelection) => {
        // If is a valid index in DETAILS_LIST
        if (newSelection + page * 9 >= DETAILS_LIST.length) return;
        setSelection(newSelection);
    }
    

    return (
        <>
            <PageTitle name={"Other Work"}/>
            <div className="grid grid-cols-1 lg:grid-cols-5 m-12 mt-4 gap-12">
                <div className="pl-5 col-span-2 flex flex-col h-full">
                    <div className="grid grid-cols-3 gap-6">
                        <div className="box aspect-square">
                            <img src={DETAILS_LIST[page * 9].webpLink} alt="placeholder" onMouseEnter={() => updateSelection(0)} className="object-cover aspect-square"/>
                        </div>
                        <div className="box aspect-square">
                            <img src={DETAILS_LIST[page * 9 + 1].webpLink} alt="placeholder" onMouseEnter={() => updateSelection(1)} className="object-cover aspect-square"/>
                        </div>
                        <div className="box aspect-square">
                            <img src={DETAILS_LIST[page * 9 + 2].webpLink} alt="placeholder" onMouseEnter={() => updateSelection(2)} className="object-cover aspect-square"/>
                        </div>
                        <div className="box aspect-square">
                            <img src={DETAILS_LIST[page * 9 + 3].webpLink} alt="placeholder" onMouseEnter={() => updateSelection(3)} className="object-cover aspect-square"/>
                        </div>
                        <div className="box aspect-square">
                            <img src={DETAILS_LIST[page * 9 + 4].webpLink} alt="placeholder" onMouseEnter={() => updateSelection(4)} className="object-cover aspect-square"/>
                        </div>
                        <div className="box aspect-square">
                            <img src={DETAILS_LIST[page * 9 + 5].webpLink} alt="placeholder" onMouseEnter={() => updateSelection(5)} className="object-cover aspect-square"/>
                        </div>
                        <div className="box aspect-square">
                            <img src={DETAILS_LIST[page * 9 + 6].webpLink} alt="placeholder" onMouseEnter={() => updateSelection(6)} className="object-cover aspect-square"/>
                        </div>
                        <div className="box aspect-square">
                            <img src={DETAILS_LIST[page * 9 + 7].webpLink} alt="placeholder" onMouseEnter={() => updateSelection(7)} className="object-cover aspect-square"/>
                        </div>
                        <div className="box aspect-square">
                            <img src={DETAILS_LIST[page * 9 + 8].webpLink} alt="placeholder" onMouseEnter={() => updateSelection(8)} className="object-cover aspect-square"/>
                        </div>
                    </div>

                    <div className="h-1/6">
                        {/* Arrow buttons  */}
                        <div className="flex center flex-row h-full">
                            <button className="w-1/3 h-1/2 arrow" disabled={page === 0}>
                                <img src="./pixel/arrow-pixel-left.png" alt="arrow-left" className="h-full" onClick={() => setPage(page - 1)}/>
                            </button>
                            <span className="font-PixelBlock text-3xl">Page {page+1} of {MAX_PAGES}</span>
                            <button className="w-1/3 h-1/2 arrow right" disabled={page + 1 === MAX_PAGES}>
                                <img src="./pixel/arrow-pixel-left.png" alt="arrow-right" className="h-full" onClick={() => setPage(page + 1)}/>
                            </button>
                        </div>
                    </div>
                    
                </div>
                    
                <div className="col-span-3 preview center flex flex-col h-full">
                    <div className="h-fit">
                        <img className='object-scale-down h-80' src={DETAILS_LIST[selection + page * 9].webpLink} alt="preview" />
                    </div>
                    <span className="font-PixelBlock text-3xl p-4">{DETAILS_LIST[selection + page * 9].title}</span>
                </div>

            </div>
        </>
    );
}

export default OtherWorkPage;