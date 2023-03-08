import React from 'react'

const NavBar = () => {
    let titles = ['Home', 'Catalog', 'About us', 'Contact']
    return (
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
             {titles.map((title, index) => <p key={index}>{title}</p>)}
        </div>
    )
}

export default NavBar