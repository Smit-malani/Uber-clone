import React from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function UserLogout(){
    
    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    axios.get(`${import.meta.env.VITE_API_URL}/user/logout`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    }).then((res)=>{
        if(res.status == 200){
            localStorage.removeItem('token')
            navigate('/login') 
        }
    })
    
    return (
        <div>
            logout
        </div>
    )
}

export default UserLogout