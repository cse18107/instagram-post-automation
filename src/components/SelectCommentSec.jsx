import { Box, Chip, FormControl, FormHelperText, Radio, TextField } from "@mui/material";
import React, { useEffect } from "react";
import usePostStore from "../store/postStore";
import { useSearchParams } from "react-router-dom";

const SelectCommentSec = () => {
    const updatePost = usePostStore((state) => state.updatePost);
    const [searchParams] = useSearchParams();
  const [selected, setSelected] = React.useState(false);
  const [comment, setComment] = React.useState("")
  useEffect(() => {
    const id = searchParams.get("id");
    if (id) {
      updatePost(id, {commentMessage: comment});
    }
  }, [comment]);
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
        And this comment has
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
        <FormControl variant="standard" sx={{width: "100%"}}>
          <TextField
            id="outlined-basic"
            size="small"
            onChange={(e) => setComment(e.target.value)}
            sx={{width: "100%", backgroundColor: "white"}}
            variant="outlined"
            value={comment}
          />
          <FormHelperText id="component-helper-text">
            Use commas to separate the words
          </FormHelperText>
        </FormControl>
        <Box
          sx={{
            display: "flex",
            gap: "5px",
            alignItems: "center",
            marginTop: "5px",
          }}
        >
          <Box sx={{paddingBottom: "3px"}}>For example:</Box>
          <Box sx={{display: "flex", gap: "5px"}}>
            <Chip
              label="Price"
              color="primary"
              sx={{height: "25px", cursor: "pointer"}}
              variant="outlined"
              onClick={() => setComment("Price")}
            />
            <Chip
              label="Link"
              color="primary"
              sx={{height: "25px", cursor: "pointer"}}
              variant="outlined"
              onClick={() => setComment("Link")}
            />
            <Chip
              label="Shop"
              color="primary"
              sx={{height: "25px", cursor: "pointer"}}
              variant="outlined"
              onClick={() => setComment("Shop")}
            />
          </Box>
        </Box>
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
          <Box>any word</Box>
        </Box>
      </Box>
    </>
  );
};

export default SelectCommentSec;