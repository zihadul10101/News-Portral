import React from 'react';
import Header from '../Header/Header';

import Footer from '../Footer/Footer';
import BlogNewsDetiles from '../BlogNewsDetiles/BlogNewsDetiles';
const Home = () => {
    return (
        <div>
          <Header></Header>
          <BlogNewsDetiles />  
          <Footer></Footer>
        </div>
    );
};

export default Home;