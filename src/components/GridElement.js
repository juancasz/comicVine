import React from 'react'

const GridElement = ({comic}) => {
    if(comic === undefined ){
        return(
            <div className = "row justify-content-center" style={{marginTop:"100px"}}>
                <div class="spinner-border" style={{width:"100px",height:"100px"}} role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        )
    }

    const date = new Date(comic.date_added).toDateString().split(' ').slice(1).join(' ')

    return(
        <div className="card border-0">
            <img className="card-img-top img-border" src={comic.image.original_url} alt="Comic Image" height="350"></img>
            <div className="card-body">
            <h6 className="card-title" style={{textAlign:"center"}}>{comic.name} #{comic.issue_number}</h6>
            <h6 className="card-subtitle mb-2 text-muted" style={{textAlign:"center"}}>{date}</h6>
            </div>
        </div>
    )
}

export default GridElement