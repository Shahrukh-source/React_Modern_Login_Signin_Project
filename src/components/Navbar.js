import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/Logo.svg"
import { toast } from 'react-hot-toast'
export default function Navbar(props) {
    let isLoggedIn  = props.isLoggedIn 
    let setIsLoggedIn = props.setIsLoggedIn


  return (
  <div className='flex justify-evenly item-center w-11/12 max-w-[1160px] py-4 mx-auto'>
   <Link to="/"><img src={logo} alt='logo' width={160} height={32} loading='lazy'/></Link>
    <nav>
   
        <ul className=' gap-3 text-richblack-100 flex gap-x-6'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="about">About</Link>
            </li>
            <li>
                <Link to="contact">Contact</Link>
            </li>
          
        </ul>
    </nav>
    <div className='flex items-center gap-x-4'>
        {!isLoggedIn &&
            <Link to="/login">
                <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>Login</button>
            </Link>
        }
        {!isLoggedIn &&
            <Link to="/signup">
                <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>Signup</button>
            </Link>
        }
        {isLoggedIn  &&
            <Link to="/">
                <button onClick={()=>{setIsLoggedIn(false);toast.success("Log Out")}}>LogOut</button>
            </Link>
        }
        {isLoggedIn  &&
            <Link to="/dashboard">
                <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>Dashboard</button>
            </Link>
        }
    </div>
  </div>
  )
}
