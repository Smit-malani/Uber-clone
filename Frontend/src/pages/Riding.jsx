import React from "react";
import map_temp from "../assets/map_temp.gif"
import car from "../assets/car.png"
import { Link } from "react-router-dom";



function Riding(){
    return(
        <div className="h-screen lg:w-screen lg:flex lg:h-screen">
            <Link to='/home' className="bg-white fixed h-10 w-10 flex items-center justify-center rounded-full top-3 right-3">
                <i className="ri-home-2-fill text-xl "></i>
            </Link>
            <div className="h-1/2 lg:w-1/2 lg:h-full ">
                <img  className="h-full w-full lg:object-cover object-cover pointer-events-none" src={map_temp} alt="unabele to load map" />
            </div>
            <div className="h-1/2 lg:w-1/2 lg:h-full lg:flex lg:flex-col lg:justify-center pt-3">
                <div className="flex items-center justify-between w-full px-4">
                    <img className="w-28" src={car} alt="car" />
                    <div className="text-right">
                        <h2 className="font-bold text-lg">Smit</h2>
                        <h4 className="text-base font-semibold -mt-1 -mb-1">GJ01 AB 1234</h4>
                        <p className="text-sm font-medium text-gray-600">Maruti Suzuki Alto</p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center w-full pb-4">
                    <div className="w-full flex justify-center border-b-[1px] border-gray-300 pb-3">
                    </div>
                    <div className="w-full flex flex-col gap-6 py-2">
                        <div className="w-full flex items-center gap-6 pl-3">
                            <i className="ri-square-fill"></i>
                            <div className="w-full border-b-[1px] border-gray-300 pb-2 ">
                                <h4 className="text-lg font-bold">Third Wave Coffee</h4>
                                <p className="text-gray-900 text-sm pr-4">17th Cross Rd,PWD Quaters, 1st Sector,HSR Layout, Bengaluru, Karnataka</p>
                            </div>
                        </div>
                        <div className="w-full flex items-center gap-6 pl-3">
                            <i className="ri-wallet-fill text-lg"></i>
                            <div className="w-full border-b-[1px] border-gray-300 pb-2">
                                <h4 className="text-lg font-bold">₹193.20</h4>
                                <p className="text-gray-900 text-sm">Cash Cash</p>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="w-full flex justify-center">
                        <button className="bg-green-600 hover:bg-green-500 font-medium text-white py-2 rounded-lg w-1/2">Make a Payment</button>
                    </div>
            </div>
        </div>
    )
}

export default Riding