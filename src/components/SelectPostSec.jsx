import React from "react";
import usePostStore from "../store/postStore";
import { useNavigate } from "react-router-dom";
import { Box, Radio } from "@mui/material";

const SelectPostSec = () => {
  const [selected, setSelected] = React.useState(false);
  const posts = usePostStore((state) => state.getPosts());
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/?id=${id}`);
  };
  return (
    <>
      <Box
        sx={{
          marginTop: "23px",
          marginBottom: "9px",
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        When someone comments on
      </Box>
      <Box
        sx={{
          width: "100%",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          paddingBottom: "1rem",
          bgcolor: "#eeeeee",
          borderRadius: "10px",
          marginBottom: "10px",
        }}
      >
        <Box sx={{display: "flex", alignItems: "center"}}>
          <Radio
            checked={selected}
            onChange={() => setSelected(!selected)}
            value="image-option"
            sx={{marginLeft: "-10px"}} // hide default radio appearance
          />
          <Box>a specific post or reel</Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            bgcolor: "#eeeeee",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {posts.map((post) => (
            <Box
              sx={{
                width: "24%",
                height: "7rem",
                overflow: "hidden",
                borderRadius: "10px",
                cursor: "pointer",
              }}
              onClick={() => handleClick(post.id)}
            >
              <Box
                component="img"
                src={post.image}
                alt="post"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover", // Ensures the image covers the box while maintaining aspect ratio
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.1)", // Scales image on hover
                  },
                  display: "block",
                }}
              />
            </Box>
          ))}
        </Box>
        <Box>Show All</Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          bgcolor: "#eeeeee",
          borderRadius: "10px",
          marginBottom: "10px",
        }}
      >
        <Box sx={{display: "flex", alignItems: "center"}}>
          <Radio
            checked={selected}
            onChange={() => setSelected(!selected)}
            value="image-option"
            sx={{marginLeft: "-10px"}} // hide default radio appearance
          />
          <Box>a specific post or reel</Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          bgcolor: "#eeeeee",
          borderRadius: "10px",
        }}
      >
        <Box sx={{display: "flex", alignItems: "center"}}>
          <Radio
            checked={selected}
            onChange={() => setSelected(!selected)}
            value="image-option"
            sx={{marginLeft: "-10px"}} // hide default radio appearance
          />
          <Box>a specific post or reel</Box>
        </Box>
      </Box>
    </>
  );
};


export default SelectPostSec;