import React, { useEffect } from 'react'
import Loading from './Loading'
import Error from './Error'
import GridElement from './GridElement'

const Grid = ({isLoading,data,error, errorMessage,viewDetails,goBack}) => {

    useEffect(()=>{
        localStorage.setItem("urlDetails","")
    })
    
    if(isLoading || data === undefined){
        return <Loading/>    
    }

    if(error){
        return <Error errorMessage={errorMessage}/>
    }

    const gridMenu = data.map(comic => {
        return(
            <div className="col-md-3 col-sm-6 col-6" key={comic.id}>
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