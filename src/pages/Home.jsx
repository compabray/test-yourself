import List from '../components/List';

// import Twemoji from "react-twemoji";

function Home () {
    return (
        <div className="bg-zinc-900 h-screen">
            <h1 className="p-8 font-semibold text-6xl text-purple-400 text-center">Test yourself!</h1>
                <h3 className="w-7/12 p-3 text-zinc-400 m-auto text-lg">
                    Try different tests and see what you are made of. Challenge your friends, have fun together and compare the results in the different questionaries!
                </h3>
                <List/>
      
        </div>
    )
}


export default Home;