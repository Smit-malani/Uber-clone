import React, {useState } from "react";
import Uber_captain from '../assets/Uber-captain.png'
import { Link } from "react-router-dom";

function CaptainLogin(){

    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[captainData, setCaptainData] = useState({}) 

    function submitHandler(e){
        e.preventDefault()
        setCaptainData({
            email:email,
            password:password
        })
        
        setEmail('')
        setPassword('')
    }


    return (
        <div className="h-screen p-7 flex flex-col justify-between ">
            <div className="md:p-16 lg:w-1/2 lg:mx-auto">
                <img className="w-16 ml-8" src={Uber_captain} alt="UBER" />
                <form className="rounded-lg p-8 pb-2" onSubmit={(e)=>{submitHandler(e)}}>
                    <h3 className="text-lg mb-1 font-semibold">What's your email</h3>
                    <input 
                        className="bg-[#eeeeee] rounded-md px-4 py-2 border w-full text-base placeholder:text-base mb-4 focus:border-black focus:outline-none" 
                        type="email" 
                        required 
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                        placeholder="email@example.com"
                    />
                    <h3 className="text-lg mb-1 font-semibold">Enter password</h3>
                    <input 
                        className="bg-[#eeeeee] rounded-md px-4 py-2 border w-full text-base placeholder:text-base mb-6 focus:border-black focus:outline-none" 
                        type="password" 
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                        placeholder="password"
                    />
                    <div className="w-full flex items-center justify-center bg-black py-2 rounded-md hover:bg-gray-800">
                        <button className="text-white font-medium text-lg">LOG-IN</button>
                    </div>
                </form>
                <p className="text-center text-sm">Join a fleet? <Link to='/captain-signup' className="text-blue-500">Register as a Captain</Link> </p>
                
            </div>
            <Link to='/login' className="w-full lg:w-[480px] mx-auto flex items-center justify-center px-8 ">
                <button className="text-white w-full font-medium text-lg py-2 hover:bg-[#d87040] rounded-md bg-[#d5622d]">Sign-in as User</button>
            </Link>
        </div>
        
      
    )
}

export default CaptainLogin