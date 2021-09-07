import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

import './BlogNews.css';
import ReadMore from './ReadMore';

const BlogNews = (props) => {
  const { image, title, decription, auther } = props.news;

  return (
    <div className="row">
      <div className="d-flex">

        <div className="img-holder">
          <img src={image} alt="" />
        </div>
        <div className="container">
          <div className="title-price">
            <p>
              <strong>{title}</strong>
              <h6>{auther}</h6>
            </p>
         

          </div>
          <div className="tour-info">
            <ReadMore>
              {decription}
            </ReadMore>
          </div>

        </div>

      </div>
    </div>
  );
};

export default BlogNews;