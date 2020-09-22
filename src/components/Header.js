import React from 'react'
import {Link} from 'react-router-dom'
import { BsList,BsGrid3X3GapFill } from "react-icons/bs"

const Header = ({details,menuColors,viewHome,toggleSelected,setFilter}) => {
    if(details){
        return(
            <div>
                <Link to="/" onClick={viewHome} style={{textAlign:"center",color:"black"}} ><h1 style={{fontFamily:"Monospace"}}>ComicBook</h1></Link>
            </div>
        ) 
    }
    const fontStyle = {
        fontFamily:"Monospace"
    }

    const colorList = menuColors.list
    const colorGrid = menuColors.grid

    return(
        <div>
            <Link to="/" onClick={viewHome} style={{textAlign:"center",color:"black"}} ><h1 style={{fontFamily:"Monospace"}}>ComicBook</h1></Link>
            <div className="row border-right border-left mt-4 div-header justify-content-center" >
                <div className="col-md-2 col-sm-12 col-12">
                    <p style={fontStyle}><b>Latest Issues</b></p>
                </div>
                <div className="offset-md-5 col-md-2 col-sm-12 col-12 ">
                    <input type="text" id="searchFor" name="searchFor" placeholder="Search For.." onChange={setFilter}/>
                </div>
                <div className="col-md-2 col-sm-12 col-12 ml-2">
                    <p style={fontStyle}>
                        &nbsp;&nbsp;
                        <Link to="/list" id="list" style={{color:colorList}} onClick={toggleSelected} ><BsList/>List</Link>
                        &nbsp;
                        <Link to="/" id="grid" style={{color:colorGrid}} onClick={toggleSelected}><BsGrid3X3GapFill/>Grid</Link>
                    </p>
                </div>
            </div>
        </div>

    ) 
}

export default Header