import React, { useState } from "react";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import axios from "axios";
import { IconButton } from "@mui/material";

const Like = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(null);

    const handleClick = () => {
        if (isClicked) {
            axios
                .delete(
                    "http://localhost:4000/LikeDelete/4/7"
                    // postId
                )
                .then((response) => { });
            setIsClicked(false);
        } else {
            var dat = {
                user_id: 4,
                blog_id: 7,
            };

            //   setLiked(true);

            axios
                .post("http://localhost:4000/LikeInsert", dat)
                .then((response) => { });
            setIsClicked(true);
        }
    };

    return (
        <IconButton onClick={() => handleClick()}>
            {isClicked ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
            {/* <span>{liked ? likes : null}</span> */}
        </IconButton>
    );
};

export default Like;

// import { ChakraProvider, useToast } from "@chakra-ui/react";

// function MyComponent() {
//   const toast = useToast();

//   function handleClick() {
//     toast({
//       title: "Hello, world!",
//       description: "This is a toast message.",
//       status: "success",
//       duration: 3000,
//       isClosable: true,
//     });
//   }

//   return (
//     <ChakraProvider>
//       <button onClick={handleClick}>Show Toast</button>
//     </ChakraProvider>
//   );
// }

// export default MyComponent;
