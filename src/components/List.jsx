import testList from '../pages/testList.json';


function List(){
    return ( <div className='flex m-auto w-7/12 justify-evenly mt-16'>
      {testList.map(({title, description, icon}) => {   
            return (<div className=' bg-zinc-800 p-4 w-64 rounded-md hover:bg-zinc-700'>

                    <h3 className="text-2xl text-zinc-300 text-center">
                        {title} {icon}
                    </h3>
                    <p className="text-zinc-400 text-base pt-2">
                        {description}
                    </p>
                </div>);
})}
   </div> )

}

export default List;