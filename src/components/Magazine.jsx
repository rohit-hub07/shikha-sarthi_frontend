import React from 'react'
import { useSearchParams } from 'react-router-dom'
import magazineData from "../designIdeas/data/magazineData.json";
import './Magazine.css';

const Magazine = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("query");

  // Format category name for display
  const formatCategoryName = (cat) => {
    if (!cat) return '';
    return cat
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Format date to readable format
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const posts = magazineData[category] || [];

  return (
    <div className="magazine-container">
      <div className="magazine-header">
        <h1 className="magazine-title">
          <span className="title-divider">|</span> All posts for category: {formatCategoryName(category)}
        </h1>
      </div>

      <div className="posts-grid">
        {posts.map((post, idx) => (
          <article key={idx} className="post-card">
            <div className="post-image-wrapper">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="post-image"
                loading="lazy"
              />
            </div>
            <div className="post-content">
              <h2 className="post-title">{post.title}</h2>
              <p className="post-description">{post.description}</p>
              <time className="post-date" dateTime={post.date}>
                | {formatDate(post.date)}
              </time>
            </div>
          </article>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="no-posts">
          <p>No posts found for this category.</p>
        </div>
      )}
    </div>
  )
}

export default Magazine