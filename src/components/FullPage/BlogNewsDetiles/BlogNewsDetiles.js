import React from 'react';
import FakeData from '../../FakeData.json';
import BlogNews from '../BlogNews/BlogNews';
const BlogNewsDetiles = () => {
console.log(FakeData);
    return (
        <div className="newsCard">
        {
                FakeData.map((news) => <BlogNews news={news}></BlogNews>)
        }
        </div>
    );
};

export default BlogNewsDetiles;