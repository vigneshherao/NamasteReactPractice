import React from "react";
import ReactDOM from "react-dom/client";



const Heading =function head(){
    return ( 
     <div>
        <h1>This is new</h1>
        <h3>This is child of new </h3>
    </div>
)};



const root = ReactDOM.createRoot(document.getElementById("rootDiv"));

root.render(Heading);