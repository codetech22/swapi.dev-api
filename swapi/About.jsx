import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'

const About = () => {
  return (
    <div style={{backgroundColor:"pink",height:"4200px",width:"1458px",border:"1px solid black",display:"flex",justifyContent:"center",position:"absolute",left:"0px"}}>
 <h1 style={{position:"absolute",top:"200px",fontSize:"100px",color:"purple"}}>Details Not Found..</h1>
      <Link to="/home" style={{padding:"70px",color:"red",fontSize:"30px"}}><b>Home</b></Link>
      <Link to="/about" style={{padding:"70px",color:"red",fontSize:"30px"}}><b>Click here for more</b></Link>      
    </div>
  )
}

export default About
