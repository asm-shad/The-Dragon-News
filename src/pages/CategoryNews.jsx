import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCart from "../components/NewsCart";

const CategoryNews = () => {
  const { data: news } = useLoaderData();
  console.log(news);
  return (
    <>
      <div>
        <h2 className="font-semibold mb-3">Dragon News Home</h2>
      </div>
      <div>
        {news.map((singleNews) => (
          <NewsCart key={singleNews._id} news={singleNews}></NewsCart>
        ))}
      </div>
    </>
  );
};

export default CategoryNews;
