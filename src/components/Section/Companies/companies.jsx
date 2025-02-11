import '../Companies/companies.scss'
import React from "react";


function Companies(){


    return(
<div className='companies container'>

<h1>
Trusted by over 20,000 companies all over the world
</h1>

<p className='px_20'>
Arcu cursus vitae congue mauris rhoncus viverra nibh cras pulvinar mattis 
blandit libero cursus mattis.
</p>

<div className='logos'>
    <img src="/assets/images/Shape.png" alt="" />
    <img src="/assets/images/Shape(1).png" alt="" />
    <img src="/assets/images/Shape(2).png" alt="" />
    <img src="/assets/images/Shape.png" alt="" />
    <img src="/assets/images/Shape(1).png" alt="" />
</div>

<div className='ceo'> 
<img src="/assets/icons/ava.png" alt="" />

<p className='px_20'>“ I love this product and would recommend it to anyone. Could be not easier to use, and our multiple websites are wonderful. We get nice comments all the time. “</p>
<p className='px_20'>Darya Finger</p>
<p className='co'> Ceo & Co founder <a href="#">@Dropbox</a></p>
</div>

<div className='text_d'>
<img src="/assets/images/Bg.png" alt="" />
<img className='text' src="/assets/images/Text.png" alt="" />
</div>


</div>
    )
    


}

export default Companies