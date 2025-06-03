import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "./BlogCard";
import Particle from "../Particle";
import blogData from "../../data/BlogData.json";

function Blog() {
  return (
    <Container fluid className="blog-section">
      <Particle />
      <Container>
        <h1 className="blog-heading">
          My <strong className="purple">Blog</strong>
        </h1>
        <p className="blog-description">
          Sharing insights, tutorials, and thoughts on web development, programming, and technology.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {blogData.map((article, index) => (
            <Col md={6} lg={4} key={index} className="blog-card-col">
              <BlogCard
                id={article.id}
                title={article.title}
                excerpt={article.excerpt}
                coverImage={article.coverImage}
                author={article.author}
                publishDate={article.publishDate}
                readTime={article.readTime}
                tags={article.tags}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Blog;
