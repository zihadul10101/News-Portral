import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import './BlogNews.css';
import './BlogNews.css';
import ReadMore from './ReadMore';

const BlogNews = (props) => {
  const { image, catagroy, title, author, decription } = props.news;

  return (

  

   
      <div class="col-lg-4 col-md-4 mb-lg-0 mb-4">

        {/* <!-- Featured image --> */}
        <div class="view overlay rounded z-depth-2 mb-4">
          <img class="img-fluid" src={image} alt="Sample image" />
          <a>
            <div class="mask rgba-white-slight"></div>
          </a>
        </div>

        {/* <!-- Category --> */}
        <a href="#!" class="pink-text">
          <h6 class="font-weight-bold mb-3"><i class="fas fa-map pr-2"></i>{catagroy}</h6>
        </a>
        {/* <!-- Post title --> */}
        <h4 class="font-weight-bold mb-3"><strong>{title}</strong></h4>
        {/* <!-- Post data --> */}
        <p>by <a class="font-weight-bold">{author}</a>, 15/07/2018</p>
        {/* <!-- Excerpt --> */}

        {/* <!-- Read more button --> */}
        <ReadMore>
          {decription}
        </ReadMore>

      </div>


  );
};

export default BlogNews;