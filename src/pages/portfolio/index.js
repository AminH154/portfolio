import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {  meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Projets | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Mes Projets </h1>{" "}
            
            <hr className="t_border my-4 ml-0 text-left" />
            <a href="cv (1).pdf" download class="download-btn">
              📄 Télécharger mon CV
            </a>
          </Col>
        </Row>

        <div className="mb-5 po_items_ho">
         
        </div>
      </Container>
    </HelmetProvider>
  );
};
