import '../Footer/footer.scss'
import React from "react";


function Footer(){

    return(

        <footer className='container'> 
    
    <img className='line' src="/assets/images/Bg(1).png" alt="" />
     
     <div className='footer_div'>

<div className='terms'>
<img src="/assets/icons/Logo.svg" alt=""/>
<a href="#">Terms · Privacy Policy</a>
</div>

<div className='products'> 
<h3>Products</h3>

<a href="#">
Web Studio
</a>
<a href="#">
DynamicBox Flex
</a>
<a href="#">
Web Studio
</a>
<a href="#">
DynamicBox Flex
</a>
<a href="#">
Web Studio
</a>

</div>

<div className='resources'>
<h3>Documentation</h3>
<a href="#">Tutorials & Guides</a>
<a href="#">Documentation</a>
<a href="#">Documentation</a>
<a href="#">Blog</a>
</div>

<div className='company'>
    <h3>Company</h3>
    <a href="#">HOme</a>
    <a href="#">Company values</a>
    <a href="#">About us</a>
    <a href="#">About us</a>
    <a href="#">About us</a>
</div>

<div className='subscribe'>
    <h3>Subscribe</h3>
    <a href="#">Get the latest news and articles to your inbox every month.</a>
 
 <form>
 <input type="email" placeholder='Your email'/>
<button><img src="/assets/images/Icon(1).png" alt="" /></button>
 </form>
</div>


     </div>

     <img className='line' src="/assets/images/Bg(1).png" alt="" />

 <div className='rights'>
    <p>Made by <a href="#">Crup</a>. All rights reserved.</p>

    <div className='social_m'>
        <img src="/assets/icons/1.png" alt="" />
        <img src="/assets/icons/2.png" alt="" />
        <img src="/assets/icons/3.png" alt="" />
    </div>
 </div>





        </footer>





    )


}

export default Footer