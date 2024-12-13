import React, { useContext, useState } from "react";
import Uber_captain from '../assets/Uber-captain.png'
import { Link } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function CaptainSignup(){

    const navigate = useNavigate()


    const[firstname,setFirstname] = useState('')
    const[lastname,setLastname] = useState('')
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')

    const[vehicleColor,setVehicleColor] = useState('')
    const[vehiclePlate,setVehiclePlate] = useState('')
    const[vehicleCapacity,setVehicleCapacity] = useState('')
    const[vehicleType,setVehicleType] = useState('')

    const{captain,setCaptain} = useContext(CaptainDataContext)

    async function submitHandler(e){
        e.preventDefault()

        const captainData={
            fullname:{
                firstname:firstname,
                lastname:lastname
            },
            email: email,
            password: password,
            vehicle:{
                color: vehicleColor,
                plate: vehiclePlate,
                capacity: vehicleCapacity,
                vehicleType: vehicleType
            }
        }
        const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/register`,captainData)
        if(res.status == 201){
            const data = res.data
            localStorage.setItem('token',data.token)
            navigate('/captain-home')
        }


        setFirstname('')
        setLastname('')
        setEmail('')
        setPassword('')
        setVehicleCapacity('')
        setVehicleColor('')
        setVehiclePlate('')
        setVehicleType('')
    }


    return (
        <div className="h-screen p-7 flex flex-col justify-between ">
        <div className="md:p-16 lg:w-1/2 lg:mx-auto">
            <img className="w-16 ml-8" src={Uber_captain} alt="UBER" />
            <form className="p-8 pb-2 pt-4" onSubmit={(e)=>{submitHandler(e)}}>
                <h3 className="text-lg mb-1 font-semibold">What's your name</h3>
                <div className="flex gap-3">
                    <input 
                    className="bg-[#eeeeee] rounded-md px-4 py-2 border w-1/2 text-base placeholder:text-base mb-3 focus:border-black focus:outline-none" 
                    type="text" 
                    required 
                    value={firstname}
                    placeholder="firstname"
                    onChange={(e)=>{setFirstname(e.target.value)}}
                />
                <input 
                    className="bg-[#eeeeee] rounded-md px-4 py-2 border w-1/2 text-base placeholder:text-base mb-3 focus:border-black focus:outline-none" 
                    type="text" 
                    required 
                    value={lastname}
                    placeholder="lastname"
                    onChange={(e)=>{setLastname(e.target.value)}}
                />
                </div>
                <h3 className="text-lg mb-1 font-semibold">What's your email</h3>
                <input 
                    className="bg-[#eeeeee] rounded-md px-4 py-2 border w-full text-base placeholder:text-base mb-3 focus:border-black focus:outline-none" 
                    type="email" 
                    required 
                    value={email}
                    placeholder="email@example.com"
                    onChange={(e)=>{setEmail(e.target.value)}}
                />
                <h3 className="text-lg mb-1 font-semibold">Enter password</h3>
                <input 
                    className="bg-[#eeeeee] rounded-md px-4 py-2 border w-full text-base placeholder:text-base mb-3 focus:border-black focus:outline-none" 
                    type="password" 
                    value={password}
                    placeholder="password"
                    onChange={(e)=>{setPassword(e.target.value)}}
                />
                <h3 className="text-lg mb-1 font-semibold">Vehical Information</h3>
                <div className="flex gap-3">
                    <input 
                    className="bg-[#eeeeee] rounded-md px-4 py-2 border w-1/2 text-base placeholder:text-base mb-3 focus:border-black focus:outline-none" 
                    type="text" 
                    required 
                    value={vehicleColor}
                    placeholder="Vehicle Color"
                    onChange={(e)=>{setVehicleColor(e.target.value)}}
                />
                <input 
                    className="bg-[#eeeeee] rounded-md px-4 py-2 border w-1/2 text-base placeholder:text-base mb-3 focus:border-black focus:outline-none" 
                    type="text" 
                    required 
                    value={vehiclePlate}
                    placeholder="Vehicle Plate"
                    onChange={(e)=>{setVehiclePlate(e.target.value)}}
                />
                </div>
                <div className="flex gap-3 mb-4">
                <input 
                    className="bg-[#eeeeee] rounded-md px-4 py-2 border w-1/2 text-base placeholder:text-base mb-3 focus:border-black focus:outline-none" 
                    type="number" 
                    required 
                    value={vehicleCapacity}
                    placeholder="Vehicle Capacity"
                    onChange={(e)=>{setVehicleCapacity(e.target.value)}}
                />
                <select 
                    required 
                    className="bg-[#eeeeee] rounded-md px-4 py-2 border w-1/2 text-base mb-3 focus:border-black focus:outline-none"
                    onChange={(e)=>{setVehicleType(e.target.value)}} 
                    >
                        
                        <option value="" disabled selected>Select Vehicle Type</option>
                        <option value="car">car</option>
                        <option value="auto">auto</option>
                        <option value="motorcycle">motorcycle</option>
                </select>
                </div>
                
                
                <div className="w-full flex items-center justify-center bg-black py-2 rounded-md hover:bg-gray-800">
                    <button className="text-white font-medium text-lg">Create account</button>
                </div>
            </form>
            <p className="text-center text-sm lg:text-base">Alredy have account? <Link to='/captain-login' className="text-blue-500">Login here</Link> </p>
            
        </div>
        <p className="text-[10px] text-justify leading-3 opacity-55 font-medium mx-auto">By proceeding,you consent to get calls,WhatsApp or SMS messages,including by automated means,from Uber and its affiliated to the number provided.</p>
    </div>
    )
}

export default CaptainSignup