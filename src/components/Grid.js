import React from 'react'
import Loading from './Loading'
import GridElement from './GridElement'

const Grid = ({isLoading,data,error, errorMessage,viewDetails,goBack}) => {
    if(isLoading || data === undefined){
        return <Loading/>    
    }

    if(error){
        return(
            <div className = "row justify-content-center" style={{marginTop:"100px"}}>
                <h1 style={{textAlign:"center"}}>{errorMessage}</h1>
            </div>
        )
    }

    const gridMenu = data.map(comic => {
        return(
            <div className="col-md-3" key={comic.id}>
                <GridElement comic={comic} viewDetails={viewDetails} />    
            </div>
        ) 
    }) 

    return(
        <div className="row" style={{marginTop:"100px"}} onLoad={goBack}>
            {gridMenu}
        </div>    
    )
}

export default Grid