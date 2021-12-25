import React from 'react'
import product from '../products'
import Product from '../components/Product'
import { Row, Col } from 'react-bootstrap'
import products from '../products'
const HomeScreen = () => {
    return (
        <>
            <Row>
                {products.map(product => (
                    <Col sm='12' md='6' lg='4' xl='3'>
                        <Product product={product} />
                    </Col>)
                )}
            </Row>

        </>
    )
}

export default HomeScreen
