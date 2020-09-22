import React, { useEffect } from 'react'
import Loading from './Loading'
import Error from './Error'
import GridElement from './GridElement'

const Grid = ({isLoading,data,error, errorMessage,viewDetails,goBack,searchFor}) => {

    useEffect(()=>{
        localStorage.setItem("urlDetails","")
    })
    
    if(isLoading || data === undefined){
        return <Loading/>    
    }

    if(error){
        return <Error errorMessage={errorMessage}/>
    }
    
    const comicsToDisplay = searchFor !== ""?
                            data.filter(comic => {
                                if(comic.name !== null){
                                    if(comic.name.toLowerCase().includes(searchFor)){
                                        return true
                                    }
                                }
                                return false
                            }) : data

    if(comicsToDisplay.length === 0){
        return(
            <div className="row justify-content-center" style={{marginTop:"100px",height:"100vh"}} onLoad={goBack}>
                <h1>Nothing Found</h1>
            </div>    
        ) 
    }

    const gridMenu = comicsToDisplay.map(comic => {
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