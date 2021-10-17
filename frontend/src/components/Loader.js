import React from "react";
import { Spinner } from "react-bootstrap";

const Loader=()=>{
    return (<div >
<Spinner animation="border" variant="primary" role="status" style={{width:"100px",height:"100px",margin:"auto"}}>
  <span className="visually-hidden">Loading...</span>
</Spinner>
    </div>)
}

export default Loader