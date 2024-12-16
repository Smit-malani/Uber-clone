import React from "react";
import car from "../assets/car.png"


function WaitingForDriver(props){
    return(
        <>
            <div className="flex items-center justify-center w-full px-3 py-2">
                <i className="ri-arrow-down-s-line text-2xl opacity-75" onClick={()=>{props.setWaitingForDriver(false)}} ></i>
            </div>
            <div className="flex items-center justify-between w-full px-4">
                <img className="w-28" src={car} alt="car" />
                <div className="text-right">
                    <h2 className="font-bold text-xl">Smit</h2>
                    <h4 className="text-lg font-semibold -mt-1 -mb-1">GJ01 AB 1234</h4>
                    <p className="text-sm font-medium text-gray-600">Maruti Suzuki Alto</p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full pb-4">
                <div className="w-full flex justify-center border-b-[1px] border-gray-300 pb-5">
                </div>
                <div className="w-full flex flex-col gap-2">
                    <div className="w-full flex items-center mt-2 gap-6 pl-3">
                        <i className="ri-map-pin-line font-bold text-xl"></i>
                        <div className="w-full border-b-[1px] border-gray-300 py-2">
                            <h4 className="text-lg font-bold">562/11-A</h4>
                            <p className="text-gray-900 text-sm">Kaikondrahill, Benguluru, Karnataka</p>
                        </div>
                    </div>
                    <div className="w-full flex items-center gap-6 pl-3">
                        <i className="ri-square-fill"></i>
                        <div className="w-full border-b-[1px] border-gray-300 py-2">
                            <h4 className="text-lg font-bold">Third Wave Coffee</h4>
                            <p className="text-gray-900 text-sm pr-4">17th Cross Rd,PWD Quaters, 1st Sector,HSR Layout, Bengaluru, Karnataka</p>
                        </div>
                    </div>
                    <div className="w-full flex items-center gap-6 pl-3">
                        <i className="ri-wallet-fill text-lg"></i>
                        <div className="w-full border-b-[1px] border-gray-300 py-2">
                            <h4 className="text-lg font-bold">₹193.20</h4>
                            <p className="text-gray-900 text-sm">Cash Cash</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WaitingForDriver