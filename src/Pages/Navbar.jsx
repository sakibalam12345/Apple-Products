import { Link, NavLink } from "react-router-dom";
import { AiFillApple } from 'react-icons/ai';
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/Authprovider";
import { toast } from "react-toastify";




const Navbar = () => {
const [logoutsuccess,setlogoutsuccess] = useState('')
  const {user,logout} = useContext(AuthContext);



  const handlelogout = ()=>{

    logout()
   .then(result=>{
    console.log(result)
    setlogoutsuccess(toast('Successfully Logout'))
   })
   .catch()

  }

    const navlinks = <>
    <li>
    <NavLink
                    to='/'
                    className={({ isActive }) =>
                      isActive && 'text-gray-600 underline'
                       
                    }
                  >
                    Home
                  </NavLink>
    </li>
    <li>
    <NavLink
                    to='/addproduct'
                    className={({ isActive }) =>
                      isActive && 'text-gray-600 underline'
                       
                    }
                  >
                    Add Product
                  </NavLink>
    </li>
    <li>
    <NavLink
                    to='/mycart'
                    className={({ isActive }) =>
                      isActive && 'text-gray-600 underline'
                       
                    }
                  >
                   My Cart
                  </NavLink>
    </li>

    <li>
    <NavLink
                    to='/login'
                    className={({ isActive }) =>
                      isActive && 'text-gray-600 underline'
                       
                    }
                  >
                   Login
                  </NavLink>
    </li>
   
      
    </>
    return (
        <div className="sticky top-0 z-50">
           <div className="navbar bg-gray-950 text-white pb-4 ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content text-white mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navlinks }
      </ul>
    </div>
   <AiFillApple className="text-xl mr-1"></AiFillApple>
    <a className="text-xl">Apple</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-white">
      {navlinks}
     
    </ul>
  </div>
  { user ?
  
  <div className="navbar-end">
    <p>{user.displayName}</p>
     <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
    <div className="w-10  rounded-full">
          <img  src={user.photoURL} />
        </div>
        </label>
    <button onClick={handlelogout} className="btn">Logout</button>
  </div> 
   :  
   
   <div className="navbar-end">

    <Link to='/login'>
    <button className="btn">
    LogIn
    </button>
    
    </Link>
    
  </div> }

</div>
        </div>
    );
};

export default Navbar;