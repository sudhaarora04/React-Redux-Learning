import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { setProducts } from "../redux/actions/productActions";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log("products:", products);
  const fetchProduct = async () => {        // using fakeAPI: https://fakestoreapi.com/docs
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data)); // send response.data into setProducts action file which is productActions
    // console.log("response:", response.data);
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  console.log("products from reducer:", products);
  return (
    <div className="ui grid container my-1">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
