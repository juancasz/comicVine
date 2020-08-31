import React from 'react'
import Loading from './Loading'
import Error from './Error'
import ListElement from './ListElement'

const List = ({isLoading,data,error, errorMessage,viewDetails,goBack}) => {
    if(isLoading || data === undefined){
        return <Loading/>    
    }

    if(error){
        return <Error errorMessage={errorMessage}/>
    }

    const ListMenu = data.map(comic => {
        return(
            <div className="offset-md-1 col-md-10 col-sm-12 col-12" key={comic.id}>
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