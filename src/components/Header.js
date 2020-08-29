import React from 'react'
import { BsList,BsGrid3X3GapFill } from "react-icons/bs";

const Header = ({toggler,grid}) => {
    const fontStyle = {
        fontFamily:"Monospace"
    }
    const colorList = grid? "green":"black"
    const colorGrid = grid? "black":"green"
    return(
        <div>
            <h1 style={{textAlign:"center",fontFamily:"Monospace"}}>ComicBook</h1> 
            <div className="row border-right border-left mt-4 div-header" >
                <div className="col-md-2 ">
                    <p style={fontStyle}><b>Latest Issues</b></p>
                </div>
                <div className="offset-md-8 col-md-2 pl-4">
                <p style={fontStyle}>
                    &nbsp;&nbsp;
                    <a id="list" style={{color:colorList}} href="#" onClick={toggler}><BsList/>&nbsp;List</a>
                    &nbsp;&nbsp;&nbsp;
                    <a id="grid" style={{color:colorGrid}} href="#" onClick={toggler}><BsGrid3X3GapFill/>&nbsp;Grid</a>
                </p>
                </div>
            </div>
        </div>
    )
}

export default Header