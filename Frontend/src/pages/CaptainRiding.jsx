import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Uber_logo_home_page from "../assets/Uber-logo-home-page.png"
import map_temp from "../assets/map_temp.gif"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import FinishRide from "../components/FinishRide";


function CaptainRiding(){


    const[FinishRidePanel,setFinishRidePanel] = useState(false)
    const FinishRidePanelRef = useRef(null)

    useGSAP(function(){
        if(FinishRidePanel){
            gsap.to(FinishRidePanelRef.current,{
                transform: 'translateY(0)'
            })
        }else{
            gsap.to(FinishRidePanelRef.current,{
                transform: 'translateY(100%)'
            })
        }
    },[FinishRidePanel])

    return(
        <div className="h-screen lg:w-screen lg:flex lg:flex-col lg:h-screen lg:items-center">
            <div className="fixed top-2 flex px-3 w-full justify-between items-center">
                    <img className="w-16" src={Uber_logo_home_page} alt="UBER" /> 
                    <Link to='/captain-home' className="bg-white h-10 w-10 flex items-center justify-center rounded-full">
                        <i className="ri-logout-box-r-line text-xl "></i>
                    </Link>
                </div>
                <div className="h-4/5 lg:w-full lg:h-full">
                    <img  className="h-full w-full lg:object-cover object-cover " src={map_temp} alt="unabele to load map" />
                </div>
                <div className="h-1/5 flex flex-col gap-3 px-3 bg-yellow-400 lg:w-1/2 lg:h-full lg:relative lg:flex lg:items-center">
                    <div className=" my-auto lg:w-full lg:absolute lg:bottom-0 lg:bg-yellow-400 lg:rounded-lg">
                        <div className="flex items-center justify-between mt-3 p-3">
                            <h4 className="text-xl font-semibold">4 KM away</h4>
                            <button onClick={()=>{setFinishRidePanel(true)}}  className="bg-green-600 text-white font-semibold px-10 py-2 rounded-lg">Complete Ride</button>
                        </div> 
                    </div>
                </div>
                <div ref={FinishRidePanelRef} className="w-full p-3 fixed z-10 flex flex-col bottom-0 items-start translate-y-full bg-white justify-center gap-3 lg:bg-transparent lg:flex lg:items-center lg:p-0">
                    <FinishRide setFinishRidePanel={setFinishRidePanel}/>
                </div>
        </div>
    )
}
export default CaptainRiding