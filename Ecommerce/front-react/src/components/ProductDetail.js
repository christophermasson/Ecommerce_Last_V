import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
  increment,
} from "../redux/actions/productAtions";

const ProductDetail = () => {
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

    dispatch(selectedProduct(response.data));
    // console.log("res-data", response.data);
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
    // supprime l'action en cours (permet de ne pas charger la page précésente quelque instant)
    return () => dispatch(removeSelectedProduct());
  }, [productId]);

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>... Loading</div>
      ) : (
        <div>
          <h1>{title}</h1>
          <p>{content}</p>
          <img src={photo} alt="img" />
          <div>
            <button onClick={() => dispatch(increment())}>+1</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
