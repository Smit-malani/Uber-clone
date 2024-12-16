import React from "react";
import profile from "../assets/profile.jpg"



function CaptainDetails(){
    return(
        <>
            <div className="lg:px-5 flex items-center justify-between gap-5 ">
                <div className="flex gap-3 items-center">
                    <div className="h-12 w-12 rounded-full overflow-hidden">
                        <img className="w-full h-full object-cover" src={profile} alt="UserImge" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg">Jeremiah Curties</h3>
                        <p className="text-sm opacity-70">Basic Level</p>
                    </div>
                </div>
                <div className="text-right">
                    <h4 className="font-bold">₹295.20</h4>
                    <p className=" text-sm font-medium opacity-80">Earned</p>
                </div>
            </div>
            <div className="py-5 flex items-center justify-around mt-3 bg-gray-100 rounded-lg">
                <div className="text-center">
                    <i className="ri-time-line text-3xl"></i>
                    <h5 className="text-lg font-medium mt-2">10.2</h5>
                    <p className="text-sm opacity-75">Hours Online</p>
                </div>
                <div className="text-center">
                    <i className="ri-speed-up-line text-3xl"></i>
                    <h5 className="text-lg font-medium mt-2">30KM</h5>
                    <p className="text-sm opacity-75">Total Distance</p>
                </div>
                <div className="text-center">
                    <i className="ri-booklet-line text-3xl"></i>
                    <h5 className="text-lg font-medium mt-2">20</h5>
                    <p className="text-sm opacity-75">Total Jobs</p>
                </div>
            </div>
        </>
    )
}

export default CaptainDetails