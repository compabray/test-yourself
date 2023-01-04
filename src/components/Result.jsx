const {Link} = require("react-router-dom");

function Result ({title, result, questions}){
    return (
        <div className="fixed top-0 h-screen w-screen bg-zinc-900">
            <div className="h-1/2 w-10/12 m-auto mt-32 flex jusify-center align-center flex-wrap sm:w-8/12">
                <h2 className="text-5xl font-medium text-zinc-400 w-full text-center sm:text-6xl">
                    Your result in the 
                    <span className="text-purple-500"> {title} </span> 
                    was:
                </h2>    
                <h3 className="text-6xl font-semibold text-purple-500 mt-6 w-full text-center">{Math.round(((questions.length - result) / questions.length) * 100)}</h3>      
                <Link to="/" className="cursor-pointer mt-16 p-6 text-2xl font-semibold text-purple-500 rounded bg-zinc-800 m-auto hover:text-purple-600" >
                    Back to home page!
                </Link> 
            </div> 
        </div>
    )
}

export default Result;