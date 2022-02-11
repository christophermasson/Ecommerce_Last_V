import React, { useState, useEffect } from "react";
import axios from "axios";
import { useMatch } from "react-router-dom";

function Articles() {
  const [posts, setPosts] = useState();
  const match = useMatch("articles/:id");

  console.log("yy");

  useEffect(() => {
    axios
      .get(`http://localhost:8001/api/articles/${match.params.id}`)
      .then((res) => {
        console.log(res);
        console.log("test", res.data["id:"]);

        console.log("toto", res.data["id"]);

        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [match]);

  console.log("titi", match.params.id);

  console.log(posts);

  return match && posts ? (
    <div>
      <div key={posts.id}>
        <h1>{posts.title}</h1>
        <p>{posts.content}</p>
        <img src={posts.photo}  alt="img"/>
      </div>
    </div>
  ) : (
    <div>Uncool</div>
  );
}

export default Articles;
