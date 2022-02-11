import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";
import { increment, decrement } from "../../redux/actions";
import { useDispatch } from "react-redux";

function Nouveaute() {
  // counter
  // const dispatch = useDispatch();

  // Connexion api
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8001/api/nouveautes")
      .then((res) => {
        console.log(res);
        setPosts(res.data["hydra:member"]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {/* articles */}
      {posts.map((post) => (
        <div key={post.id}>
          {/* articles */}
          <Card style={{ width: "18rem" }}>
            <Card.Title> {post.title}</Card.Title>
            <Card.Img
              style={{ width: "18rem" }}
              variant="top"
              src={post.photo}
            />
            <Card.Body>
              <Card.Text>
                {post.content}
                <br></br>
                {post.prix} €
              </Card.Text>
              <Button variant="primary">
                <a href={"/" + post.id}> Voir plus</a>
              </Button>
              {/* Counter */}
              {/* <button onClick={() => dispatch(increment())}>+</button> */}
              {/* <button onClick={() => dispatch(decrement())}>-</button> */}
            </Card.Body>
          </Card>
        </div>
      ))}
      {/* filter */}
      <div className="productContainer"></div>
    </div>
  );
}

export default Nouveaute;
