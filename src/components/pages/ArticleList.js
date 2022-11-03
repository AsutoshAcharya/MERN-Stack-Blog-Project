import React from "react";
import articles from "./ArticleContent";
import { Link } from "react-router-dom";
const ArticleList = () => {
  return (
    <div>
      <h1 className="sm:text-4xl text-2xl font-bold my-6 text-gray-900">
        Articles
      </h1>
      <div className="container py-4 mx-auto">
        <div className="flex flex-wrap -m-4">
          {articles.map((article, index) => {
            return (
              <div className="p-4 md:w-1/2" key={index}>
                <div className="h-full border-2 border-gray-200 border-opacity-60 overflow-hidden">
                  <Link to={`/article/${article.name}`}>
                    <img
                      src={article.thumbnail}
                      alt="blog"
                      className="lg:h-36 w-full object-center object-cover"
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ArticleList;
