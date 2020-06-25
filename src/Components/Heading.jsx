import React from 'react'
import './Header.css'

function Heading(){

    const Link = document.createElement("link");
    const meta =document.createElement("meta")

    Link.href = "https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@500&display=swap"
    Link.rel="stylesheet"
    

    return (
        <div style={{backgroundColor:"#E8E8E8",height:"400px",marginTop:"auto",marginBottom:"auto"}}>
        
            <div style={{ width: "30%", textAlign: "center", color: "white", fontFamily: 'Hind Siliguri, sans- serif',paddingTop:"70px",fontSize:"20px"}}>
                <h2 style={{color:"	#989898"}}>Professional</h2>
            </div>
            <div style={{width: "27.5%", textAlign: "center", color: "white", fontFamily: 'Hind Siliguri, sans- serif', fontSize: "20px"}}>
                <h2 style={{color:"	#989898"}}>Coaching</h2>
            </div>         
            <div style={{ width: "41%", textAlign: "center", color: "white", fontFamily: 'Hind Siliguri, sans- serif', fontSize: "20px" }}>
                <p style={{color:"	#989898"}}>For Business Owners & Entrepreneurs</p>
            </div>      
            <div style={{width:"40%", display:"flex",alignItems:"center",justifyContent:"center"}}>   
                <a href="something" className="button3"  >Make An Appointment </a>
                <a style={{ color: "white", backgroundColor:"#4eb5f1"}} href="something" className="button3">About Me</a>
            </div>
        </div>
    )

}
export default Heading; 