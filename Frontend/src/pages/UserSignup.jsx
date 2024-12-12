import React, { useState } from "react";
import Uber_logo_home_page from '../assets/Uber-logo-home-page.png'
import { Link } from "react-router-dom";


function UserSignup(){

    const[firstname,setFirstname] = useState('')
    const[lastname,setLastname] = useState('')
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[userData,setUserdata] = useState({})

    function submitHandler(e){
        e.preventDefault()

        setUserdata({
            fullname:{
                firstname:firstname,
                lastname:lastname
            },
            email: email,
            password: password
        })

        setFirstname('')
        setLastname('')
        setEmail('')
        setPassword('')
    }


    return (
        <div className="h-screen p-7 flex flex-col justify-between ">
            <div className="md:p-16 lg:w-1/2 lg:mx-auto">
                <img className="w-16 ml-8" src={Uber_logo_home_page} alt="UBER" />
                <form className="p-8 pb-2" onSubmit={(e)=>{submitHandler(e)}}>
                    <h3 className="text-lg mb-1 font-semibold">What's your name</h3>
                    <div className="flex gap-3">
                        <input 
                        className="bg-[#eeeeee] rounded-md px-4 py-2 border w-1/2 text-base placeholder:text-base mb-4 focus:border-black focus:outline-none" 
                        type="text" 
                        required 
                        value={firstname}
                        placeholder="firstname"
                        onChange={(e)=>{setFirstname(e.target.value)}}
                    />
                    <input 
                        className="bg-[#eeeeee] rounded-md px-4 py-2 border w-1/2 text-base placeholder:text-base mb-4 focus:border-black focus:outline-none" 
                        type="text" 
                        required 
                        value={lastname}
                        placeholder="lastname"
                        onChange={(e)=>{setLastname(e.target.value)}}
                    />
                    </div>
                    <h3 className="text-lg mb-1 font-semibold">What's your email</h3>
                    <input 
                        className="bg-[#eeeeee] rounded-md px-4 py-2 border w-full text-base placeholder:text-base mb-4 focus:border-black focus:outline-none" 
                        type="email" 
                        required 
                        value={email}
                        placeholder="email@example.com"
                        onChange={(e)=>{setEmail(e.target.value)}}
                    />
                    <h3 className="text-lg mb-1 font-semibold">Enter password</h3>
                    <input 
                        className="bg-[#eeeeee] rounded-md px-4 py-2 border w-full text-base placeholder:text-base mb-6 focus:border-black focus:outline-none" 
                        type="password" 
                        value={password}
                        placeholder="password"
                        onChange={(e)=>{setPassword(e.target.value)}}
                    />
                    <div className="w-full flex items-center justify-center bg-black py-2 rounded-md hover:bg-gray-800">
                        <button className="text-white font-medium text-lg">SIGN-UP</button>
                    </div>
                </form>
                <p className="text-center text-sm lg:text-base">Alredy have account? <Link to='/login' className="text-blue-500">Login here</Link> </p>
                
            </div>
            <p className="text-[10px] text-justify leading-3 opacity-55 font-medium mx-auto">By proceeding,you consent to get calls,WhatsApp or SMS messages,including by automated means,from Uber and its affiliated to the number provided.</p>
        </div>
    )
}

export default UserSignup