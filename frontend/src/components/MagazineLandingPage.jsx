import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import magazineLandingData from '../designIdeas/data/magazineLandingPage.json';
import './MagazineLandingPage.css';

const MagazineLandingPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Helper function to create category slug for magazine routes
  const getCategorySlug = (category) => {
    const categoryMap = {
      'Interior Design': 'room-ideas',
      'Kitchen': 'home-decor',
      'Bedroom': 'room-ideas',
      'Furniture': 'furniture-ideas',
      'Technology': 'expert-advice',
      'Outdoor': 'home-decor'
    };
    return categoryMap[category] || 'room-ideas';
  };

  // Helper function to create slug from title
  const createSlug = (title) => {
    return title.toLowerCase().replace(/\s+/g, '-');
  };

  // Get data from JSON
  const featuredArticles = magazineLandingData.featuredArticles;
  const categories = magazineLandingData.categories;

  const filteredArticles = activeCategory === 'all'
    ? featuredArticles
    : featuredArticles.filter(article => article.category === activeCategory);

  return (
    <div className="magazine-landing">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div
          className="hero-image"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80')`
          }}
        ></div>
        <div className="hero-content">
          <h1 className="hero-title">Design Magazine</h1>
          <p className="hero-subtitle">
            Inspiring Interiors, Innovative Ideas, Timeless Design
          </p>

        </div>
      </section>

      {/* Featured Story */}
      <section className="featured-story">
        <div className="container">
          <div className="featured-grid">
            <div className="featured-image">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=80"
                alt="Featured Story"
              />
            </div>
            <div className="featured-content">
              <span className="featured-badge">Featured Story</span>
              <h2 className="featured-title">
                The Future of Interior Design: Where Comfort Meets Innovation
              </h2>
              <p className="featured-excerpt">
                As we move further into 2026, the intersection of technology, sustainability,
                and aesthetic beauty continues to redefine how we design and experience our
                living spaces. Join us as we explore the trends that are shaping the future
                of home design.
              </p>
              <div className="featured-meta">
                <span className="divider">•</span>
                <span className="date">Jan 30, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="articles-section">
        <div className="container">
          <h2 className="section-title">Latest Articles</h2>

          <div className="category-filter">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="articles-grid">
            {filteredArticles.map((article) => (
              <Link
                key={article.id}
                to={`/magazine/?query=${article.categoryRoute}`}
                className="article-card-link"
              >
                <article className="article-card">
                  <div className="article-image">
                    <img src={article.image} alt={article.title} />
                    <span className="article-category">{article.category}</span>
                  </div>
                  <div className="article-content">
                    <h3 className="article-title">{article.title}</h3>
                    <p className="article-excerpt">{article.excerpt}</p>
                    <div className="article-meta">
                      <span className="author">{article.author}</span>
                      <span className="divider">•</span>
                      <span className="date">{article.date}</span>
                    </div>
                    <div className="article-footer">
                      <span className="read-time">{article.readTime}</span>
                      <span className="read-more">Read More →</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default MagazineLandingPage;