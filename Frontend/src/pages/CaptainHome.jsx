import React, { Profiler } from "react";
import map_temp from "../assets/map_temp.gif"
import Uber_logo_home_page from "../assets/Uber-logo-home-page.png"

import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";


function CaptainHome(){
    return(
        <>
            <div className="h-screen lg:w-screen lg:flex lg:h-screen ">
                <div className="fixed top-2 flex px-3 w-full justify-between items-center lg:w-1/2">
                    <img className="w-16" src={Uber_logo_home_page} alt="UBER" /> 
                    <Link to='/captain-login' className="bg-white h-10 w-10 flex items-center justify-center rounded-full">
                        <i className="ri-logout-box-r-line text-xl "></i>
                    </Link>
                </div>
                <div className="h-3/5 lg:w-1/2 lg:h-full ">
                    <img  className="h-full w-full lg:object-cover object-cover " src={map_temp} alt="unabele to load map" />
                </div>
                <div className="h-2/5 lg:w-1/2 lg:h-full lg:flex lg:flex-col flex flex-col gap-3  lg:justify-center px-3">
                    <div className="flex items-center  justify-center w-full pt-2">
                        <i className="ri-arrow-down-s-line lg:text-2xl opacity-80"></i>
                    </div>
                    <CaptainDetails/>
                </div>

            </div>
        </>
    )
}

export default CaptainHome