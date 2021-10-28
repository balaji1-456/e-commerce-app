import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
// import products from "../../products";
import Product from '../Product'
import { useSelector, useDispatch } from 'react-redux'
import { listProducts } from './../../actions/productActions'
import Loader from '../Loader'
import Message from '../Message'

const HomeScreen = () => {
  const dispatch = useDispatch()
  const { products, loading, error } = useSelector((state) => state.productList)

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {loading ? (
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh"}}>
            <Loader />
          </div>
        ) : error ? (
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh"}}><Message variant="danger">{error}</Message></div>
        ) : (
          products &&
          products.map((product) => (
            <Col sm={12} lg={4} xl={3} key={product._id}>
              <Product product={product} />
            </Col>
          ))
        )}
      </Row>
    </>
  )
}

export default HomeScreen
