import React from "react";

function LocationSearchPanel({suggestions, setVehiclePanelOpen, setPanelOpen, setPickup, setDestination, activeField }){


    function handleSuggestionClick(suggestion){
        if(activeField == 'pickup'){
            setPickup(suggestion)
        }else if(activeField == 'destination'){
            setDestination(suggestion)
        }

    }

    return(
        <div className="px-5 flex flex-col gap-4 lg:mt-16 max-h-[90%] overflow-y-auto mt-10">
            {
                suggestions.map((elem,idx)=>{
                    return <div key={idx} onClick={()=>{
                                handleSuggestionClick(elem.description)
                                }} className="flex items-center justify-start gap-4 border-2 p-2 border-white rounded-lg active:border-black">
                                <h2 className="bg-[#eee] px-2 py-1 rounded-full"><i className="ri-map-pin-line font-bold text-xl"></i></h2>
                                <h4 className="font-medium">{elem.description}</h4>
                            </div>
                })

            }
        </div>
    )
}

export default LocationSearchPanel