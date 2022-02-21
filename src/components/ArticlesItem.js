import React from "react";
import { Card } from "react-bootstrap";

const ArticlesItem = ({ article }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={article.urlToImage} />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>{article.description}</Card.Text>
        <a href={article.url} target="blank">
          Continuar....
        </a>
      </Card.Body>
    </Card>
  );
};

export default ArticlesItem;
