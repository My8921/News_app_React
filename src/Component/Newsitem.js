

import React  from 'react'
import './item.css'
 const Newsitem = (props)=> {





  
    let {title,description,url,href1,author,date}=props;
    return (
     
   <div className="items">

<div className="image">
<img style={{height:'198px', width:'350px'}} src={url? url:'https://images.wondershare.com/repairit/aticle/2021/07/resolve-images-not-showing-problem-1.jpg'} alt="" srcet="" />

</div>

<h5>{title}</h5>
<p>{description}....</p>
<br />
<pre>
  <p>
Author: {author} on <br /> {new Date(date).toGMTString()}  </p>
</pre>

<button>
  
<a href={href1}>Read More </a>
     </button>
   </div>
  
    )
  }

export default  Newsitem