import React from 'react'

const Error = ({errorMessage}) =>{
    return(
        <div className = "row justify-content-center" style={{marginTop:"100px"}}>
            <h1 style={{textAlign:"center"}}>{errorMessage}</h1>
        </div>
    )
}

export default Error