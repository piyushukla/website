import React from 'react'
import './Header.css'
// import './Bottom.css'

function Bottom(){


    return (
        <div style={{height:"450px",width:"100%",marginTop:"40px",display:"flex"}} className="bottom">

        <div style={{backgroundColor:"	#F5F5F5",width:"70%",height:"400px"}}>
          
            
            <div style={{width:"30%",height:"180px",float:"right",position:"relative",top:"0"}}>

                <img src="https://cnet4.cbsistatic.com/img/NlyoQRNtMD1kFL4pKE1LzkM6uhI=/940x0/2018/03/16/5b1ba726-2c4d-4163-b14d-ed97ff23f959/20180316-windows-10-background-01.jpg" width="300px" height="180px" className="image" alt="windows" />
            </div>            
            <div style={{ float:"right",width:"30px",height:"100px",backgroundColor:"#000080"}}>

            </div>

           <div style={{marginLeft:"auto",marginRight:"auto",paddingTop:"50px",width:"15em"}}>
               <p style={{fontWeight:"bold",fontSize:"20px"}}>About Anthony Briggs</p>
               <p style={{color:"#00008B"}}>Business Coach</p>
               <p>Lorem ipsum dolor sit amet, consectetur 
                   adipisicing elit. Numquam suscipit quia autem 
                   ipsa rerum excepturi voluptatem nam esse rem fugit,
                    expedita delectus optio ab nobis. Perferendis minus 
                    odio architecto veritatis.</p>

                <div style={{ width:"55%",display:"flex",alignItems:"center",justifyContent:"center",marginTop:"20px"}}>

                            <a style={{ color: "white", backgroundColor: "#000080" }} href="something" className="button3">Learn More</a>
                    </div>
            </div> 
            

        </div>
        <div style={{width:"100px",height:"300px",backgroundColor:"#DCDCDC",float:"right",marginTop:"70px"}}>

            </div>

    </div>
    )
}
export default Bottom;