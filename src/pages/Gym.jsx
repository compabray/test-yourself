import { useState } from "react";
import { NavLink } from "react-router-dom";

const gymList = [{
    path: "/girl",
    title: "Gym Girls",
    description: "See in which stage of the gym you are as a girl!",
    icon: "♀️"
},
{
    path: "/boy",
    title: "Gym Bro",
    description: "See in which stage of the gym you are as a boy!",
    icon:"♂️"
}]

function Gym() {    
    return(
        <div>
            <h1 className="text-5xl py-6 px-4 text-semibold text-purple-400 text-center sm:text-6xl sm:p-6">Are you a girl or a boy?</h1>
            <h2 className="text-base text-center text-zinc-400 w-11/12 m-auto sm:w-7/12 sm:text-lg ">
                Choose your gender so we can give you a test adjusted to your capacities. We will tell you in which stage of the Gym you are and you can always do the test again to see if you have advanced on this journey.
            </h2>
            <div className='flex m-auto w-full p-5 justify-evenly flex-wrap lg:flex-nowrap sm:mt-16 md:w-9/12'>
           {gymList.map(({path, title, description, icon}) => {   
            return (<NavLink to={path} className=' bg-zinc-800 my-2 p-6 w-full rounded-md hover:bg-zinc-700  sm:w-64' key={path}>

                    <h3 className="text-3xl text-zinc-300 text-center" key={title}>
                        {title} {icon}
                    </h3>
                    <p className="text-zinc-400 text-lg pt-2" key={description}>
                        {description}
                    </p>
                </NavLink>);
})}
   </div> 
   </div>
    )
}
export default Gym;
