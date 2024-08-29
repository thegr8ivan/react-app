import React from 'react';
import Article from "./Article";

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((posts, index) => (
        <Article
          key={index}
          title={posts.title}
          date={posts.date}
          preview={posts.preview}
          minutes={posts.minutesToRead}
        />
      ))}
    </main>
  );
}

export default ArticleList;
