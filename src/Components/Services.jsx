import React from 'react'
import './Header.css'



function Services(){



    return (

        <div style={{ width:"100%",height: "100%", top: "0", padding: 0, margin: 0,marginTop:"20px"}}>
        <div style={{textAlign:"center"}}>

            <h3 style={{ fontFamily: 'Hind Siliguri, sans- serif', fontSize: "25px"}}>My Coaching Services</h3>
        </div>
        
            <div style={{ margin: "auto", width: "50%", boxShadow: "10px 15px 15px 	#A9A9A9" }}>  
     
        <div style={{ display: "flex",marginTop:"25px"}}>
           <div style={{width:"170px",height:"150px",textAlign:"center",borderRadius:"1px solid #F0FFF0",backgroundColor:"#F5F5F5"}} >

                   <div style={{marginTop:"35%"}}>    
                       <img src="/assets/brain.png" alt="brain" style={{width:"25px",height:"25px"}}/>
                       <p style={{color:"#0000CD"}}>Visioning</p>
                  </div>
           </div> 
                    <div style={{ width: "170px", height: "150px",borderRadius:"1px  #DCDCDC", backgroundColor: "#F7F0EE",textAlign:"center" }} >
                       <div style={{marginTop:"35%"}}> 
                        <img src="/assets/brain.png" alt="brain" style={{width:"25px",height:"25px"}}/>
                       <p style={{color:"#0000CD"}} >Planning</p>
                      </div> 
                    
           </div>
                    <div style={{ width: "170px", height: "150px", borderRadius:"1px solid #D3D3D3 " ,backgroundColor:"#FCF9E9	",textAlign:"center" }} >
                      <div style={{marginTop:"35%"}}>
                        <img src="/assets/brain.png" alt="brain" style={{width:"25px",height:"25px"}}/>
                        <p style={{color:"#0000CD"}}>Research</p>
                    </div>
           </div>  
                    <div style={{ width: "170px", height: "150px",borderRadius:"1px #C0C0C0" ,backgroundColor:"#F8F8FF",textAlign:"center" }} >

                     <div style={{marginTop:"35%"}}>   
                        <img src="/assets/brain.png" alt="brain" style={{width:"25px",height:"25px"}}/>    
                        <p style={{color:"#0000CD"}}>Networking</p>
                    </div>
           </div>
        </div> 
                <div style={{ display: "flex" }}>
                    <div style={{ width: "170px", height: "150px",textAlign:"center",borderRadius:"1px #0000CD" }} >

                       <div style={{marginTop:"35%"}}> 
                           <img src="/assets/brain.png" alt="brain" style={{width:"25px",height:"25px"}}/>   
                           <p style={{color:"#0000CD"}}>Branding</p>
                      </div> 
           </div>
                    <div style={{ width: "170px", height: "150px", backgroundColor:"#FDFCE8",textAlign:"center",borderRadius:"1px #DCDCDC" }} >

                     <div style={{marginTop:"35%"}}>  
                       <img src="/assets/brain.png" alt="brain" style={{width:"25px",height:"25px"}}/>   
                        <p style={{color:"#0000CD"}}>Marketing</p>
                    </div>
           </div>
                    <div style={{ width: "170px", height: "150px",  backgroundColor:"#F3F3F1",textAlign:"center",borderRadius:"1px #D3D3D3" }} >
                      <div style={{marginTop:"35%"}}>  
                        <img src="/assets/brain.png" alt="brain" style={{width:"25px",height:"25px"}}/>
                        <p style={{color:"#0000CD"}}>Hiring</p>
                    </div>
           </div>
                    <div style={{ width: "170px", height: "150px",  backgroundColor:"#FDF5E6",textAlign:"center",borderRadius:"1px #C0C0C0"}} >
                        <div style={{marginTop:"35%"}}>
                            <img src="/assets/brain.png" alt="brain" style={{width:"25px",height:"25px"}}/>
                             <p style={{color:"#0000CD"}}>Operation</p>
                        </div>
           </div>
                </div> 
        </div>
               <div style={{ width:"100%",display:"flex",alignItems:"center",justifyContent:"center",marginTop:"35px"}}>

                            <a style={{ color: "white", backgroundColor: "#000080" }} href="something" className="button3">About Me</a>
                    </div>
 
    </div>
    )

}
export default Services