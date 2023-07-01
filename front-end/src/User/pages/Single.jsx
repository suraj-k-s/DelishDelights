import React, { useEffect, useState } from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment";
import DOMPurify from "dompurify";
import Like from "./Like";
import { IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Single = () => {
  const [post, setPost] = useState({});
  const [posts, setPosts] = useState([]);



  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[3];


  useEffect(() => {


    axios.get("http://localhost:4000/BlogPost/" + postId).then((response) => {

      var data = response.data.blog;
      setPost(data[0]);
      console.log(data[0]);
    });
    axios.get("http://localhost:4000/Blog").then((response) => {
      var data = response.data.blog;
      setPosts(data);
      setName(data[0].user_name)
      console.log(data[0]);

    });

    axios.get("http://localhost:4000/CountLike/" + postId).then((response) => {
      var data = response.data.countLike;
      setlikeCount(data);



    });
    axios.get("http://localhost:4000/Like/" + sessionStorage.getItem("user_id") + "/" + postId).then((response) => {
      var data = response.data.Liked;
      setLiked(data);
      console.log(data);


    });
  }, []);



  //like

  const [isClicked, setIsClicked] = useState(false);
  const [liked, setLiked] = useState("");
  const [name, setName] = useState("");
  const [likeCount, setlikeCount] = useState("");



  const handleClick = () => {
    if (isClicked) {
      axios.delete("http://localhost:4000/LikeDelete/" + sessionStorage.getItem("user_id") + "/" + postId)
        .then(() => {
          setIsClicked(false);
          setLiked(false);
          setlikeCount(prevCount => prevCount - 1); // <-- decrement like count
        });
    } else {
      var dat = {
        user_id: sessionStorage.getItem("user_id"),
        blog_id: postId,
      };
      axios.post("http://localhost:4000/LikeInsert", dat)
        .then(() => {
          setIsClicked(true);
          setLiked(true);
          setlikeCount(prevCount => prevCount + 1); // <-- increment like count
        });

    }
  };
  return (
    <div className="single">
      <div className="content">
        <img style={{ borderRadius: "5px" }} src={post.blog_image} alt="" />
        <div >
          <IconButton onClick={handleClick} style={{ width: "41px" }}>
            {liked ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
            <p>{likeCount}</p>
          </IconButton>
        </div>
        <div className="user">
          {posts.user_photo && <img src={posts.user_photo} alt="" />}
          <div className="info">
            <h1>{name}</h1>
            <p>Posted {moment(post.blog_time).fromNow()}</p>
          </div>
          {sessionStorage.getItem("user_id") == post.user_id && (
            <div className="edit">
              <Link to={`/User/write?edit=2`} state={post}>
                <img src={Edit} alt="" />
              </Link>
              <img src={Delete} alt="" />
            </div>
          )}
        </div>
        <h1>{post.blog_title}</h1>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.blog_content),
          }}
        ></p>{" "}
      </div>
      <div className="menu">
        <h1>Other posts you may like</h1>
        {posts.map((e) => (
          postId != e.blog_id ? <div className="post" key={e.blog_id}>
            <img src={e?.blog_image} alt="" />
            <h2>{e.blog_title}</h2>
            <Link className="link" to={`/User/post/${post.blog_id}`}>
              <button>Read More</button>
            </Link>
          </div> : ""
        ))}


      </div>
    </div>
  );
};

export default Single;
