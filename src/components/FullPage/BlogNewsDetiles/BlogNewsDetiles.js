import React from 'react';
import FakeData from '../../FakeData.json';
import BlogNews from '../BlogNews/BlogNews';
import './BlogNewsDetiles.css';
const BlogNewsDetiles = () => {
console.log(FakeData);
    return (
        <section class="text-center my-5">
            
       <div className="row" >
       {
                FakeData.map((news) => <BlogNews news={news}></BlogNews>)
        }
       </div>
        </section>
    );
};

export default BlogNewsDetiles;