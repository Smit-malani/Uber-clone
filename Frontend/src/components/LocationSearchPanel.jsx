import React from "react";

function LocationSearchPanel(props){

    const location = [
        "24B, Near Kapoor's cafe, Sheriyans Coding School, Bhopal",
        "25B, Near Kapoor's cafe, Sheriyans Coding School, Bhopal",
        "26B, Near Kapoor's cafe, Sheriyans Coding School, Bhopal",
        "24B, Near Kapoor's cafe, Sheriyans Coding School, Bhopal"
    ]

    return(
        <div className="px-5 flex flex-col gap-4 lg:mt-6">
            {
                location.map((elem,idx)=>{
                    return <div key={idx} onClick={()=>{
                                props.setVehiclePanelOpen(true)
                                props.setPanelOpen(false)
                                }} className="flex items-center justify-start gap-4 border-2 p-2 border-white rounded-lg active:border-black">
                                <h2 className="bg-[#eee] px-2 py-1 rounded-full"><i className="ri-map-pin-line font-bold text-xl"></i></h2>
                                <h4 className="font-medium">{elem}</h4>
                            </div>
                })

            }
        </div>
    )
}

export default LocationSearchPanel