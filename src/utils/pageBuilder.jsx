import {useState} from "react";
import Result from "../components/Result";

function PageBuilder({ questions, title, description }){

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
            <h1 className="text-6xl p-6 text-semibold text-purple-400 text-center">{title}</h1>
            <h3 className="text-lg text-center text-zinc-400 w-7/12 m-auto">{description}</h3>
            <div className="w-9/12 m-auto">
                {questions.map((question, index) => {
                return (
                    <div key={index} className="flex text-xl mt-3">
                        <div className="w-9 text-purple-600 text-right">{index + 1})</div>
                        <input
                            className="w-6 h-6 mx-2 my-auto text-purple-500 bg-zinc-700 rounded focus:ring-0 focus:ring-offset-0"
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
                <div className="cursor-pointer mt-5 p-8 text-3xl font-semibold text-purple-500 rounded bg-zinc-800 m-auto hover:text-purple-600" onClick={handleClick}>
                    Get the results!
                </div>
                {isShown && <Result questions={questions} title={title} result={total}/>}
            </div>
           
            
 
        </div>
    )
}

export default PageBuilder;