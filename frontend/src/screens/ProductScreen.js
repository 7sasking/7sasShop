import React from "react";
import {
  Button,
  Card,
  Image,
  Row,
  Col,
  ListGroup,
  Container,
} from "react-bootstrap";
import Rating from "../components/Rating";
import products from "../products";
import { useParams, Link } from "react-router-dom";
const ProductScreen = () => {
  const { id } = useParams();
  const product = products.find((p) => p._id === id);
  return (
    <>
      <Container>
        <Link className="btn btn-dark my-3" to="/">
          Go back
        </Link>

        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name}></Image>
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>${product.price}</ListGroup.Item>
              <ListGroup.Item>Descrption: {product.description}</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card className="text-center">
              <ListGroup>
                <ListGroup.Item>
                  <p>Price: ${product.price}</p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p>
                    Status:{" "}
                    {product.countInStock > 0
                      ? `${product.countInStock} In stock`
                      : "out of stock"}
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    className="btn-block"
                    type="button"
                    disabled={product.countInStock === 0}
                  >
                    Add to cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductScreen;
