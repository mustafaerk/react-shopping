import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

import Card from "../Components/Card/Card";
import Products from "../Constants/products.json";

function Home() {
    const renderProducts = Products.map((product, index) =>
        <Col key={`${product.title} ${index}`} style={{ marginBottom: 10 }} lg={4} md={6} sm={12}><Card price={product.price} title={product.title} description={product.description} imageUrl={product.image} /></Col>
    )

    return (
        <Container>
            <Row>
                {renderProducts}
            </Row>
        </Container>

    );
}

export default Home;
