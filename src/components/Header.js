import React from 'react'

const Header = ({viewHome}) => {
    return <a onClick={viewHome} style={{textAlign:"center",color:"black"}} href="#"><h1 style={{fontFamily:"Monospace"}}>ComicBook</h1></a>
}

export default Header