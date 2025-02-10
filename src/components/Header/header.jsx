import { useState, useEffect } from 'react';
import '../Header/header.scss'
import React from "react"


const Header = () => {
    
return(
    <header className='container'>
      
    <a href="#">
    <img src="/assets/icons/Logo.svg" alt="Logo" />

    
    </a>
    <div className='button_div'>
        <button>
            Sign in
        </button>

        <button>
            Sign up
            <img src="/assets/icons/Path.png" alt=""/>
        </button>

    </div>


    </header>
    
    )
}


























export default Header;