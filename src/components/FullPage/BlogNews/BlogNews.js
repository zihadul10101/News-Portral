import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

import './BlogNews.css';
import ReadMore from './ReadMore';

const BlogNews = (props) => {
    const {image,title,decription,auther} =props.news;
    
    return (
      <section >
      <div className="img-holder">
        <img src={image} alt="tour-img" />
      </div>
      <div className="container">
        <div className="title-price">
          <p>
            <strong>{title}</strong>
          </p>
     
        </div>
        <div className="tour-info">
        <ReadMore>
          {decription}
        </ReadMore>
        </div>
        
      </div>
    </section>
    );
};

export default BlogNews;