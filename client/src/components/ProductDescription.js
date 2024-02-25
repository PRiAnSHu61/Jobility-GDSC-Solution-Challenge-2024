import React from 'react'
import Star from '../assets/Star.svg'
import Loc from '../assets/Loc.svg'
import './Css/Product.css'
import { Link } from 'react-router-dom'
const ProductDescription = () => {
  return (
    <div className='Product_Description'>
        <Link to="/" className='Close'>X</Link>
        <div className='Section1'>
            <div className='Product_Image'>
                <img src='https://via.placeholder.com/300' alt='Product'/>
            </div>
            <div className='Product_Contact'>
                <div className='Product_Name'>CYX</div>
                <div className='Product_Contact'>Contact</div>
                <div className='Rating'>
                    <div className='Stars'>
                        <img src={Star} alt='stars'/> 
                        <img src={Star} alt='stars'/> 
                        <img src={Star} alt='stars'/> 
                        <img src={Star} alt='stars'/> 
                    </div>
                    <div className='SubHeading'>Rating</div>
                </div>
            </div>
        </div>
        <div className='Section2'>
            <div className='Location'>
                <img src={Loc} alt=''/>
                <span>Location</span>
            </div>
            <div className='Price'>$7</div>
            <div className='JobType'>Job Type: One Time</div>
        </div>
        <div className='ChatBtn'>Chat</div>
        <div className='Section3'>
            <div className='Description'>Job Description</div>
            <div className='ExplainedDescription'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a tempor nulla, id vehicula nibh. Nulla eu magna nisl. Etiam ut vestibulum sapien, vitae ornare velit. Ut orci ligula, faucibus et dui mattis, maximus fermentum leo. Nunc porttitor elit quis purus cursus, nec consectetur justo imperdiet. Ut quis nibh id turpis suscipit congue a eu augue. Proin risus sapien, luctus non lorem non, interdum imperdiet metus. Etiam hendrerit dictum ipsum ac rutrum. Morbi ut odio non sapien dictum consequat vel vel dolor. Morbi consequat nibh vel libero conse
            </div>
        </div>
    </div>
  )
}

export default ProductDescription
