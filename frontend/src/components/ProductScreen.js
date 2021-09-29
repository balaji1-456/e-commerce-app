import React, { useEffect, useState } from "react";
// import products from "../products";
import {Link} from "react-router-dom";
import { Row,ListGroup,Col ,Image,Card,Button} from "react-bootstrap";
import "./ProductScreen.css";
import Rating from "./Rating"
import axios from "axios";
const ProductScreen=({match})=>{
    const [product,setProduct]=useState({});
    useEffect(()=>{
       const fetchProducts=async()=>{
               const {data}=await axios.get(`/api/products/${match.params.id}`)
               setProduct(data)
       }

       fetchProducts()
    },[match])
    console.log(match)

    return (<>
     <Link to='/' className="btn btn-dark my-5 " >
Go Back
  </Link>
 
  <Row>
    <Col md={6}>
      <Image src={product.image} alt={product.name} className="productImage" fluid />
    </Col>
    <Col md={3}>
        <ListGroup variant="flush">
            <ListGroup.Item>
                <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
               <Rating text={`${product.numReviews} reviews`} value={product.rating}/>
            </ListGroup.Item>
            <ListGroup.Item>
             Price: ${product.price}
            </ListGroup.Item>
            <ListGroup.Item>
             Description:{product.description}
            </ListGroup.Item>
        </ListGroup>
    </Col>
  <Col md={3}>
      <Card>
      <ListGroup variant="flush">
            <ListGroup.Item>
                <Row>  <Col> Price:</Col>
                <Col> <strong> ${product.price}</strong></Col>
                </Row>
             
            </ListGroup.Item>
            <ListGroup.Item>
                <Row>  <Col>Status:</Col>
                <Col>{product.countInStock>0?'In Stock':'Out of Stock'}</Col>
                </Row>
             
            </ListGroup.Item>
            <ListGroup.Item>
               <Button className="btn btn-block" type="button" disabled={product.countInStock===0}>Add to cart</Button>
             
            </ListGroup.Item>
            </ListGroup>
      </Card>

  </Col>
  </Row>
</>
 
    )
}

export default ProductScreen