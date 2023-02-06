import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./index.scss"

function Navbar() {
    return (
        <div className='mainNav'>
            <div id='container'>
                <div className='navBox'>
                    <div className='navLogo'>
                        <Link to={"/"}><h1>blau.</h1></Link>
                        <NavLink to={"/films"}>Films</NavLink>
                        <NavLink to={"/tvshow"}>Tv Shows</NavLink>
                    </div>
                    <div className='navInp'>
                        <input className='input' type="text" name="search" placeholder='search...'/>
                        <button className='navBtn'>Sing in </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar