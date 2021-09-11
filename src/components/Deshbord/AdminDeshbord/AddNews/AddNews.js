import React from 'react';
import axios from 'axios';
import  { useState } from 'react';
import { useForm } from 'react-hook-form';
import './AddNews.css';
const AddNews = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
 
  const [imageUrl, setImageUrl] = useState(null);
  const onSubmit = data => {
    console.log(data)
    const serviceData = {
      title: data.title,
      imageUrl: imageUrl,
      catagroy: data.catagroy,
      author:data.author,
      decription:data.decription
    };
    const url = `http://localhost:5000/news`;

    console.log(serviceData);
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(serviceData)
    })
      .then(res => res.json())
      .then(data => console.log(data))

  };

  const handleImageUpload = (event) => {
    console.log(event.target.files);
    const imageData = new FormData();
    imageData.set('key', '169c06cd08fc190c1c2dee2a05effaf1')
    imageData.append('image', event.target.files[0])

    axios.post('https://api.imgbb.com/1/upload',
      imageData)
      .then(function (response) {
        // console.log(response.data.data.delete_url);
        setImageUrl(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
    return (
        <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB", textAlign: "center" }}>
        <h5 className="text-brand">Add A Hot News</h5>
        <form onSubmit={handleSubmit(onSubmit)}>
          Title:
          <input {...register("title", { required: true })} />
          {errors.title && <span>This field is required</span>}
          <br />
          <br />
          Catagroy:
          <input {...register("catagroy", { required: true })} />
          {errors.catagroy && <span>This field is required</span>}
          <br />
          <br />
          Author:
          <input {...register("author", { required: true })} />
          {errors.author && <span>This field is required</span>}
          <br />
          <br />
          Decription:
          <input {...register("decription", { required: true })} />
          {errors.decriptionr && <span>This field is required</span>}
          <br />
          <br />
           Image:
           {/* onChange={handleImageUpload} */}
          <input name="image" type="file"  />
          {errors.image && <span>This field is required</span>}
          <br />
          <br />
     
          <input type="submit" />
        </form>

      </div>
    );
};

export default AddNews;