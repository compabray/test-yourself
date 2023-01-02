import {testList} from '../pages/testList';
import { NavLink, } from 'react-router-dom';

function List(){
    return ( <div className='flex m-auto w-full p-5 justify-evenly flex-wrap lg:flex-nowrap sm:mt-16 md:w-9/12'>
      {testList.map(({path, title, description, icon}) => {   
            return (<NavLink to={path} className=' bg-zinc-800 my-2 p-4 w-full rounded-md hover:bg-zinc-700  sm:w-64' key={path}>

                    <h3 className="text-2xl text-zinc-300 text-center" key={title}>
                        {title} {icon}
                    </h3>
                    <p className="text-zinc-400 text-base pt-2" key={description}>
                        {description}
                    </p>
                </NavLink>);
})}
   </div> )

}

export default List;