import React from 'react'
import Loading from './Loading'
import ListElement from './ListElement'

const List = ({isLoading,data,error, errorMessage,viewDetails,goBack}) => {
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

    const ListMenu = data.map(comic => {
        return(
            <div className="offset-md-1 col-md-10" key={comic.id}>
                <ListElement comic={comic} viewDetails={viewDetails}/>    
            </div>
        ) 
    })  

    return(
        <div className="row" style={{marginTop:"50px"}} onLoad={goBack}>
            {ListMenu}
        </div>
    )
}

export default List