import { useState } from "react";
import GymResult from "../components/GymResult";

function GymTemplate ({gender, questions, title, description}){

    const [checkedState, setCheckedState] = useState(
        new Array(questions.length).fill(false)
    );
 
    const [total, setTotal] = useState(0);
        
    const [isShown, setIsShown] = useState(false);

    const handleClick = () => {
        setIsShown(true);
    };
    
    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) => {
            if (index === position) {
                return !item;
            }
            return item;
        })
        setCheckedState(updatedCheckedState);
         const totalChecked = updatedCheckedState.reduce(
        (sum, currentState) => {
            if(currentState === true){
                return sum + 1;
            }
            return sum; 
        },
        0
    );
    setTotal(totalChecked);
    };

    return (
        <div>
 <h1 className="text-5xl py-6 px-4 text-semibold text-purple-400 text-center sm:text-6xl sm:p-6">{title}</h1>
            <h3 className="text-base text-center text-zinc-400 w-11/12 m-auto sm:w-7/12 sm:text-lg ">{description}</h3>
            <div className="w-11/12 m-auto sm:9/12">
                {questions.map((question, index) => {
                return (
                    <div key={index} className="flex text-sm mt-3 sm:text-base md:text-lg">
                        <div className="sm:w-9 w-5 my-auto text-purple-600 text-right">{ index + 1 })</div>
                        <input
                            className="w-6 h-6 mx-3 my-auto text-purple-500 bg-zinc-700 rounded focus:ring-0 focus:ring-offset-0"
                            type="checkbox"
                            checked={checkedState[index]}
                            onChange={() => handleOnChange(index)}
                        />
                        <label className="text-zinc-300">{question}</label>
                    </div>
                );}
            )}
            </div>
            <div className="w-9/12 m-auto flex justify-center p-5"> 
                <div className="cursor-pointer mt-5 py-4 px-6 text-2xl font-semibold text-purple-500 rounded bg-zinc-800 m-auto hover:text-purple-600 sm:p-8 sm:text-3xl" onClick={handleClick}>
                    Get the results!
                </div>
                {isShown && <GymResult gender={gender} questions={questions} result={total}/>}
            </div>
           
        </div>
    )


}

export default GymTemplate;