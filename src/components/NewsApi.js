import React, { useEffect, useState } from "react";
import axios from "axios";

const NewsApi = (props) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=50cad4dca2734aebaed078883c8a78ad&q=${props.query}`
      );
      const result = await response.data.articles.map((article) => {
        return {
          title: article.title,
          url: article.url,
        };
      });
      setArticles(result);
    };

    fetchData();
  }, [props.query, props.country]);

  return (
    <div>
      <br />
      <br />
      <ul>
        {articles.length === 0 ? (
          <div>
            <h3>Sorry, no News found for this country </h3>
          </div>
        ) : (
          <div>
            {articles.map((article) => {
              return (
                <div key={article.title}>
                  <br />
                  <li>{article.title}</li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={article.url}
                  >
                    GO TO NEWS
                  </a>
                </div>
              );
            })}
          </div>
        )}
      </ul>
    </div>
  );
};

export default NewsApi;
