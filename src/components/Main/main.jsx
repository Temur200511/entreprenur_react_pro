import '../Main/main.scss';
import React from "react"

import { useState, useEffect } from 'react';


function Main(){
    return(
        
  <main className='container'>
<h1>
    Make your website
</h1>
<h2>
    wonderful
</h2>

<h3>
Our landing page template works on all devices, so you only have to 
set it up once, and get beautiful results forever.
</h3>

<div id='div_btn'>

<button id='free_try'>
    Start free trial
</button>
<button id='learn'>
    Learn more
</button>
</div>

<div className='ill'>
<img id='illustrate' src="/assets/images/Illustration.png" alt="" />
<img id='videobtn' src="/assets/images/Button.png" alt="" />
</div>

<img id='big' src="/assets/images/Oval.png" alt="" />
<img id='small_oval'  src="/assets/images/Oval(1).png" alt="" />

        </main>
        
      
    )
}

export default Main