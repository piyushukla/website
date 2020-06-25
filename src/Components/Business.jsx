import React from 'react'
import './Business.css'
import './Header.css'

function Business(){


    return (
        <div className="main">
        <div style={{width:"50%",marginTop:"30px"}} className="column">

            <div style={{ width: "10%", height: "250px",zIndex:"-1" ,backgroundColor:"#DCDCDC",position:"absolute"}}>

            </div>
            
            <div style={{position:"relative",width:"30%",top:"40px",height:"180px"}}>

                <img src="https://cnet4.cbsistatic.com/img/NlyoQRNtMD1kFL4pKE1LzkM6uhI=/940x0/2018/03/16/5b1ba726-2c4d-4163-b14d-ed97ff23f959/20180316-windows-10-background-01.jpg" width="300px" height="180px" className="image" alt="windows" />
            </div>

        </div>
        <div className="column" style={{marginTop:"70px",width:"50%"}}>
            <h1>How Do I Know If I Need a Business Coach ?</h1>

            <div style={{backgroundColor:"#E6E6FA",width:"470px",height:"150px"}}>
                <p style={{color:"#1E90FF",paddingLeft:"8px",paddingRight:"5px",paddingTop:"10px"}}>What is Business Coaching</p>
                <p style={{fontSize:"13px",paddingLeft:"12px",paddingRight:"5px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Maiores libero ad consequatur harum fugiat tempore unde, 
                    totam, molestias necessitatibus quam error nulla, omnis laborum 
                    pariatur repellendus ipsum. Dignissimos, repellat aliquid.</p>
            </div>
            <div style={{backgroundColor:"#E6E6FA",width:"470px",height:"60px"}}>

                    <p style={{fontSize:"13px",paddingLeft:"12px",paddingTop:"8px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Maiores libero ad c ipsum dolor sit amet</p>
            </div>
            <div style={{backgroundColor:"#E6E6FA",width:"470px",height:"60px"}}>

                    <p style={{fontSize:"13px",paddingLeft:"12px",paddingTop:"8px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Maiores </p>
            </div>
            <div style={{backgroundColor:"#E6E6FA",width:"470px",height:"60px"}}>

                    <p style={{fontSize:"13px",paddingLeft:"12px",paddingTop:"8px"}}>Lorem,consectetur adipisicing elit. 
                    Maiores libero ad c ipsum dolor sit amet</p>
            </div>
            <div style={{backgroundColor:"#E6E6FA",width:"470px",height:"60px"}}>

                    <p style={{fontSize:"13px",paddingLeft:"12px",paddingTop:"8px"}}>Lorem, adipisicing elit. 
                    Maiores libero ad c ipsum dolor sit amet</p>
            </div>

                    <div style={{ width:"40%",display:"flex",alignItems:"center",justifyContent:"center",marginTop:"20px"}}>

                            <a style={{ color: "white", backgroundColor: "#000080" }} href="something" className="button3">Get In Touch</a>
                    </div>
        </div>
    </div>
    )
}
export default Business;