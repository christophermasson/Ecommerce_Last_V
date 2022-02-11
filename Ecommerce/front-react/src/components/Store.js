import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  artcileArray,
  selectedProduct,
  increment,
  removeSelectedProduct,
} from "../redux/actions/productAtions";

const Store = () => {
  // donne accès à l'état et retourne le produit
  const product = useSelector((state) => state.product);
  //   déstructure les donée
  const { photo, title, prix, category, content } = product;
  // utilise les Param bdd de la page précédente
  const { productId } = useParams();
  // pouvoir utilisé le magasin renvoi une ref à dispatch // dispatch est un évènement
  const dispatch = useDispatch();

  console.log("id", productId);

  //
  console.log("product", product);

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`http://localhost:8001/api/articles/${productId}`)
      .catch((err) => {
        console.log("Err", err);
      });

    dispatch(increment(response.data));
    // console.log("res-data", response.data);
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
  }, [productId]);

  return (
    <div className="ui grid container">
      {artcileArray.length === 0 ? (
        <div>... Loading</div>
        ) : (
          
          <div>
          <h1>{title}</h1>
          <img src={photo} alt="img" style={{ width: "18rem" }} />
          <h1>{prix}€</h1>
          <p>{artcileArray.length}</p>
        </div>
      )}
    </div>
  );
};

export default Store;
