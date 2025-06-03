import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams, Link, Navigate } from "react-router-dom";
import { BsCalendar, BsClock, BsArrowLeft, BsShare } from "react-icons/bs";
import Particle from "../Particle";
import blogData from "../../data/BlogData.json";

function BlogPost() {
  const { id } = useParams();
  const article = blogData.find(post => post.id === id);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const formatContent = (content) => {
    return content.split('\n').map((paragraph, index) => {
      if (paragraph.startsWith('## ')) {
        return <h2 key={index} className="blog-post-subtitle">{paragraph.replace('## ', '')}</h2>;
      } else if (paragraph.startsWith('### ')) {
        return <h3 key={index} className="blog-post-subheading">{paragraph.replace('### ', '')}</h3>;
      } else if (paragraph.startsWith('```')) {
        return null; // Handle code blocks separately if needed
      } else if (paragraph.trim() === '') {
        return <br key={index} />;
      } else {
        return <p key={index} className="blog-post-paragraph">{paragraph}</p>;
      }
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <Container fluid className="blog-post-section">
      <Particle />
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} md={10}>
            <div className="blog-post-header">
              <Link to="/blog" className="blog-back-link">
                <BsArrowLeft /> Back to Blog koko
              </Link>
              
              <div className="blog-post-meta">
                <span className="blog-post-date">
                  <BsCalendar className="blog-icon" />
                  {formatDate(article.publishDate)}
                </span>
                <span className="blog-post-read-time">
                  <BsClock className="blog-icon" />
                  {article.readTime}
                </span>
                <Button 
                  variant="outline-primary" 
                  size="sm" 
                  onClick={handleShare}
                  className="blog-share-btn"
                >
                  <BsShare /> Share
                </Button>
              </div>
              
              <h1 className="blog-post-title">{article.title}</h1>
              
              <div className="blog-post-author-info">
                <span>By <strong>{article.author}</strong></span>
              </div>
              
              <div className="blog-post-tags">
                {article.tags.map((tag, index) => (
                  <span key={index} className="blog-post-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="blog-post-image">
              <img 
                src={article.coverImage} 
                alt={article.title}
                className="blog-post-cover"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/800x400/6c5ce7/ffffff?text=Blog+Post";
                }}
              />
            </div>
            
            <div className="blog-post-content">
              {formatContent(article.content)}
            </div>
            
            <div className="blog-post-footer">
              <Link to="/blog" className="blog-back-to-list">
                <BsArrowLeft /> Back to All Articles
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default BlogPost;
