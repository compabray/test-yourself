import testList from '../pages/testList.json';
import { NavLink, } from 'react-router-dom';

function List(){
    return ( <div className='flex m-auto w-8/12 justify-evenly mt-16'>
      {testList.map(({path, title, description, icon}) => {   
            return (<NavLink to={path} className=' bg-zinc-800 p-4 w-64 rounded-md hover:bg-zinc-700'>

                    <h3 className="text-2xl text-zinc-300 text-center">
                        {title} {icon}
                    </h3>
                    <p className="text-zinc-400 text-base pt-2">
                        {description}
                    </p>
                </NavLink>);
})}
   </div> )

}

export default List;