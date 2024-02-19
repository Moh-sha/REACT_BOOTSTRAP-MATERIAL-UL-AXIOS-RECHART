import React, { Fragment, useEffect, useState } from 'react';
import News from '../News/News'
import Header from '../Header/Header';
const Topheadline = () => {
   const [articles,SetNews] = useState([]);
   useEffect(()=>{

        const url ="https://newsapi.org/v2/top-headlines?country=us&apiKey=062a0c49203c44ba83eae5480ab00864";
        fetch(url).then(response =>response.json()).then(data=>SetNews(data.articles));


   },[]);
   
   
    return (
        <div>
            <h1>Top Heading news {articles.length}</h1>
            {
              articles.map(art => <News articles={articles}></News>)

            }

        <Fragment></Fragment>
          
        </div>
    );
};

export default Topheadline;