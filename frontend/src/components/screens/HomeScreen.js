import React, { useEffect, useState } from "react";
import { Row,Col } from "react-bootstrap";
// import products from "../../products";
import Product from "../Product" 
import Axios from "axios";


const HomeScreen=()=>{
    const [products,setProducts]=useState([]);

       useEffect(()=>{
        const fetchProducts=async()=>{
           const {data}=  await Axios.get("/api/products")
       setProducts(data)
            } 
        
         
        fetchProducts()
       
         },[])
    return(<>
    <h1>Latest Products</h1>
    <Row>
       
    {products.map((product)=>(
         <Col sm={12} lg={4} xl={3} key={product._id}>
         <Product product={product}/></Col>
        
    ))}
        
    </Row>
    </>)
}

export default HomeScreen