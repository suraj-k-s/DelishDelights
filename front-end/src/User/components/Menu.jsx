// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const Menu = ({ cat }) => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {

//     try {
//       axios.get("http://localhost:4000/BlogPost/").then((response) => {
//         var data = response.data.blog;
//         setPosts(data[0]);
//       });

//     } catch (err) {
//       console.log(err);
//     }


//   }, [cat]);
//   // const posts = [
//   //   {
//   //     id: 1,
//   //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
//   //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
//   //     img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   //   },
//   //   {
//   //     id: 2,
//   //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
//   //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
//   //     img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   //   },
//   //   {
//   //     id: 3,
//   //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
//   //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
//   //     img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   //   },
//   //   {
//   //     id: 4,
//   //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
//   //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
//   //     img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   //   },
//   // ];
//   return (
//     <div className="menu">
//       <h1>Other posts you may like</h1>
//       {posts.map((post) => (
//         <div className="post" key={post.blog_id}>
//           <img src={post?.blog_image} alt="" />
//           <h2>{post.blog_title}</h2>
//           <button>Read More</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Menu;
