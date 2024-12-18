import React from "react";
import car from "../assets/car.png"


function LookingForDriver(props){
    const pickup = props.pickup
    const  pickupBlock = pickup.split(',')[0]   
    
    const destination = props.destination
    const destinationBlock = destination.split(',')[0]
    return(
        <>
            <div className="flex items-center justify-between w-full px-3 py-2">
                <h3 className="text-xl font-semibold">Looking for Driver</h3>
                <i className="ri-arrow-down-s-line" onClick={()=>{props.setVehicleFound(false)}} ></i>
            </div>
            <div className="flex flex-col items-center justify-center w-full pb-4">
                <div className="w-full flex justify-center border-b-[1px] border-gray-300 pb-5">
                    <img className="w-36" src={car} alt="car" />
                </div>
                <div className="w-full flex flex-col gap-2">
                    <div className="w-full flex items-center mt-2 gap-6 pl-3">
                        <i className="ri-map-pin-line font-bold text-xl"></i>
                        <div className="w-full border-b-[1px] border-gray-300 py-2">
                            <h4 className="text-lg font-bold">{pickupBlock}</h4>
                            <p className="text-gray-900 text-sm whitespace-nowrap max-w-[80%] overflow-hidden text-ellipsis">{props.pickup}</p>
                        </div>
                    </div>
                    <div className="w-full flex items-center gap-6 pl-3">
                        <i className="ri-square-fill"></i>
                        <div className="w-full border-b-[1px] border-gray-300 py-2">
                            <h4 className="text-lg font-bold">{destinationBlock}</h4>
                            <p className="text-gray-900 text-sm pr-4 whitespace-nowrap max-w-[80%] overflow-hidden text-ellipsis">{props.destination}</p>
                        </div>
                    </div>
                    <div className="w-full flex items-center gap-6 pl-3">
                        <i className="ri-wallet-fill text-lg"></i>
                        <div className="w-full border-b-[1px] border-gray-300 py-2">
                            <h4 className="text-lg font-bold">₹{props.fare[props.vehicleType]}</h4>
                            <p className="text-gray-900 text-sm">Cash Cash</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LookingForDriver