
import React from 'react'
import {data} from './comp/api'
import {data1} from './comp/details'
import './api.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './swapi/Home'
import About from './swapi/About'

const App1 = () => {
  return (

    
    <div id='main' style={{width:"1460px"}}>
      {
        data.map((ele,index)=>(
            <div className='box' id={index}>
            <p><b>1. Name</b>:<b style={{color:"purple"}}>{ele.name}</b></p>
            <p><b>2. Height</b>:<b style={{color:"purple"}}>{ele.height}</b></p>
            <p><b>3. Mass</b>:<b style={{color:"purple"}}>{ele.mass}</b></p>
            <p><b>4. HairColor</b>:<b style={{color:"purple"}}>{ele.hair_color}</b></p>
            <p><b>5. SkinColor</b>:<b style={{color:"purple"}}>{ele.skin_color}</b></p>
            <p><b>6. EyeColor</b>:<b style={{color:"purple"}}>{ele.eye_color}</b></p>
            <p><b>7. BirthYear</b>:<b style={{color:"purple"}}>{ele.birth_year}</b></p>
            <p><b>8. Gender</b>:<b style={{color:"purple"}}>{ele.gender}</b></p>
            <p><b>9. HomeWorld</b>:<b style={{color:"purple"}}>{ele.homeworld}</b></p>
            <p><b>10. Flims</b>:<b style={{color:"purple"}}>{ele.films}</b></p>
            <p><b>11. Species</b>:<b style={{color:"purple"}}>{ele.species}</b></p>
            <p><b>12. Vehicles</b>:<b style={{color:"purple"}}>{ele.vehicles}</b></p>
            <p><b>13. starships</b>:<b style={{color:"purple"}}>{ele.starships}</b></p>
            <p><b>14. created</b>:<b style={{color:"purple"}}>{ele.created}</b></p>
            <p><b>15. edited</b>:<b style={{color:"purple"}}>{ele.edited}</b></p>
            <p><b>16. url</b>:<b style={{color:"purple"}}>{ele.url}</b></p>
              </div>
        ))        
      }

<BrowserRouter>
       <Routes>
         <Route path="/next" element={<Home/>}>Home</Route>
         <Route path="/About" element={<About/>}>About</Route>
       </Routes>
      </BrowserRouter>
      </div> 
  )
}


export default App1





