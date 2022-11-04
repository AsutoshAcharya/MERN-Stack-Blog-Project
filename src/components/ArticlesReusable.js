import React from "react";

import { Link } from "react-router-dom";
const ArticlesReusable = ({ articles }) => {
  return (
    <div>
      {articles.map((article, index) => {
        return (
          <div className="p-4 md:w-1/2" key={index}>
            <div className="h-full border-opacity-60 overflow-hidden">
              <Link to={`/article/${article.name}`}>
                <img
                  src={article.thumbnail}
                  alt="blog"
                  className="lg:h-36 w-full object-center object-cover rounded-xl"
                />
              </Link>
              <div className="p-6">
                <Link key={index} to={`/article/${article.name}`}>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">
                    {article.title}
                  </h3>
                </Link>
                <p className="leading-relaxed mb-3">
                  {article.content[0].substring(0, 110)}...
                </p>
                <div className="flex-item-center flex-wrap">
                  <Link
                    className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    to={`/article/${article.name}`}
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ArticlesReusable;
