/** @format */

import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useSignLeData } from "../api/api";
import { useState, useEffect } from "react";

export default function ProductDetails() {
  const { id } = useParams();
  const axios = useSignLeData();
  const [count, setCount] = useState(0);
  const { data, isLoading, error } = useQuery({
    queryKey: ["productDetails", id],
    queryFn: () => axios({ url: `products/${id}` }),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % data?.images.length); // Har 3 soniyada rasmni o'zgartiradi
    }, 5000);

    return () => clearInterval(interval); // Komponent unmount bo'lsa intervalni to'xtatish
  }, [data?.images.length]);

  const [liked, setLiked] = useState(false);
  const [cart, setCart] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleAddToCart = () => {
    setCart(!cart);
  };

  // Image slider functions
  const handlePrevImage = () => {
    setCount((prevCount) => (prevCount - 1 + data?.images.length) % data?.images.length); // Orqaga rasmni o'tkazish
  };

  const handleNextImage = () => {
    setCount((prevCount) => (prevCount + 1) % data?.images.length); // Oldinga rasmni o'tkazish
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading product</div>;

  return (
    <div className='p-6 max-w-6xl mx-auto bg-gray-900 text-white rounded-xl shadow-lg'>
      <div className='flex gap-8'>
        {/* Left Side - Product Images */}
        <div className='w-1/3'>
          <div className="relative">
            {/* Minus button with left arrow */}
            <button 
              onClick={handlePrevImage} 
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-[rgba(0,0,255,0.5)] text-white p-2 rounded-full z-40 hover:bg-[rgba(0,0,255,1)] transition-all duration-300">
              <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 19L7 12L15 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Plus button with right arrow */}
            <button 
              onClick={handleNextImage} 
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-[rgba(0,0,255,0.5)] text-white p-2 rounded-full z-40 hover:bg-[rgba(0,0,255,1)] transition-all duration-300">
              <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5L17 12L9 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <img
              className='w-full h-auto max-w-full max-h-full object-contain rounded-lg shadow-lg hover:scale-105 transition-all duration-300'
              src={data?.images[count]} // Avtomatik ravishda o'zgartiradigan rasm
              alt=''
            />
          </div>

          {/* Below the slider - All Product Images */}
          <div className='mt-4 grid grid-cols-3 gap-4'>
            {data?.images.map((image, index) => (
              <div key={index} className='relative'>
                <img
                  src={image}
                  alt={`Product Image ${index + 1}`}
                  className='w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-all duration-300'
                  onClick={() => setCount(index)} // Qo'lda rasmni tanlash
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Product Details */}
        <div className='w-2/3'>
          <h1 className='text-4xl font-bold text-gray-100'>{data?.title}</h1>
          <p className='text-lg text-gray-400 mt-2'>{data?.description}</p>

          <div className='flex gap-6 mt-6 items-center'>
            <span className='text-3xl font-semibold text-yellow-400'>${data?.price}</span>
            <button
              onClick={handleAddToCart}
              className='bg-purple-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-700 transition-all duration-200'>
              {cart ? "Added to Cart" : "Add to Cart"}
            </button>
            <button
              onClick={handleLike}
              className={`px-6 py-3 rounded-lg border-2 ${liked ? "bg-red-600 text-white" : "bg-gray-500 text-gray-200"} border-gray-300 hover:bg-opacity-80 transition-all duration-300`}>
              {liked ? "Liked" : "Like"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
