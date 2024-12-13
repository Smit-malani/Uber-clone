import React, { useRef, useState } from "react"
import Uber_logo_home_page from "../assets/Uber-logo-home-page.png"
import map_temp from "../assets/map_temp.gif"
import {useGSAP} from "@gsap/react"
import gsap from "gsap"
import 'remixicon/fonts/remixicon.css'

function Home(){

    const[pickup,setPickup] = useState('')
    const[destination,setDestination] = useState('')
    const[panelOpen,setPanelOpen] = useState(false)
    const panelRef = useRef(null)
    const arrowRef = useRef(null)

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



    return (
        <div className="h-screen relative">
            <img className="w-20 absolute left-5 top-5" src={Uber_logo_home_page} alt="UBER" /> 
            <div className="h-screen bg-red-300">
                <img className="h-full w-full lg:object-cover object-cover" src={map_temp} alt="unabele to load map" />
            </div>
            <div className="h-screen flex flex-col justify-end absolute bottom-0 lg:left-1/2 lg:transform lg:-translate-x-1/2  w-full lg:w-1/2">
                <div className="h-[30%] bg-white p-5 ">
                    <h5 className="absolute top-6 right-4 text-xl invisible" onClick={()=>{setPanelOpen(false)}}>                
                        <i ref={arrowRef} className="ri-arrow-down-s-line"></i>
                    </h5>
                    <h4 className="text-2xl font-bold">Find a trip</h4>
                    <form className="flex flex-col gap-3 mt-5 relative" onSubmit={(e)=>{submitHandler(e)}}>
                        <div className="bg-gray-900 w-1 h-[55px] left-2 top-1/2 transform -translate-y-1/2 absolute rounded-full "></div>
                        <input 
                            value={pickup}
                            onClick={()=>{setPanelOpen(true)}}
                            onChange={(e)=>{setPickup(e.target.value)}}
                            className="bg-[#eee] px-8 py-2 text-md rounded-md border-2 focus:border-black focus:outline-none" 
                            type="text" 
                            placeholder="Add apick-up location"
                        />
                        <input 
                            value={destination}
                            onClick={()=>{setPanelOpen(true)}}
                            onChange={(e)=>{setDestination(e.target.value)}}
                            className="bg-[#eee] px-8 py-2 text-md rounded-md border-2 focus:border-black focus:outline-none" 
                            type="text" 
                            placeholder="Enter your destination"
                        />
                    </form>
                </div>
                <div ref={panelRef} className="h-0 w-full bg-red-300"></div>
            </div>
        </div>
    )
}

export default Home   