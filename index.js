import React from "react"
import ReactDOM from 'react-dom/client'

import App from "./App1"

import Globalstate from "./redux/Globalstate"
import App1 from "./App1"


const root=document.getElementById('root')
const virtualRoot=ReactDOM.createRoot(root)


virtualRoot.render(
   
    <App/>
)


root.render(
<Globalstate>
<App1 color={"yellow"}/>
</Globalstate>
    )

