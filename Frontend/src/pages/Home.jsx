import React from "react";
import Uber_logo_home_page from "../assets/Uber-logo-home-page.png"
import { Link } from "react-router-dom";

function Home(){
    return (
        <div>
            <div className="bg-[url('/src/assets/uber-bg-home.jpg')] bg-cover bg-center h-screen pt-8 w-full flex flex-col justify-between">
                <img className="w-20 ml-6" src={Uber_logo_home_page} alt="UBER" />
                <div className="bg-white pt-2 pb-7 px-4 ">
                    <h2 className="text-3xl font-semibold">Get Started With Uber</h2>
                    <Link to='/login' className="flex items-center justify-center w-full rounded-md py-2 mt-7 bg-black text-white hover:bg-gray-700 ">Continue</Link>
                </div>
            </div>
        </div>
    )
}

export default Home