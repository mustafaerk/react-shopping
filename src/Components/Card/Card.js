import React from 'react';
import { Card, Button } from "react-bootstrap";

function RentCard({ title, description, imageUrl, price }) {

    return (
        <Card style={{ height: "100%" }}>
            <Card.Img style={{ height: 250, width: "auto" }} variant="top" src={imageUrl} />
            <Card.Body style={{ display: "flex", flexDirection: "column" }}>
                <Card.Title>{title} </Card.Title>
                <Card.Text>{description} </Card.Text>
                <Card.Text style={{ marginTop: "auto", fontWeight: "bold" }}>{price}$ /month </Card.Text>
                <Button variant="outline-dark">See More Detail</Button>
            </Card.Body>
        </Card >
    );
}

export default RentCard;
