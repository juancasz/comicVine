import React from 'react'
import Loading from './Loading'

const ListElement = ({comic,viewDetails}) => {
    if(comic === undefined){
        return <Loading/>
    }

    const date = new Date(comic.date_added).toDateString().split(' ').slice(1).join(' ')

    return(
        <div className="media position-relative" onClick={viewDetails}>
            <img className="align-self-center img-border" src={comic.image.original_url} alt="Comic Image" height="375" width="250"></img>
            <div className="media-body">
                <h6 className="mt-2" style={{textAlign:"center"}}>{comic.name} #{comic.issue_number}</h6>
                <h6 className="text-muted" style={{textAlign:"center"}}>{date}</h6>
                <a id={comic.api_detail_url} href="#" className="stretched-link"></a>
            </div>
        </div>
    )
}

export default ListElement