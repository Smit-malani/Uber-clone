import React, { useState } from "react";
import userImage from "../assets/useimage.jpg"
import { Link } from "react-router-dom";


function ConfirmRidePopUp(props){

    const[otp ,setOtp] = useState('')
    function submitHandler(e){
        e.preventDefault()
    }

    return(
        <div className="lg:w-1/2 lg:bg-white lg:px-3 h-screen pt-6">
            <div className="flex items-center justify-between w-full px-3 py-2">
                <h3 className="text-xl font-semibold">Confirm this ride to start</h3>
                <i className="ri-arrow-down-s-line" onClick={()=>{
                    props.setRidePopPanel(false)
                    props.setConfirmRidePopPanel(false)
                    }} >
                </i>
            </div>
            <div className="flex  items-center justify-between mt-4 p-3 bg-yellow-400 rounded-lg">
                <div className="flex items-center justify-between gap-3">
                    <img className="h-10 w-10 rounded-full object-cover" src={userImage} alt="" />
                    <h2 className="text-lg font-medium">Harsh Patel</h2>
                </div>
                <h5 className="text-lg font-semibold">2.2KM</h5>
                </div>
            <div className="flex flex-col items-center justify-center w-full pb-4">               
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
                <form className="w-full" onSubmit={(e)=>{
                        submitHandler(e)
                    }}>
                    <div className="flex items-center justify-center gap-3 mt-7 font-mono">
                        <input value={otp} onChange={(e)=>{setOtp(e.target.value)}} type="number" placeholder="Enter OTP" className="bg-gray-100 px-5 text-lg rounded-3xl h-14 focus:outline-none focus:border-[1px] focus:border-black" />
                    </div>
                    <div className="w-full flex items-center gap-3 mt-5 ">
                        <Link to='/captain-riding' className="bg-green-600 hover:bg-green-500 w-1/2 font-medium text-white px-6 py-2 rounded-lg mt-4 flex items-center justify-center">
                            Confirm Ride
                        </Link>
                        <button onClick={()=>{props.setConfirmRidePopPanel(false)}} className="bg-red-600 hover:bg-red-500 w-1/2 font-medium text-white px-6 py-2 rounded-lg mt-4">
                            Cancel Ride
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default  ConfirmRidePopUp