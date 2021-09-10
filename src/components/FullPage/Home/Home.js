import React from 'react';
import Footer from '../Footer/Footer';
import BlogNewsDetiles from '../BlogNewsDetiles/BlogNewsDetiles';
import NewsSlider from '../NewsSlider/NewsSlider';
import Navbar from '../Navbar/Navbar';



const Home = () => {
    return (
        <div>
          <Navbar />
          <NewsSlider />
          <BlogNewsDetiles />  
          <Footer/>
        </div>
    );
};

export default Home;