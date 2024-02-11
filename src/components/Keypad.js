import React from "react";
// Code Keypad Component Here
function HandleChange(event) {
    console.log('Entering password...')
}

function Keypad (){
    return (
        <div>
            <input 
            type="password" 
            onChange={HandleChange}
            />
        </div>
    )
}

export default Keypad;