import { Box, Button, FormControl, FormControlLabel, FormHelperText, TextareaAutosize, TextField } from "@mui/material";
import React, { useEffect } from "react";
import IOSSwitch from "./IOSSwitch";
import usePostStore from "../store/postStore";
import { useSearchParams } from "react-router-dom";

const SetSendDMs = () => {
  const [selected, setSelected] = React.useState(false);
  const updatePost = usePostStore((state) => state.updatePost);
  const [searchParams] = useSearchParams();
  const [dm, setDm] = React.useState("");
  useEffect(() => {
    const id = searchParams.get("id");
    if (id) {
      updatePost(id, {dm: dm});
    }
  }, [dm]);
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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>an opening DM</Box>
          <FormControlLabel
            sx={{marginRight: "0px"}}
            control={<IOSSwitch sx={{m: 1, marginRight: 0}} defaultChecked />}
          />
        </Box>
        <FormControl variant="standard" sx={{width: "100%"}}>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "15px",
              padding: "0.6rem",
            }}
            value={
              "Hey there i am so happy you are here. \nThanks so much you are here😊. \n\nClick below and I will send you the link \nin just  second "
            }
            sx={{width: "100%", backgroundColor: "white"}}
          />
          <TextField
            id="outlined-basic"
            size="small"
            value={"Send me the link"}
            sx={{width: "100%", marginTop: "5px", backgroundColor: "white"}}
            variant="outlined"
          />
        </FormControl>
        <Box
          sx={{
            display: "flex",
            gap: "5px",
            alignItems: "center",
            marginTop: "5px",
          }}
        >
          <Box sx={{paddingBottom: "3px"}}>
            Why does the opening DMs matters?
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          paddingBottom: "1rem",
          paddingTop: "0.5rem",
          bgcolor: "#eeeeee",
          borderRadius: "10px",
          marginBottom: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>a DM with the link</Box>
        </Box>
        <FormControl variant="standard" sx={{width: "100%"}}>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            value={dm}
            onChange={(e) => setDm(e.target.value)}
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "15px",
              padding: "0.6rem",
              width: "100%",
              backgroundColor: "white",
            }}
            
          />
          <FormHelperText id="component-helper-text" sx={{color: "#ff5a5a"}}>
            Create the DM you would like to send
          </FormHelperText>
        </FormControl>
        <Button
          sx={{
            width: "100%",
            backgroundColor: "white",
            border: "1px solid gray",
            marginTop: "5px",
          }}
        >
          + Add link
        </Button>
      </Box>
    </>
  );
};

export default SetSendDMs;