import React from 'react'
import { useSearchParams } from 'react-router-dom'
import storyData from "../designIdeas/data/storyData.json"

const Story = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("query");
  console.log("category: ", category);
  console.log("storydata: ", storyData[category])
  const data = storyData[category];

  if (!data) {
    return (
      <div style={styles.container}>
        <div style={styles.errorMessage}>
          <h2>Story not found</h2>
          <p>The requested story could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <article style={styles.article}>
        {/* Header Section */}
        <header style={styles.header}>
          <div style={styles.categoryBadge}>{category}</div>
          <h1 style={styles.title}>{data.title}</h1>
          <time style={styles.date} dateTime={data.date}>
            {new Date(data.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </header>

        {/* Featured Image */}
        <div style={styles.imageContainer}>
          <img
            src={data.imageUrl}
            alt={data.title}
            style={styles.image}
          />
        </div>

        {/* Story Content */}
        <div style={styles.content}>
          <p style={styles.story}>{data.story}</p>
        </div>
      </article>
    </div>
  )
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f8f9fa',
    padding: '2rem 1rem',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  },
  article: {
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    animation: 'fadeIn 0.5s ease-in'
  },
  header: {
    padding: '2.5rem 2rem 2rem',
    textAlign: 'center',
    borderBottom: '1px solid #e9ecef'
  },
  categoryBadge: {
    display: 'inline-block',
    padding: '0.5rem 1.25rem',
    backgroundColor: '#007bff',
    color: '#ffffff',
    borderRadius: '20px',
    fontSize: '0.875rem',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '1.5rem'
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#212529',
    marginBottom: '1rem',
    lineHeight: '1.2',
    fontFamily: "'Georgia', serif"
  },
  date: {
    display: 'block',
    fontSize: '0.95rem',
    color: '#6c757d',
    fontStyle: 'italic'
  },
  imageContainer: {
    width: '100%',
    height: '500px',
    overflow: 'hidden',
    backgroundColor: '#e9ecef'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease'
  },
  content: {
    padding: '2.5rem 2rem'
  },
  story: {
    fontSize: '1.125rem',
    lineHeight: '1.8',
    color: '#495057',
    textAlign: 'justify',
    whiteSpace: 'pre-line'
  },
  errorMessage: {
    textAlign: 'center',
    padding: '4rem 2rem',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    maxWidth: '600px',
    margin: '0 auto',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  }
}

export default Story