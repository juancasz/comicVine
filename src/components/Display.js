import React from 'react'
import GridElement from './GridElement'
import ListElement from './ListElement'
import Loading from './Loading'

const Display = ({isLoading,data,grid,error, errorMessage,viewDetails,details}) =>{
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

    if(details){
        return(
            <div>
                Hola
            </div>
        )
    }

    if(grid){
        const gridMenu = data.map(comic => {
            return(
                <div className="col-md-3" key={comic.id}>
                    <GridElement comic={comic} viewDetails={viewDetails} />    
                </div>
            ) 
        })  
        
        return(
            <div className="row" style={{marginTop:"100px"}}>
                {gridMenu}
            </div>    
        )
    }else{
        const ListMenu = data.map(comic => {
            return(
                <div className="offset-md-1 col-md-10" key={comic.id}>
                    <ListElement comic={comic} viewDetails={viewDetails}/>    
                </div>
            ) 
        })  
    
        return(
            <div className="row" style={{marginTop:"50px"}}>
                {ListMenu}
            </div>
        )
    }
}

export default Display