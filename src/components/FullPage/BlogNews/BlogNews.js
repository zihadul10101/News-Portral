import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import './BlogNews.css';
import './BlogNews.css';
import ReadMore from './ReadMore';

const BlogNews = (props) => {
  const { image, catagroy, title, auther, decription } = props.news;

  return (
    <div className="blog">
      {/* <!-- Section: Blog v.2 --> */}
      <section class="text-center my-5">

        {/* <!-- Section heading --> */}
        <h2 class="h1-responsive font-weight-bold my-5">Recent posts</h2>
        {/* <!-- Section description --> */}
        <p class="dark-grey-text w-responsive mx-auto mb-5">Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
          qui officia deserunt mollit anim id est laborum.</p>

        {/* <!-- Grid row --> */}
        <div class="row">

          {/* <!-- Grid column --> */}
          <div class="col-lg-4 col-md-12 mb-lg-0 mb-4">

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
            <p>by <a class="font-weight-bold">{auther}</a>, 15/07/2018</p>
            {/* <!-- Excerpt --> */}

            {/* <!-- Read more button --> */}
            <ReadMore>
              {decription}
            </ReadMore>

          </div>
          {/* <!-- Grid column -->

    <!-- Grid column --> */}
          <div class="col-lg-4 col-md-6 mb-md-0 mb-4">

            {/* <!-- Featured image --> */}
            <div class="view overlay rounded z-depth-2 mb-4">
              <img class={image} alt="Sample image" />
              <a>
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>
            {/* 
      <!-- Category --> */}
            <a href="#!" class="deep-orange-text">
              <h6 class="font-weight-bold mb-3"><i class="fas fa-graduation-cap pr-2"></i>{catagroy}</h6>
            </a>
            {/* <!-- Post title --> */}
            <h4 class="font-weight-bold mb-3"><strong>{title}</strong></h4>
            {/* <!-- Post data --> */}
            <p>by <a class="font-weight-bold">{auther}</a>, 13/07/2018</p>
            {/* <!-- Excerpt --> */}
            {/* <!-- Read more button --> */}
            <ReadMore>
              {decription}
            </ReadMore>

          </div>
          {/* <!-- Grid column -->

    <!-- Grid column --> */}
          <div class="col-lg-4 col-md-6 mb-0">

            {/* <!-- Featured image --> */}
            <div class="view overlay rounded z-depth-2 mb-4">
              <img class="img-fluid" src={image} alt="Sample image" />
              <a>
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>

            {/* <!-- Category --> */}
            <a href="#!" class="blue-text">
              <h6 class="font-weight-bold mb-3"><i class="fas fa-fire pr-2"></i>{catagroy}</h6>
            </a>
            {/* <!-- Post title --> */}
            <h4 class="font-weight-bold mb-3"><strong>{title}</strong></h4>
            {/* <!-- Post data --> */}
            <p>by <a class="font-weight-bold">{auther}</a>, 11/07/2018</p>
            {/* <!-- Excerpt --> */}

            {/* <!-- Read more button --> */}

            <ReadMore>
              {decription}
            </ReadMore>
          </div>
          {/* <!-- Grid column --> */}

        </div>
        {/* <!-- Grid row --> */}

      </section>
      {/* <!-- Section: Blog v.2 --> */}
    </div>
  );
};

export default BlogNews;