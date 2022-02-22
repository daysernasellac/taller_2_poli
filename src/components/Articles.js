import React from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import ArticlesItem from "./ArticlesItem";

const Articles = ({ articles }) => {
  let { question } = useParams();
  return <h1>Hello Question {question}</h1>;
};

export default Articles;
