import React from 'react'
import { Card, Row, Col, Container } from 'react-bootstrap'

const Product = ({ product }) => {
    return (
        <Card className='py-3 p-3 rounded'>
            <a href={`/product/${product._id}`}>
                <Card.Img src={product.image} variant="top" />
            </a>
            <Card.Body>
                <a href={`/product/${product._id}`} style={{ textDecoration: 'none' }}>
                    <Container>
                        <Card.Title as='div'> <strong>{product.name}</strong></Card.Title>
                        <Card.Text as='div'><div className='my-3'>{product.rating} from {product.numReviews} reviews</div></Card.Text>
                        <Card.Text as='h3'>${product.price}</Card.Text>
                    </Container>
                </a>
            </Card.Body>

        </Card>
    )
}

export default Product
