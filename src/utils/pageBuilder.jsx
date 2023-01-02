import {useState} from "react";

function PageBuilder({questions, }){

    const [checkedState, setCheckedState] = useState(
        new Array(questions.length).fill(false)
    )

    const [total, setTotal] = useState(0);

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
        <div className="flex flex-col items-center justify-center w-full h-screen">
            {questions.map((question, index) => {
                return (
                    <div key={index} className="flex items-center">
                        <div>{index + 1}</div>
                        <input
                            type="checkbox"
                            checked={checkedState[index]}
                            onChange={() => handleOnChange(index)}
                        />
                        <label>{question}</label>
                    </div>
                );}
            )}
            <div>{total}</div>
        </div>
    )
}

export default PageBuilder;