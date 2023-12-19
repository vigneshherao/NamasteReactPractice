import React from "react";
import ReactDOM from "react-dom/client";



const Heading = ()=>{
    return ( 
     <div>
        <h1>This is new</h1>
        <h3>This is child of new </h3>
    </div>
)};


const NewParaComponent = ()=>{
    return (
        <div>
            <Heading/>
            <p>This is paragraph</p>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("rootDiv"));

root.render(<NewParaComponent/>);