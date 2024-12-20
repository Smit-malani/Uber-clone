import React, {useContext, useEffect, useRef, useState } from "react";
import map_temp from "../assets/map_temp.gif"
import Uber_logo_home_page from "../assets/Uber-logo-home-page.png"
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";
import { SocketContext } from "../context/socketContext";
import { CaptainDataContext } from '../context/CaptainContext'




function CaptainHome(){

    const[ridePopPanel, setRidePopPanel] =useState(true)
    const[confirmRidePopPanel, setConfirmRidePopPanel] =useState(false)
    const [ ride, setRide ] = useState(null)

    const RidePopPanelRef = useRef(null)
    const ConfirmRidePopPanelRef = useRef(null)

    const { socket } = useContext(SocketContext)
    const { captain } = useContext(CaptainDataContext)

    useEffect(() => {
        socket.emit('join', {
            userId: captain._id,
            userType: 'captain'
        })

        const updateLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {                    
                    socket.emit('update-location-captain', {
                        userId: captain._id,
                        location: {
                            ltd: position.coords.latitude,
                            lng: position.coords.longitude
                        }
                    })
                })
            }
        }

        const locationInterval = setInterval(updateLocation, 10000)
        updateLocation()

    }, [])

    socket.on('new-ride', (data) => {

        setRide(data)
        setRidePopPanel(true)

    })


    useGSAP(function(){
        if(ridePopPanel){
            gsap.to(RidePopPanelRef.current,{
                transform: 'translateY(0)'
            })
        }else{
            gsap.to(RidePopPanelRef.current,{
                transform: 'translateY(100%)'
            })
        }
    },[ridePopPanel])

    useGSAP(function(){
        if(confirmRidePopPanel){
            gsap.to(ConfirmRidePopPanelRef.current,{
                transform: 'translateY(0)'
            })
        }else{
            gsap.to(ConfirmRidePopPanelRef.current,{
                transform: 'translateY(100%)'
            })
        }
    },[confirmRidePopPanel])
    
    return(
        <>
            <div className="h-screen lg:w-screen lg:flex lg:flex-col lg:h-screen lg:items-center">
                <div className="fixed top-2 flex px-3 w-full justify-between items-center">
                    <img className="w-16" src={Uber_logo_home_page} alt="UBER" /> 
                    <Link to='/captain-login' className="bg-white h-10 w-10 flex items-center justify-center rounded-full">
                        <i className="ri-logout-box-r-line text-xl "></i>
                    </Link>
                </div>
                <div className="h-3/5 lg:w-full lg:h-full">
                    <img  className="h-full w-full lg:object-cover object-cover " src={map_temp} alt="unabele to load map" />
                </div>
                <div className="h-2/5 flex flex-col gap-3 px-3 lg:w-1/2 lg:h-full lg:relative lg:flex lg:items-center">
                    <div className="bg-white lg:w-full lg:absolute lg:bottom-0">
                        <div className="flex items-center  justify-center w-full pt-2">
                            <i className="ri-arrow-down-s-line lg:text-2xl opacity-80"></i>
                        </div>
                        <div className="lg:px-3">
                            <CaptainDetails/>
                        </div> 
                    </div>
                </div>
                <div ref={RidePopPanelRef} className="w-full p-3 fixed z-10 flex flex-col bottom-0 translate-y-full items-start bg-white justify-center gap-3 lg:bg-transparent lg:flex lg:items-center lg:p-0">
                    <RidePopUp setRidePopPanel={setRidePopPanel} setConfirmRidePopPanel={setConfirmRidePopPanel}/>
                </div>
                <div ref={ConfirmRidePopPanelRef} className="w-full p-3 fixed z-10 flex flex-col bottom-0 translate-y-full items-start bg-white justify-center gap-3 lg:bg-transparent lg:flex lg:items-center lg:p-0">
                    <ConfirmRidePopUp setConfirmRidePopPanel={setConfirmRidePopPanel} setRidePopPanel={setRidePopPanel}/>
                </div>

            </div>
        </>
    )
}

export default CaptainHome