import React, { useRef, useState } from "react"
import Uber_logo_home_page from "../assets/Uber-logo-home-page.png"
import map_temp from "../assets/map_temp.gif"
import {useGSAP} from "@gsap/react"
import gsap from "gsap"
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from "../components/LocationSearchPanel"
import PricePanel from "../components/PricePanel"
import ConfirmRide from "../components/ConfirmRide"
import LookingForDriver from "../components/LookingForDriver"
import WaitingForDriver from "../components/WaitingForDriver"
import axios from "axios"

function Home(){

    const[pickup,setPickup] = useState('')
    const[destination,setDestination] = useState('')
    const[panelOpen,setPanelOpen] = useState(false)

    const panelRef = useRef(null)
    const arrowRef = useRef(null)
    const vehiclePanelRef = useRef(null)
    const ConfirmRidePanelRef = useRef(null)
    const vehicleFoundRef = useRef(null)
    const waitingForDriverRef = useRef(null)
    
    const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false)
    const [confirmRidePanel,setConfirmRidePanel] = useState(false)
    const [vehicleFound, setVehicleFound] = useState(false)
    const [waitingForDriver, setWaitingForDriver] = useState(false)
    const [ activeField, setActiveField ] = useState(null)

    const [pickupSuggestions,setPickupSuggestions] = useState([])
    const [destinationSuggestions, setDestinationSuggestions] = useState([])


    async function handlePickupChange(e){
        setPickup(e.target.value)
        try{
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`,{
                params:{input: e.target.value},
                headers:{
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })      
            setPickupSuggestions(res.data)            
        }catch{
        }
    }

    async function handleDestinationChange(e){
        setDestination(e.target.value)
        try{
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`,{
                params:{input:e.target.value},
                headers:{
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })            
            setDestinationSuggestions(res.data)
        }catch{
        }
    }

    function findTrip(){
        setVehiclePanelOpen(true)
         setPanelOpen(false)
    }


    function submitHandler(e){
        e.preventDefault()
    }

    useGSAP(function(){
        if(panelOpen){
            gsap.to(panelRef.current,{
                height: '70%'
            })
            gsap.to(arrowRef.current,{
                visibility: 'visible',
                delay: 0.6
            })
        }else{
            gsap.to(panelRef.current,{
                height: '0%'
            })
            gsap.to(arrowRef.current,{
                visibility: 'hidden',
            })
        }
    },[panelOpen])

    useGSAP(function(){
        if(vehiclePanelOpen){
            gsap.to(vehiclePanelRef.current,{
                transform: 'translateY(0)'
            })
        }else{
            gsap.to(vehiclePanelRef.current,{
                transform: 'translateY(100%)'
            })
        }
    },[vehiclePanelOpen])

    useGSAP(function(){
        if(confirmRidePanel){
            gsap.to(ConfirmRidePanelRef.current,{
                transform: 'translateY(0)'
            })
        }else{
            gsap.to(ConfirmRidePanelRef.current,{
                transform: 'translateY(100%)'
            })
        }
    },[confirmRidePanel])

    useGSAP(function(){
        if(vehicleFound){
            gsap.to(vehicleFoundRef.current,{
                transform: 'translateY(0)'
            })
        }else{
            gsap.to(vehicleFoundRef.current,{
                transform: 'translateY(100%)'
            })
        }
    },[vehicleFound])

    useGSAP(function(){
        if(waitingForDriver){
            gsap.to(waitingForDriverRef.current,{
                transform: 'translateY(0)'
            })
        }else{
            gsap.to(waitingForDriverRef.current,{
                transform: 'translateY(100%)'
            })
        }
    },[waitingForDriver])



    return (
        <div className="h-screen relative overflow-hidden">
            <img className="w-20 absolute left-5 top-5" src={Uber_logo_home_page} alt="UBER" /> 
            <div className="h-screen">
                <img  className="h-full w-full lg:object-cover object-cover pointer-events-none" src={map_temp} alt="unabele to load map" />
            </div>
            <div className="h-screen flex flex-col justify-end absolute bottom-0 lg:left-1/2 lg:transform lg:-translate-x-1/2  w-full lg:w-1/2">
                <div className="h-[30%] bg-white p-5 relative">
                    <h5 className="absolute top-6 right-5 text-xl invisible" onClick={()=>{setPanelOpen(false)}}>                
                        <i ref={arrowRef} className="ri-arrow-down-s-line"></i>
                    </h5>
                    <h4 className="text-2xl font-bold">Find a trip</h4>
                    <form className="flex flex-col gap-3 mt-5 relative" onSubmit={(e)=>{submitHandler(e)}}>
                        <div className="bg-gray-900 w-1 h-[55px] left-2 top-1/2 transform -translate-y-1/2 absolute rounded-full "></div>
                        <input 
                            value={pickup}
                            onClick={()=>{
                                setPanelOpen(true)
                                setActiveField('pickup')
                            }}
                            onChange={handlePickupChange}
                            className="bg-[#eee] px-8 py-2 text-md rounded-md border-2 focus:border-black focus:outline-none" 
                            type="text" 
                            placeholder="Add apick-up location"
                            
                        />
                        <input 
                            value={destination}
                            onClick={()=>{
                                setPanelOpen(true)
                                setActiveField('destination')
                            }}
                            onChange={handleDestinationChange}
                            className="bg-[#eee] px-8 py-2 text-md rounded-md border-2 focus:border-black focus:outline-none" 
                            type="text" 
                            placeholder="Enter your destination"
                        />
                    </form>
                    <button className="bg-black text-white px-4 py-2 rounded-lg mt-3 w-full"
                        onClick={findTrip}
                    >
                        Find Trip
                    </button>
                </div>
                <div ref={panelRef} className="h-full w-ful bg-white">
                    <LocationSearchPanel
                        suggestions={activeField === 'pickup' ? pickupSuggestions : destinationSuggestions}
                        setPanelOpen={setPanelOpen}
                        setVehiclePanelOpen={setVehiclePanelOpen}
                        setPickup={setPickup}
                        setDestination={setDestination}
                        activeField={activeField}
                    />
                </div>
                <div ref={vehiclePanelRef} className="fixed z-10 flex flex-col items-start justify-center gap-3 translate-y-full bg-white w-full p-3">
                    <PricePanel setVehiclePanelOpen={setVehiclePanelOpen} setConfirmRidePanel={setConfirmRidePanel}/>
                </div>
                <div ref={ConfirmRidePanelRef} className="fixed z-10 flex flex-col items-start justify-center gap-3 translate-y-full bg-white w-full">
                    <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound}/>
                </div>
                <div ref={vehicleFoundRef} className="fixed z-10 flex flex-col items-start justify-center gap-3 translate-y-full bg-white w-full">
                    <LookingForDriver setVehicleFound={setVehicleFound}/>
                </div>
                <div ref={waitingForDriverRef}  className="fixed z-10 flex flex-col items-start justify-center gap-3 translate-y-full bg-white w-full">
                    <WaitingForDriver setWaitingForDriver={setWaitingForDriver}/>
                </div>
                
            </div>
            
        </div>
    )
}

export default Home   