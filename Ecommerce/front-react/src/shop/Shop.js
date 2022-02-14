import React, { useState, useEffect } from "react";

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [alert, setAlert] = useState("");
  const [cartTotal, setCartTotal] = useState(0);
  console.log("shop", cart);
  const items = [
    { id: 1, name: "allo", price: 65 },
    { id: 2, name: "minecraft", price: 32 },
    { id: 3, name: "fornite", price: 35 },
    { id: 4, name: "wow", price: 47 },
    { id: 5, name: "league of legend", price: 99 },
    { id: 6, name: "warrior", price: 12 },
  ];

  useEffect(() => {
    total();
  }, [cart]);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price;
    }
    setCartTotal(totalVal);
  };

  const addToCart = (el) => {
    let addIt = true;
    // for (let i = 0; i < cart.length; i++) {
    //   if (cart[i].id === el.id) addIt = false;
    // }
    if (addIt) {
      setCart([...cart, el]);
      setAlert("");
    } else setAlert(`${el.name} is already in your cart`);
  };

  const removeFromCart = (el) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
    setCart(hardCopy);
    setAlert("");
  };

  const listItems = items.map((el) => (
    <div key={el.id}>
      {`${el.name}: $${el.price}`}
      <input type="submit" value="add" onClick={() => addToCart(el)} />
    </div>
  ));

  const cartItems = cart.map((el) => (
    <div key={el.id}>
      {`${el.name}: $${el.price}`}
      <input type="submit" value="remove" onClick={() => removeFromCart(el)} />
    </div>
  ));

  return (
    <div>
      STORE
      <div>{listItems}</div>
      <div>Cart</div>
      <div>{cartItems}</div>
      <div>total: {cartTotal} €</div>
      <div>Alert Message: {alert}</div>
    </div>
  );
};

export default Shop;
