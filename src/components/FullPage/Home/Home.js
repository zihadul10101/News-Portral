import React from 'react';
import Footer from '../Footer/Footer';
import BlogNewsDetiles from '../BlogNewsDetiles/BlogNewsDetiles';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div>
          <Navbar />
          <BlogNewsDetiles />  
          <Footer/>
        </div>
    );
};

export default Home;