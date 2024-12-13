import React, { useContext, useEffect, useState } from "react";
import Uber_logo_home_page from '../assets/Uber-logo-home-page.png'
import { Link } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UserLogin(){

    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    
    const{user,setUser} = useContext(UserDataContext)
    const navigate = useNavigate()

    async function submitHandler(e){
        e.preventDefault() 
        
        const userData = {
            email: email,
            password: password
        }

        const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,userData)

        if(res.status == 200){
            const data = res.data
            setUser(data.user)
            localStorage.setItem('token',data.token)
            navigate('/home')
        }
        
        setEmail('')
        setPassword('')
    }


    return (
        <div className="h-screen p-7 flex flex-col justify-between ">
            <div className="md:p-16 lg:w-1/2 lg:mx-auto">
                <img className="w-16 ml-8" src={Uber_logo_home_page} alt="UBER" />
                <form className="p-8 pb-2" onSubmit={(e)=>{submitHandler(e)}}>
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
                <p className="text-center text-sm lg:text-base">New here? <Link to='/signup' className="text-blue-500">Create new Account</Link> </p>
                
            </div>
            <Link to='/captain-login' className="w-full lg:w-[480px] mx-auto flex items-center justify-center px-8 ">
                <button className="text-white w-full font-medium text-lg py-2 hover:bg-[#10c861] rounded-md bg-[#10b461]">Sign-in as captain</button>
            </Link>
        </div>
        
      
    )
}

export default UserLogin