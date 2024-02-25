import React from "react";
import Arrow from '../assets/Arrow.svg'
import HomePng from '../assets/HomeImage.png'
import './Css/Work.css'
const Work = () => {
  const Data = [
    {
      Number: 1,
      Text: "Choose a Job/employee by price, skills, and reviews.",
      Color: "#D7D7FD",
    },
    { Number: 2, Text: "Schedule a job as you wish.", Color: "#FFFCE4" },
    {
      Number: 3,
      Text: "Chat, pay, tip, and review all in one place.",
      Color: "#E3FFEF",
    },
  ];
  const GetHelp=[
    {Text:"Genral Mounting"},
    {Text:"TV Mounting"},
    {Text:"Genral Furniture Assembly"},
    {Text:"IKEA Assembly"},
    {Text:"Help Moving"},
    {Text:"Cleaning"},
    {Text:"Yard Work"},
    {Text:"Trash & Furniture Removal"},
    {Text:"Lawn Care"},
    {Text:"Hang Art"},
    {Text:"Bed Assembly"},
    {Text:"In-home furniture movers"},
    {Text:"Shelf Mounting"},
    {Text:"Light Installation"},
    {Text:"Plumbing Help"},
  ]
  return (
    <>
    <div className="Work_Section">
      <div className="Work_Section_Container">
        <div className="Work_Section_Heading">
            How it works?
        </div>
        <div className="Work_text">
        {Data.map((item, index) => {
            return (
                <div className="Work_Section_Container_Text" key={index}>
              <div className="Number" style={{backgroundColor:`${item.Color}`}}>{item.Number}</div>
              <span className="Description">{item.Text}</span>
            </div>
          );
        })}
        </div>
      </div>
      <div className="Arrow_Conatiner">
        <img src={Arrow} alt="arrow"/>
      </div>
      <div className="HomeImage">
        <img src={HomePng} alt="home"/>
      </div>
    </div>
        <div className="Get_Help_Container">
            <div className="Get_Help_Heading">Get help Today</div>
            <div className="Get_Help_Categ">
              {GetHelp.map((item, index) => {
                return(
                    <div className="Categ" key={index}>{item.Text}</div>  
                )
              })}
            </div>
            <div className="SeeAll"> See All Categories</div>
        </div>
</>
  );
};

export default Work;
