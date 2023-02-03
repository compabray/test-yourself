import { useState, useEffect } from "react";
const {Link} = require("react-router-dom");



function GymResult ({ gender, result, questions}){

    const [stage, setStage] = useState(" ");
   // ARMAR FUNCION PARA CALCULAR EL RESULTADO Y CATEGORIZARLO EN UN UN NIVEL DEL GYM 
   const value = Math.round(((result) / questions.length) * 100);

 const getStage = () => {
      if (value >= 90 && value <= 100){
           return setStage("Mr Olympia");
        } else if (value >= 80 && value < 90){
            return setStage("Gorilla");
        } else if (value >= 70 && value < 80){
            return setStage("Advanced");
        } else if (value >= 50 && value < 70){
           return setStage(`Gym ${gender}`);
        } else if (value >= 30 && value < 50) {
            return setStage("Beginner");
        } else if (value >= 15 && value < 30){
            return setStage(`Baby Gym ${gender}`);
        } else if (value >= 0 && value < 15){
            return setStage("Newbie");
        }
    }

    useEffect(()=>{
		getStage()
	}, [])

    return (
        <div className="fixed top-0 h-screen w-screen bg-zinc-900">
            <div className="h-1/2 w-10/12 m-auto mt-32 flex jusify-center align-center flex-wrap sm:w-8/12">
                <h2 className="text-5xl font-medium text-zinc-400 w-full text-center sm:text-6xl">
                    You are a real 
                </h2>    
                <h3 className="text-6xl font-semibold text-purple-500 w-full text-center">{stage}!</h3>      
                <Link to="/" className="cursor-pointer mt-16 p-6 text-2xl font-semibold text-purple-500 rounded bg-zinc-800 m-auto hover:text-purple-600" >
                    Back to home page!
                </Link> 
            </div> 
        </div>
    )
}

export default GymResult;