import React from 'react';

function Article({ title, date = "January 1, 1970", preview, minutesToRead }) {
  const calculateReadTime = (minutes) => {
    if (minutes < 30) {
      const cups = Math.ceil(minutes / 5);
      return "☕️".repeat(cups) + ` ${minutes} min read`;
    } else {
      const bentoBoxes = Math.ceil(minutes / 10);
      return "🍱".repeat(bentoBoxes) + ` ${minutes} min read`;
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>{calculateReadTime(minutesToRead)}</p>
    </article>
  );
}

export default Article;
