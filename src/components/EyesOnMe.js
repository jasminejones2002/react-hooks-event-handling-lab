import React from "react";
// Code EyesOnMe Component Here
function HandleFocus(event) {
    console.log('Good!')
}

function HandlebBlur(event) {
    console.log('Hey! Eyes on me!')
}

function EyesOnMe() {
    return (
        <button
        onFocus={HandleFocus}
        onBlur={HandlebBlur}
        >Eyes on me</button>
    )
}

export default EyesOnMe
