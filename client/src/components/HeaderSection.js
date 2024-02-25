import React from 'react'
import Bg from '../assets/intro.png'
import './Css/Header.css'
import Electrician from '../assets/Electrician.svg'
import Assembly from '../assets/Assembly.svg'
import Cleaning from '../assets/Cleaner.svg'
import Cleaner from '../assets/Cleaner.svg'
import Lifter from '../assets/Lifter.svg'
import Painter from '../assets/Paint.svg'
import Plumber from '../assets/Plumber.svg'
import Technician from '../assets/Tech.svg'
import Makeup from '../assets/Makeup.svg'
import Pest from '../assets/Pest.svg'
const HeaderSection = () => {
    const Data=[
        {Image:Electrician,Title:'Electrician'},
        {Image:Assembly,Title:'Assembly'},
        {Image:Cleaning,Title:'Cleaning'},
        {Image:Cleaner,Title:'Cleaner'},
        {Image:Lifter,Title:'Lifter'},
        {Image:Painter,Title:'Painter'},
        {Image:Plumber,Title:'Plumber'},
        {Image:Technician,Title:'Technician'},
        {Image:Makeup,Title:'Makeup'},
        {Image:Pest,Title:'Pest'},
    ]
  return (
    <>
    <div className='HeaderContainer'>
        <span className='Header_text'>
            <span>
            Unlock opportunities with Jobility - Your path to success
            </span>
        </span>
        <span className='background_header'>
            <img src={Bg} alt='bg' />
        </span>
    </div>
    <div className='Header_Feature'>
        <div className='Header_Feature_Heading'>
        You need it, we've got it
        </div>
        <span className='Sepration'></span>
        <div className='Header_Feature_Container'>
            {Data.map((item,index)=>{
                return(
                    <>
            <div className='Feature_Card' key={index}>
                <div className='Feature_Card_Icon'>
                    <img src={item.Image} alt='Electrician' />
                </div>
                <div className='Feature_Card_Title'>
                    {item.Title}
                </div>
            </div>  
                    </>
                )
            })}
        </div>
        <div className='MoreCateg'>
            <span >More Categories</span>
        </div>
    </div>
    <div className='SeparationLine'></div>
    </>
  )
}

export default HeaderSection
