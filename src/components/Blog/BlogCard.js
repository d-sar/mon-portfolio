import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsCalendar, BsClock, BsArrowRight } from "react-icons/bs";

function BlogCard({ id, title, excerpt, coverImage, author, publishDate, readTime, tags }) {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <Card className="blog-card-view">
      <div className="blog-card-image-container">
        <Card.Img 
          variant="top" 
          src={coverImage} 
          alt={title}
          className="blog-card-img"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/400x200/6c5ce7/ffffff?text=Blog+Post";
          }}
        />
        <div className="blog-card-overlay">
          <Link to={`/blog/${id}`} className="blog-read-more">
            <BsArrowRight />
          </Link>
        </div>
      </div>
      
      <Card.Body className="blog-card-body">
        <div className="blog-card-meta">
          <span className="blog-date">
            <BsCalendar className="blog-icon" />
            {formatDate(publishDate)}
          </span>
          <span className="blog-read-time">
            <BsClock className="blog-icon" />
            {readTime}
          </span>
        </div>
        
        <Card.Title className="blog-card-title">
          <Link to={`/blog/${id}`} className="blog-title-link">
            {title}
          </Link>
        </Card.Title>
        
        <Card.Text className="blog-card-excerpt">
          {excerpt}
        </Card.Text>
        
        <div className="blog-tags">
          {tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="blog-tag">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="blog-card-footer">
          <span className="blog-author">By {author}</span>
          <Link to={`/blog/${id}`} className="blog-read-more-text">
            Read More <BsArrowRight />
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
}

export default BlogCard;
