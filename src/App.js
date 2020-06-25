import React from 'react';
import Nav from './Components/Navbar'
import Head from './Components/Heading'
import Services from './Components/Services'
import Business from './Components/Business'
import Bottom from './Components/Bottom'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
      
      <Nav />
      <Head />
      <Services />
      <Business />
      <Bottom />
    </div>
  );
}

export default App;
