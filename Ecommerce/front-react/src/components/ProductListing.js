import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { setProducts } from "../redux/actions/productAtions";

const ProductListing = () => {
  const products = useSelector((state) => state);
  // const [posts, setPosts] = useState([]);

  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("http://localhost:8001/api/articles")
      // .get("https://fakestoreapi.com/products")
      // .then((res) => {
      //   setPosts(res.data["hydra:member"]);
      //   console.log("alo", res);

      // })

      .catch((err) => {
        console.log(err);
      });

    dispatch(setProducts(response.data)).catch((err) => {
      console.log("totot");
      console.log("err", err);
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log("Products: ", products);

  return (
    <div>
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
