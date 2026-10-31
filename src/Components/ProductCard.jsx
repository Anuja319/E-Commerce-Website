import React from "react";

function ProductCard(props) {
  return (
    <>
      <div className="card-body" style={{ maxwidth: "300px" }}>
        <div className="col-4">
          <div className="container">
            <p>
              <strong>Product ID :</strong>
              {props.id}
            </p>
            <p>
              <strong>Product ID :</strong>
              {props.category}
            </p>
            <p>
              <strong>Product ID :</strong>
              {props.name}
            </p>
            <p>
              <strong>Product ID :</strong>
              {props.price}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
