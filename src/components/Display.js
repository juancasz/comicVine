import React from 'react'
import GridElement from './GridElement'
import ListElement from './ListElement'

const Display = ({isLoading,data,grid,error}) =>{
    if(isLoading || data === undefined){
        return(
            <div className = "row justify-content-center" style={{marginTop:"100px"}}>
                <div class="spinner-border" style={{width:"100px",height:"100px"}} role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        )
    }

    if(error){
        return(
            <div className = "row justify-content-center" style={{marginTop:"100px"}}>
                <h1 style={{textAlign:"center"}}>There was an error fetching the data from the server, data not found</h1>
            </div>
        )
    }

    if(grid){
        const gridMenu = data.map(comic => {
            return(
                <div className="col-md-3" key={comic.id}>
                    <GridElement comic={comic}/>    
                </div>
            ) 
        })  
        
        return(
            <div className="row" style={{marginTop:"100px"}}>
                {gridMenu}
            </div>    
        )
    }

    const ListMenu = data.map(comic => {
        return(
            <div className="offset-md-1 col-md-10" key={comic.id}>
                <ListElement comic={comic}/>    
            </div>
        ) 
    })  

    return(
        <div className="row" style={{marginTop:"50px"}}>
            {ListMenu}
        </div>
    )
}

export default Display