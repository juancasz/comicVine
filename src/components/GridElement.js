import React from 'react'
import Loading from './Loading'
import {Link} from 'react-router-dom'

const GridElement = ({comic,viewDetails}) => {
    if(comic === undefined ){
        return <Loading/>
    }

    const date = new Date(comic.date_added).toDateString().split(' ').slice(1).join(' ')

    return(
        <Link to={`/${comic.id}`} onClick={viewDetails} id={comic.api_detail_url} style={{color:"black"}} >
            <div className="card border-0 ">
                <img className="img-fluid card-img-top img-border" src={comic.image.original_url} alt="Comic" height="350"></img>
                <div className="card-body">
                    <h6 className="card-title" style={{textAlign:"center"}}>{comic.name} #{comic.issue_number}</h6>
                    <h6 className="card-subtitle mb-2 text-muted" style={{textAlign:"center"}}>{date}</h6>
                </div>
            </div>
        </Link>
    )
}

export default GridElement