import React, { useState } from "react";
import ProductCard from "./ProductCard";
import {
  AllProducts,
  BeautyProducts,
  BodyProducts,
  FaceProducts,
  HairProducts,
} from "../Products";

function Products() {
  const [showAllProducts, setAllProducts] = useState(true);
  const [showHairProducts, setHairProducts] = useState(false);
  const [showFaceProducts, setFaceProducts] = useState(false);
  const [showBodyProducts, setBodyProducts] = useState(false);
  const [showBeautyProducts, setBeautyProducts] = useState(false);
  return (
    <>
      <h1 className="text-center text-warning bg-dark p-2">Product Details</h1>
      <div className="container">
        <div className="bt-group p-2">
          <button
            className="btn btn-success"
            onClick={() => {
              (setAllProducts(true),
                setHairProducts(false),
                setFaceProducts(false),
                setBodyProducts(false),
                setBeautyProducts(false));
            }}
          >
            All Products
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              (setAllProducts(false),
                setHairProducts(true),
                setFaceProducts(false),
                setBodyProducts(false),
                setBeautyProducts(false));
            }}
          >
            Hair Products
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => {
              (setAllProducts(false),
                setHairProducts(false),
                setFaceProducts(true),
                setBodyProducts(false),
                setBeautyProducts(false));
            }}
          >
            Face Products
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              (setAllProducts(false),
                setHairProducts(false),
                setFaceProducts(false),
                setBodyProducts(true),
                setBeautyProducts(false));
            }}
          >
            Body Products
          </button>
          <button
            className="btn btn-warning"
            onClick={() => {
              (setAllProducts(false),
                setHairProducts(false),
                setFaceProducts(false),
                setBodyProducts(false),
                setBeautyProducts(true));
            }}
          >
            Beauty Products
          </button>
        </div>
      </div>
      <div className="row">
        {setAllProducts === true
          ? AllProducts.map((val) => {
              return (
                <ProductCard>
                  id= {val.id}
                  category = {val.category}
                  name = {val.name}
                  price = {val.price}
                </ProductCard>
              );
            })
          : setHairProducts === true
            ? HairProducts.map((val) => {
                return (
                  <ProductCard>
                    id= {val.id}
                    category = {val.category}
                    name = {val.name}
                    price = {val.price}
                  </ProductCard>
                );
              })
            : setFaceProducts === true
              ? FaceProducts.map((val) => {
                  return (
                    <ProductCard>
                      id= {val.id}
                      category = {val.category}
                      name = {val.name}
                      price = {val.price}
                    </ProductCard>
                  );
                })
              : setBodyProducts === true
                ? BodyProducts.map((val) => {
                    return (
                      <ProductCard>
                        id= {val.id}
                        category = {val.category}
                        name = {val.name}
                        price = {val.price}
                      </ProductCard>
                    );
                  })
                : setBeautyProducts === true
                  ? BeautyProducts.map((val) => {
                      return (
                        <ProductCard>
                          id= {val.id}
                          category = {val.category}
                          name = {val.name}
                          price = {val.price}
                        </ProductCard>
                      );
                    })
                  : null}
      </div>
    </>
  );
}

export default Products;
