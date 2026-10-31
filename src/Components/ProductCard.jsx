import React from "react";

function ProductCard(props) {
  return (
    <>
      <div className="card" style={{ maxWidth: "300px" }}>
        <div className="card-body">
          <div className="card-title">
            <p className="card-title">
              <strong>Product ID :</strong>
              {props.id}
            </p>
            <p className="card-title">
              <strong>Product Category :</strong>
              {props.category}
            </p>
            <p className="card-title">
              <strong>Product Name :</strong>
              {props.name}
            </p>
            <p className="card-title">
              <strong>Product Price:</strong>
              {props.price}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
