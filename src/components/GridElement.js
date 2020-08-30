import React from 'react'
import Loading from './Loading'

const GridElement = ({comic,viewDetails}) => {
    if(comic === undefined ){
        return <Loading/>
    }

    const date = new Date(comic.date_added).toDateString().split(' ').slice(1).join(' ')

    return(
        <div className="card border-0 " onClick={viewDetails} >
            <img className="card-img-top img-border" src={comic.image.original_url} alt="Comic Image" height="350"></img>
            <div className="card-body">
            <h6 className="card-title" style={{textAlign:"center"}}>{comic.name} #{comic.issue_number}</h6>
            <h6 className="card-subtitle mb-2 text-muted" style={{textAlign:"center"}}>{date}</h6>
            <a id={comic.api_detail_url} href="#" className="stretched-link"></a>
            </div>
        </div>
    )
}

export default GridElement