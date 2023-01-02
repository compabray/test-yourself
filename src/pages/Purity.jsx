import PageBuilder from "../utils/pageBuilder";

function Purity (){
    
    const questions = ["hola", "feo", "a"]    

    return (
        
        <div>
          <PageBuilder questions={questions}/>
        </div>
    )
}

export default Purity;