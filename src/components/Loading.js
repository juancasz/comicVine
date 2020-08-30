import React from 'react'

const Loading = () => {
    return(
        <div className = "row justify-content-center" style={{marginTop:"100px"}}>
            <div className="spinner-border" style={{width:"100px",height:"100px"}} role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default Loading