/** @format */

import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useAxios } from "../api/api";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLike, removeLike } from "../store/likeSlice";
import { addToCart, removeFromCart } from "../store/shopSlice";

export default function ProductDetails() {
  const { id } = useParams();
  const axios = useAxios();
  const dispatch = useDispatch();
  const likedItems = useSelector((state) => state.like.likedItems);
  const cartItems = useSelector((state) => state.shop.cartItems);

  const [count, setCount] = useState(0);
  const { data, isLoading, error } = useQuery({
    queryKey: ["productDetails", id],
    queryFn: () => axios({ url: `products/${id}` }),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % data?.images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [data?.images?.length]);

  const isLiked = likedItems.some((item) => item.id === parseInt(id));
  const isInCart = cartItems.some((item) => item.id === parseInt(id));

  const handleLike = () => {
    if (isLiked) {
      dispatch(removeLike({ id: parseInt(id) }));
    } else {
      dispatch(addLike(data));
    }
  };

  const handleAddToCart = () => {
    if (isInCart) {
      dispatch(removeFromCart({ id: parseInt(id) }));
    } else {
      dispatch(addToCart({ ...data, quantity: 1 }));
    }
  };

  const handlePrevImage = () => {
    setCount((prevCount) => (prevCount - 1 + data?.images.length) % data?.images.length);
  };

  const handleNextImage = () => {
    setCount((prevCount) => (prevCount + 1) % data?.images.length);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading product</div>;

  return (
    <div className="p-6 max-w-6xl mx-auto bg-gray-900 text-white rounded-xl shadow-lg">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Side - Product Images */}
        <div className="w-full md:w-[30%]">
          <div className="relative">
            <button
              onClick={handlePrevImage}
              className="absolute p-2 top-1/2 left-2 transform -translate-y-1/2 bg-[rgba(0,0,255,0.5)] text-white rounded-full z-40 hover:bg-[rgba(0,0,255,1)] transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>

            <button
              onClick={handleNextImage}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-[rgba(0,0,255,0.5)] text-white p-2 rounded-full z-40 hover:bg-[rgba(0,0,255,1)] transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M9 5l7 7-7 7"></path>
              </svg>
            </button>

            <img
              className="w-full h-auto max-w-full max-h-full object-contain rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
              src={data?.images[count]}
              alt=""
            />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4">
            {data?.images.map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={image}
                  alt={`Product Image ${index + 1}`}
                  className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
                  onClick={() => setCount(index)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Product Details */}
        <div className=" w-full md:w-[70%]">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-100">{data?.title}</h1>
          <p className="text-lg text-gray-400 mt-2">{data?.description}</p>

          <div className="flex flex-col md:flex-row gap-4 mt-6 items-center">
            <span className="text-xl md:text-3xl font-semibold text-yellow-400">${data?.price} PRICE</span>
            <div className="flex gap-4 items-center">
            <button
              onClick={handleAddToCart}
              className={`bg-purple-600 text-white px-2 py-2 rounded-lg shadow-md hover:bg-purple-700 transition-all duration-200`}
            >
              {isInCart ? "Remove from Cart" : "Add to Cart"}
            </button>
            <button
              onClick={handleLike}
              className={`px-3 py-2 rounded-lg border-2 ${
                isLiked ? "bg-red-600 text-white" : "bg-gray-500 text-gray-200"
              }  border-none hover:bg-opacity-80 transition-all duration-300`}
            >
              {isLiked ? "Unlike" : "Like"}
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
