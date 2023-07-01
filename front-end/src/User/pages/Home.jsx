import axios from "axios";
import DOMPurify from "dompurify";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);



  useEffect(() => {
    fetchBlogData()
  }, []);

  const fetchBlogData = () => {
    axios.get("http://localhost:4000/Blog").then((response) => {
      var data = response.data.blog;
      // setC(data)
      console.log(data);
      setPosts(data);
    });
  }
  console.log(posts);

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (

          <div className="post" key={post.blog_id}>
            <div className="img">
              <img src={post.blog_image} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/User/post/${post.blog_id}`}>
                <h1>{post.blog_title}</h1>
              </Link>

              <p
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(post.blog_content.split(' ').slice(0, 50).join(' ') + '...'),
                }}
              ></p>{" "}
              <Link className="link" to={`/User/post/${post.blog_id}`}>
                <button style={{ marginTop: "15px" }}>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div >
  );
};

export default Home;
