import React, { useState } from "react";
import car from "../assets/car.png"
import bike from "../assets/bike.webp"
import auto from "../assets/auto.webp"

function PricePanel(props){

    return(
        <>
            <div className="flex items-center justify-between w-full">
                <h3 className="text-xl font-semibold">Choose a vehicle</h3>
                <i onClick={()=>{props.setVehiclePanelOpen(false)
                }} className="ri-arrow-down-s-line"></i>
            </div>
            
            <div onClick={()=>{
                props.setConfirmRidePanel(true)
                props.setVehiclePanelOpen(false)
            }} className=" border-2 rounded-xl p-2 active:border-black justify-between flex w-full items-center">
                <img className="w-16" src={car} alt="car" />
                <div className="w-44">
                    <div className="flex items-center">
                        <h4 className="font-bold text-lg">UberGo</h4>
                        <i className="ri-user-fill ml-3 text-sm"></i>
                        <p className="text-sm">4</p>
                    </div>
                    <p className="text-sm font-medium">2 min away-15:24</p>
                    <p className="text-sm opacity-80">Affortable, Compact rides</p>
                </div>
                <p className="font-semibold text-lg">₹193.20</p>
            </div>
            <div onClick={()=>{
                props.setConfirmRidePanel(true)
                props.setVehiclePanelOpen(false)
            }}  className=" border-2 rounded-xl p-2 active:border-black justify-between flex w-full items-center">
                <img className="w-16" src={bike} alt="" />   
                <div className="w-44">
                    <div className="flex items-center">
                        <h4 className="font-bold text-lg">Moto</h4>
                        <i className="ri-user-fill ml-3 text-sm"></i>
                        <p className="text-sm">1</p>
                    </div>
                    <p className="text-sm font-medium">3 min away-15:24</p>
                    <p className="text-sm opacity-80">Affortable motorcycle rides</p>
                </div>
                <p className="font-semibold text-lg">₹65.17</p>          
            </div>
            <div onClick={()=>{
                props.setConfirmRidePanel(true)
                props.setVehiclePanelOpen(false)
            }} className=" border-2 rounded-xl p-2 active:border-black justify-between flex w-full items-center">
                <img className="w-16" src={auto} alt="" />   
                <div className="w-44">
                    <div className="flex items-center">
                        <h4 className="font-bold text-lg">UberAuto</h4>
                        <i className="ri-user-fill ml-3 text-sm"></i>
                        <p className="text-sm">1</p>
                    </div>
                    <p className="text-sm font-medium">2 min away-15:24</p>
                    <p className="text-sm opacity-80">Affortable auto rides</p>
                </div>
                <p className="font-semibold text-lg">₹65.17</p>          
            </div>
        </>
    )
}

export default PricePanel