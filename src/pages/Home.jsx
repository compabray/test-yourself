import List from '../components/List';

// import Twemoji from "react-twemoji";

function Home () {
    return (
        <div className="">
            <h1 className="p-8 font-semibold text-5xl text-purple-400 text-center sm:text-6xl">Test yourself!</h1>
                <h3 className="w-full p-4 text-zinc-400 m-auto text-lg sm:w-10/12 md:w-7/12">
                    Try different tests and see what you are made of. Challenge your friends, have fun together and compare the results in the different questionaries!
                </h3>
                <List/>
      
        </div>
    )
}


export default Home;