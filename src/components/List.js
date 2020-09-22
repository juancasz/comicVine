import React,{ useEffect } from 'react'
import Loading from './Loading'
import Error from './Error'
import ListElement from './ListElement'

const List = ({isLoading,data,error, errorMessage,viewDetails,goBack,searchFor}) => {

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

    const ListMenu = comicsToDisplay.map(comic => {
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