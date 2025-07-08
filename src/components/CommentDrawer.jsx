import { Avatar, Box, IconButton, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import AddBoxIcon from "@mui/icons-material/AddBox";


const CommentDrawer = ({post, onClose}) => {

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      {/* iPhone Frame */}
      <Box
        sx={{
          width: 320,
          height: 640,
          bgcolor: "#121212",
          borderRadius: "36px",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: 6,
        }}
      >
        <Box
          sx={{
            width: "92%",
            height: "96%",
            bgcolor: "#000",
            borderRadius: "28px",
            overflow: "hidden",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            color: "#fff",
          }}
        >
          {/* Post Image (Background) */}
          <Box
            // component="img"
            // src="https://i.insider.com/6644ddd4b4abc992e8c9d4d1?width=700"
            alt="post"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 1,
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 6,
                  width: 60,
                  height: 10,
                  bgcolor: "#121212",
                  borderRadius: 9,
                  zIndex: 3,
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                px: 1,
                py: 1,
                borderBottom: "1px solid #121212",
              }}
            >
              <IconButton size="small" sx={{color: "#fff"}}>
                <ArrowBackIosNewIcon fontSize="small" />
              </IconButton>
              <Typography
                variant="subtitle2"
                fontWeight="bold"
                sx={{ml: 1, color: "#fff"}}
              >
                Post
              </Typography>
            </Box>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{px: 2, py: 1}}
            >
              <Stack direction="row" alignItems="center" spacing={1}>
                <Avatar
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  sx={{width: 32, height: 32}}
                />
                <Typography
                  variant="subtitle2"
                  fontWeight="bold"
                  sx={{color: "#fff"}}
                >
                  john_doe
                </Typography>
              </Stack>
              <IconButton size="small" sx={{color: "#fff"}}>
                <MoreHorizIcon />
              </IconButton>
            </Stack>
            <Box
              component="img"
              src={post?.image}
              alt="post"
              sx={{width: "100%", display: "block"}}
            />
          </Box>

          {/* Dim Overlay */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              bgcolor: "rgba(0,0,0,0.4)",
              zIndex: 2,
            }}
          />

          {/* Comment Drawer */}
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              height: "70%",
              bgcolor: "#1e1e1e",
              borderRadius: "24px 24px 0 0",
              zIndex: 3,
              px: 2,
              pt: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Drag Handle */}
            <Box
              sx={{
                width: 50,
                height: 5,
                borderRadius: 3,
                bgcolor: "#444",
                alignSelf: "center",
                mb: 1,
              }}
            />

            {/* Header */}
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{mb: 1}}
            >
              <Typography color="#fff" fontSize={14} fontWeight="bold">
                Comments
              </Typography>
              <IconButton size="small" sx={{color: "#fff"}}>
                <SendOutlinedIcon fontSize="small" />
              </IconButton>
            </Stack>

            {/* Comment */}
            <Stack
              direction="row"
              spacing={1}
              alignItems="flex-start"
              sx={{py: 1}}
            >
              <Avatar sx={{width: 32, height: 32}} />
              <Box sx={{flex: 1}}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Typography fontSize={12} fontWeight="bold" color="#fff">
                    Username
                  </Typography>
                  <Typography fontSize={10} color="gray">
                    Now
                  </Typography>
                </Stack>
                <Typography fontSize={13} color="#eee">
                  {post.commentMessage}
                </Typography>
                <Typography fontSize={10} color="gray" sx={{mt: 0.5}}>
                  Reply
                </Typography>
              </Box>
              <IconButton size="small" sx={{color: "#aaa"}}>
                <FavoriteBorderIcon fontSize="small" />
              </IconButton>
            </Stack>

            {/* Input Row */}
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{mt: "auto", pb: 1}}
            >
              <Avatar src="./image.jpg" sx={{width: 37, height: 37}} />

              <TextField
                fullWidth
                placeholder="Add a comment for username..."
                variant="standard"
                sx={{border: "1px solid #474747", borderRadius: 9}}
                InputProps={{
                  disableUnderline: true,
                  sx: {
                    color: "#fff",
                    bgcolor: "#1e1e1e",
                    px: 2,
                    py: 1.2,
                    fontSize: "13px",
                    borderRadius: 30,
                  },

                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton sx={{color: "#fff"}}>
                        <SendOutlinedIcon fontSize="small" />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CommentDrawer