import React from 'react'

const DataElement = ({urlImage,name}) => {
    return(
        <div className="col-md-6 col-sm-12 mt-3" >
            <img className="rounded img-fluid" src={urlImage} alt="Character" height="25" width="25"></img><span className="ml-3" style={{color:"green"}}>{name}</span>
        </div>
    )
}

export default DataElement