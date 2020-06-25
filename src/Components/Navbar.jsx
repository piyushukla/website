import React from 'react';
import { createElement } from 'react';


function Navbar(){

    return(

    <nav className="navbar navbar-expand-sm" style={{backgroundColor:"#F0F0F0"}}>

       <a className="navbar-brand" href="#" style={{marginLeft:"110px"}}>Business Coach</a>
   
  
  <ul className="navbar-nav ml-auto " style={{marginRight:"60px"}}>
    <li className="nav-item">
      <a className="nav-link ml-auto" href="#">Link 1</a>
    </li>
    <li className="nav-item">
      <a className="nav-link ml-auto" href="#">Link 2</a>
    </li>
    <li className="nav-item">
      <a className="nav-link ml-auto" href="#">Link 3</a>
    </li>
    <li className="nav-item">
      <a className="nav-link ml-auto" href="#">Link 4</a>
    </li>    
    <li className="nav-item">
      <a className="nav-link ml-auto" href="#">Link 5</a>
    </li>
  </ul>
</nav>




        // <div style={{ width: "100%",height:"80px" ,backgroundColor:"#F0F0F0",top:0,padding:0,margin:0,position:"fixed"}}> 

        //     <div classNameName="Tagline" style={{paddingTop:"20px"}} >
        //          <h4 style={{width:"27%",textAlign:"center"}}>Business Coach</h4>
        
        //         <ul style={{ paddingRight:"100px",marginTop:"-44px",display:"flex",float:"right",paddingTop:"12px" }}>
        //             <li style={{listStyle:"none",color:"blue"}}>Home</li>
        //             <li style={{ listStyle: "none", paddingLeft:"20px" }}>Home</li>
        //             <li style={{ listStyle: "none", paddingLeft: "20px" }}>Home</li>
        //             <li style={{ listStyle: "none", paddingLeft: "20px" }}>Home</li>
        //             <li style={{ listStyle: "none", paddingLeft: "20px" }}>Home</li>
        //             <li style={{ listStyle: "none", paddingLeft: "20px" }}>Home</li>
        //             <i classNameName="fa fa-search" aria-hidden="true"></i>
        //         </ul>
            
        //     </div>     
        // </div>
    )

}
export default Navbar;