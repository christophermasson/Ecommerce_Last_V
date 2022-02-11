import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  if (products.length === 0) return <></>;
  //   console.log(products);
  const renderList = Object.values(products["hydra:member"]).map((product) => {
    const { id, title, photo, prix, category } = product;
    console.log("api", products["hydra:member"]);
    return (
      <div className="four column wide" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards"  >
            <div className="card">
              <div className="image">
                <img src={photo} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">{prix} €</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return renderList;
};

export default ProductComponent;
