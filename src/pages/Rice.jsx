import PageBuilder from "../utils/pageBuilder";

function Rice(){
    const questions = ["hola", "feo", "a"]    
    
    return (
        
        <div>
          <PageBuilder questions={questions}/>
        </div>
    )
}

export default Rice;