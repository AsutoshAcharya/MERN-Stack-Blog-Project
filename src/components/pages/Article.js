import React, { useState, useEffect } from "react";
import articles from "./ArticleContent";
import ArticlesReusable from "../ArticlesReusable";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import CommentsList from "../CommentsList";
import AddCommentForm from "../AddCommentForm";
const Article = () => {
  const [articleInfo, setArticleInfo] = useState({ comments: [] });
  const { name } = useParams();
  const article = articles.find((article) => article.name === name);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      console.log(body);
      setArticleInfo(body);
    };
    fetchData();
  }, [name]);
  if (!article) return <NotFound />;

  const otherArticles = articles.filter((article) => article.name !== name);
  return (
    <>
      <h1 className="sm:text-4xl text-2xl font-bold my-6 text-gray-900">
        {article.title}
      </h1>
      {article.content.map((paragraph, index) => {
        return (
          <p className="mx-auto leading-relaxed text-base mb-4" key={index}>
            {paragraph}
          </p>
        );
      })}
      <CommentsList comments={articleInfo.comments} />
      <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
      <h1 className="sm:text-2xl text-xl font-bold my-4 text-gray-900">
        Other Articles
      </h1>
      <div className="flex flex-wrap -m-4">
        <ArticlesReusable articles={otherArticles} />
      </div>
    </>
  );
};

export default Article;
