import React from "react";
import {Container} from "react-bootstrap";

import './main.scss';
import LastArticle from "../../last-article";
import ArticlesList from "../../articles-list";
import ButtonMore from "../../button-more";

const Main = () => {
  return (
    <>
      <Container>
        <h1 className="index-title">
          Spacebuilder
          <span> &#8212; цифровой блог о дизайне пространства</span>
        </h1>
      </Container>
      <LastArticle />
      <ArticlesList />
      <ButtonMore/>
    </>
  );
};

export default Main;