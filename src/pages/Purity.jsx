import PageBuilder from "../utils/pageBuilder";

function Purity (){
    const title = "Purity test";
    const description = "This is a test to see how pure you are";
    const questions = ["hola", "feo", "a"];

    return (
        
        <div>
          <PageBuilder questions={questions} title={title} description={description}/>
        </div>
    )
}

export default Purity;