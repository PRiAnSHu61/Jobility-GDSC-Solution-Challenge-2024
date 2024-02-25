import React, { useEffect } from 'react'
import Logo from '../assets/Logo.svg'
import Search from '../assets/Search.svg'
import Location from '../assets/Location.svg'
import './Css/Navbar.css'
import LoginPage from './LoginPage'
import { useState } from 'react'
import { useAuth } from '../context/authContext'
import { doSignOut } from '../auth'
const Navbar = () => {
    const [login, setLogin] = useState(false)
    const [loginBtn, setLoginBtn] = useState(true)
    const [userName, setUserName] = useState('')
    const handelLogin = () =>{
        setLogin(!login)
    }
    // const { userLoggedIn={} } = useAuth();
    // if(currentUSer!==undefined){
    //     console.log(currentUSer.displayName);
    // }
    const signOut = async()=>{
        await doSignOut()
        localStorage.removeItem('user')
        localStorage.removeItem('email')
        window.location.reload()
    }
    useEffect(()=>{
        if(localStorage.getItem('user')){
            setLoginBtn(false)
            setLogin(false)
            setUserName(JSON.parse(localStorage.getItem('user')));
        }
    })
  return (
    <>
    <div className='Navbar_contanier'>   
        <nav>
            <div className="logo">
                <img src={Logo} alt="Logo" />  
                <span>Jobility</span>  
            </div>
            <div className='Search_box'>
                <div className="search">
                    <input type="text" placeholder="Search" />
                    <button>
                        <img src={Search} alt='search'/>
                    </button>
                </div>
            <div className='Location_contanier'>
                <img src={Location} alt='location'/>
                <span>Location</span>
            </div>
            </div>
            <div className='Menu'>
                <ul>
                    <li><a href="#">Chat</a></li>
                    <li><a href="#">Add Job</a></li>
                    <li><a href="#">About Us</a></li>
                </ul>
            </div>
            {userName===""?
            <div className='LoginBtn'>
                <button onClick={handelLogin}>Sign Up / Log In</button>
            </div>
             : 
            <div className='LoginBtn'>
                <button onClick={signOut}>Sign Out</button>
            </div>
    }
        </nav>
    </div>
    {
        login ? 
    <div className='LoginContainer'>
        <LoginPage/>
    </div>
         : 
         null
    }
    </>
  )
}

export default Navbar
