import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import storyData from "../designIdeas/data/storyData.json"
import './Story.css'

const Story = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("query");
  console.log("category: ", category);
  console.log("storydata: ", storyData[category])
  const data = storyData[category];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    whatsappUpdates: true
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  if (!data) {
    return (
      <div className="story-container">
        <div className="story-error-message">
          <h2>Story not found</h2>
          <p>The requested story could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="story-container">
      <div className="story-content-wrapper">
        {/* Main Content Column */}
        <article className="story-article">
          {/* Header Section */}
          <header className="story-header">
            <div className="story-category-badge">{category}</div>
            <h1 className="story-title">{data.title}</h1>
            <time className="story-date" dateTime={data.date}>
              {new Date(data.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </header>

          {/* Story Content - Show one by one */}
          <div className="story-content">
            {data.story.map((item, index) => (
              <div key={index} className="story-section">
                <div className="story-section-content">
                  <h2 className="story-section-title">{item.title}</h2>
                  <p className="story-text">
                    {item.description}
                  </p>
                </div>
                <div className="story-image-wrapper">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="story-image"
                  />
                </div>
              </div>
            ))}
          </div>
        </article>

        {/* Sticky Sidebar Card */}
        <aside className="story-sidebar-wrapper">
          <div className="story-sticky-card">
            <h2 className="story-card-title">Talk to a designer</h2>
            <form onSubmit={handleSubmit} className="story-form">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                className="story-input"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email ID"
                value={formData.email}
                onChange={handleInputChange}
                className="story-input"
                required
              />
              <div className="story-phone-container">
                <select className="story-country-code">
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="story-phone-input"
                  required
                />
              </div>
              <label className="story-checkbox-label">
                <input
                  type="checkbox"
                  name="whatsappUpdates"
                  checked={formData.whatsappUpdates}
                  onChange={handleInputChange}
                  className="story-checkbox"
                />
                <span className="story-checkbox-text">Send me updates on WhatsApp</span>
              </label>
              <select
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="story-select"
                required
              >
                <option value="">Select City</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Chennai">Chennai</option>
                <option value="Pune">Pune</option>
              </select>
              <button type="submit" className="story-submit-button">
                GET FREE QUOTE
              </button>
              <p className="story-terms-text">
                By submitting this form, you agree to the{' '}
                <a href="/privacy" className="story-link">privacy policy</a> &{' '}
                <a href="/terms" className="story-link">terms and conditions</a>
              </p>
            </form>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default Story