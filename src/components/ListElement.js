import React from 'react'

const ListElement = ({comic}) => {
    if(comic === undefined){
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
        <div className="media">
            <img className="align-self-center img-border" src={comic.image.original_url} alt="Comic Image" height="375" width="250"></img>
            <div className="media-body">
                <h6 className="mt-2" style={{textAlign:"center"}}>{comic.name} #{comic.issue_number}</h6>
                <h6 className="text-muted" style={{textAlign:"center"}}>{date}</h6>
            </div>
        </div>
    )
}

export default ListElement