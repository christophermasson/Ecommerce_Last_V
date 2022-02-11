import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../redux/actions";

function Counter() {
  // useSelector charge un nouveau rendu si le state est différent
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  // Ce crochet renvoie une référence à la dispatch fonction du magasin Redux. Vous pouvez l'utiliser pour répartir les actions nécessaires.
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h3> Valuable Information I should be logged</h3> : ""}
    </div>
  );
}

export default Counter;
