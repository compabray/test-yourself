import { useState } from "react";
import PageBuilder from "../utils/pageBuilder";


function Gym() {
    const questions = ["hola", "feo", "a"]    
    return(
        <div>
            <PageBuilder questions={questions}/>
        </div>
    )
}
export default Gym;
