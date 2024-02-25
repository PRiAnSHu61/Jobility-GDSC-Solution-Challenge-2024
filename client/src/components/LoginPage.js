import React,{useState} from 'react'
import Logo from '../assets/Logo.png'
import Googel from '../assets/Google.svg'
import Facebook from '../assets/FacebookLogin.svg'
import Twitter from '../assets/TwitterLogin.svg'
import Apple from '../assets/AppleId.svg'
import Phone from '../assets/Phone.svg'
import './Css/Login.css'
import { doSignInWithGoogle } from '../auth'
import { useAuth } from '../context/authContext'
import { Navigate } from 'react-router-dom'
const LoginPage = () => {
    const [signup, setSignup] = useState(false);
    useAuth()
    const [isSingnedIn, setIsSignedIn] = useState(false)
    const googleSignIn = async(e)=>{
        e.preventDefault()
        if(!isSingnedIn){
            setIsSignedIn(true)
            const res=await doSignInWithGoogle().catch(err=>{
                setIsSignedIn(false)
            })
            window.location.reload()
            console.log(res);
            localStorage.setItem('user',JSON.stringify(res.user.displayName))
            localStorage.setItem('email',JSON.stringify(res.user.email))
        }
    }
  return (
    <div className='Login_Modal'>
        {/* {isSingnedIn&& <Navigate to='/Home'/>} */}
       {!signup? 
       <>
       
       <div className='Login_Left_Section'>
            <img src={Logo} alt='Logo'/>
            <span>Jobility-Where ability <br/> meets opportunity</span>
        </div>
        <div className='Login_Right_Section'>
            <div className='Heading'> Welcome Back!</div>
            <div className='SubHeading'>New to Jobility? <span onClick={()=>setSignup(true)}>Sign-Up</span></div>
            <div className='LoginUsing'>
                <div className='Phone'>
                    <img src={Phone} alt='Phone'/>
                    <span>Continue with Phone</span>
                </div>
                <div className='Google' onClick={googleSignIn}>
                    <img src={Googel} alt='Google'/>
                    <span>Continue with Google</span>
                </div>
                <div className='Sepration'>
                    <span></span>
                    <span>or</span>
                    <span></span>
                </div>
                <div className='LoginUsingIcon'>
                    <div className='Facebook'>
                        <img src={Facebook} alt='Facebook'/>
                    </div>
                    <div className='Twitter'>
                        <img src={Twitter} alt='Twitter'/>
                    </div>
                    <div className='Apple'>
                        <img src={Apple} alt='Apple'/>
                    </div>
                </div>
            </div>
            <div className='LastLine'>By joining you agree to the Jobility Terms of Services and to occasionally receive emails from us. Please read our Privacy Policy to learn how we use your personal data.</div>
        </div>
        </>
        :
        <>
            <div className='Login_Left_Section'>
            <img src={Logo} alt='Logo'/>
            <span>Jobility-Where ability <br/> meets opportunity</span>
        </div>
        <div className='Login_Right_Section'>
            <div className='Heading'> Welcome Back!</div>
            <div className='SubHeading'>New to Jobility? <span onClick={()=>setSignup(false)}>Login</span></div>
            <div className='LoginUsing'>
                <div className='Phone'>
                    <img src={Phone} alt='Phone'/>
                    <span>Signup with Phone</span>
                </div>
                <div className='Google' onClick={googleSignIn}>
                    <img src={Googel} alt='Google'/>
                    <span>Signup with Google</span>
                </div>
                <div className='Sepration'>
                    <span></span>
                    <span>or</span>
                    <span></span>
                </div>
                <div className='LoginUsingIcon'>
                    <div className='Facebook'>
                        <img src={Facebook} alt='Facebook'/>
                    </div>
                    <div className='Twitter'>
                        <img src={Twitter} alt='Twitter'/>
                    </div>
                    <div className='Apple'>
                        <img src={Apple} alt='Apple'/>
                    </div>
                </div>
            </div>
            <div className='LastLine'>By joining you agree to the Jobility Terms of Services and to occasionally receive emails from us. Please read our Privacy Policy to learn how we use your personal data.</div>
        </div>
        </>
        }
    </div>
  )
}

export default LoginPage
