import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ArticlesItem from "./ArticlesItem";

const Articles = ({ articles }) => {
  return (
    <Container>
      <Row>
        {articles.map((article, index) => (
          <Col key={index} sm={4} className="my-2">
            <ArticlesItem article={article} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Articles;
