import React, {useEffect, useState} from 'react'
import Newsitem from './Newsitem'
import './news.css'
import Spinner from './spinner';
import InfiniteScroll from 'react-infinite-scroll-component';


 const News = (props)=> {
 
const [articles, setArticles]=useState([])
const [totalResults, setResults]=useState(0)

const [page, setPage]=useState(1)





 
 
const  newsupdate = async ()=>
 {
   props.setProgress(20)

    let url=`https://newsapi.org/v2/top-headlines?&country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${page}&pageSize=${props.pagesize}`;
     props.setProgress(50)
let Response=await fetch(url);
let data=await Response.json();


props.setProgress(70)
setArticles(data.articles);
setResults(data.totalResults);



props.setProgress(100)
}
 const capt=(word)=>{

let low=word.toLowerCase();

return low.charAt(0).toUpperCase()+low.slice(1);

}
    
useEffect(()=>{
      document.title=`News Web-${capt(props.category)}`
    newsupdate();
},[])






const fetchMoreData  = async()=>{

 
let url=`https://newsapi.org/v2/top-headlines?&country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${page+1}&pageSize=${props.pagesize}`;
setPage(page+1);  
    let Response=await fetch(url);
    
    let data=await Response.json();
  
    setArticles(articles.concat(data.articles))
    setResults(data.totalResults)
    
    
  }

    return (
          
      <>

<h2>This is News Website - {props.category}</h2>
  
<InfiniteScroll

    dataLength={articles.length}
    next={fetchMoreData}
 
    hasMore={articles.length < totalResults}
   style={{scrollbarWidth:'none' }}
    loader={<Spinner/>}
     scrollableTarget="scrollableDiv" >

   { 



   articles.map((element,index)=>{
     

    return   <Newsitem key={index} title={element.title?element.title.slice(0,60):" "} description={element.description? element.description.slice(0,100):"Description is null" } url={element.urlToImage} href1={element.url}
   date={element.publishedAt} author={element.author?  element.author: 'unknown'} />
    })
   
}

</InfiniteScroll>  

</>

     
    )

  }
 
 export default News