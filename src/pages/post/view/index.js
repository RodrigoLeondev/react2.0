import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PostView() {
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`http://localhost:5001/post/${id}`);
      const data = await response.json();

      const date = new Date(data.createdAt);
      const dateString = `${date.getDate()}/${
        date.getMonth() + 1
      }/${date.getFullYear()}`;
      data.createdAt = dateString;
      setPost(data);
    };
    fetchPost();
  }, []);
  return (
    <div className="postContainer">
      {post && (
        <>
          <h2>{post.title}</h2>
          <h3>
            {post.author?.name} | {post.createdAt}
          </h3>
          <p>{post.content}</p>
          <p>Comments: {post.comments}</p>
        </>
      )}
    </div>
  );
}
