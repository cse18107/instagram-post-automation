import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AddBoxIcon from "@mui/icons-material/AddBox";
import MovieIcon from "@mui/icons-material/Movie";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const PostSection = ({post, setLiked, liked, setBookmarked, bookmarked}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      {/* iPhone frame */}
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
          {/* Notch */}

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
          {/* Top bar */}
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

          {/* Content */}
          <Box sx={{flexGrow: 1, overflowY: "hidden", pb: 7}}>
            {/* Profile header */}
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

            {/* Post image */}
            <Box
              component="img"
              src={post?.image}
              alt="post"
              sx={{width: "100%", display: "block"}}
            />

            {/* Action row */}
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{px: 1, py: 1}}
            >
              <Stack direction="row" alignItems="center" spacing={0.2}>
                <IconButton
                  size="small"
                  onClick={() => setLiked(!liked)}
                  sx={{color: liked ? "#ff1744" : "#fff"}}
                >
                  {liked ? (
                    <FavoriteIcon fontSize="small" />
                  ) : (
                    <FavoriteBorderIcon fontSize="small" />
                  )}
                </IconButton>
                <Typography variant="caption" sx={{color: "#fff"}}>
                  {post?.likes}
                </Typography>
                <IconButton size="small" sx={{color: "#fff"}}>
                  <ChatBubbleOutlineIcon fontSize="small" />
                </IconButton>
                <Typography variant="caption" sx={{color: "#fff"}}>
                  {post?.comments}
                </Typography>
                <IconButton size="small" sx={{color: "#fff"}}>
                  <SendOutlinedIcon fontSize="small" />
                </IconButton>
              </Stack>
              <IconButton
                size="small"
                onClick={() => setBookmarked(!bookmarked)}
                sx={{color: "#fff"}}
              >
                {bookmarked ? (
                  <BookmarkIcon fontSize="small" />
                ) : (
                  <BookmarkBorderIcon fontSize="small" />
                )}
              </IconButton>
            </Stack>

            {/* Description */}
            <Box sx={{px: 2, pb: 2}}>
              <Typography
                variant="body2"
                component="span"
                sx={{fontSize: "10px", color: "#fff"}}
              >
                <Typography
                  variant="body3"
                  component="span"
                  fontWeight="bold"
                  sx={{fontSize: "12px", color: "#fff"}}
                >
                  john_doe{" "}
                </Typography>
                {post?.description}
                {/* Just touched down in Bali and the views are absolutely
          breathtaking 🌅🌴✨. Starting the day with a beachside coffee,
          soaking up the sun, and letting the ocean breeze carry all the
          stress away. Can’t wait to explore the hidden waterfalls and
          rice terraces. If paradise had a name, it would be this place.
          #TravelDiaries #IslandLife #PeacefulEscape */}
              </Typography>
              <Typography
                variant="caption"
                sx={{fontSize: "9px", color: "#bbb", display: "block", mt: 0.5}}
              >
                View all comments
              </Typography>
              <Typography
                variant="caption"
                sx={{fontSize: "9px", color: "#bbb", display: "block", mt: 0.5}}
              >
                3 HOURS AGO
              </Typography>
            </Box>
          </Box>

          {/* Bottom nav */}
          <Box
            sx={{
              position: "absolute",
              bottom: 10,
              left: 0,
              width: "100%",
              bgcolor: "#000",
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-around"
            >
              <IconButton sx={{color: "#fff"}}>
                <HomeIcon />
              </IconButton>
              <IconButton sx={{color: "#fff"}}>
                <SearchIcon />
              </IconButton>
              <IconButton sx={{color: "#fff"}}>
                <AddBoxIcon />
              </IconButton>
              <IconButton sx={{color: "#fff"}}>
                <MovieIcon />
              </IconButton>
              <IconButton sx={{color: "#fff"}}>
                <AccountCircleIcon />
              </IconButton>
            </Stack>
          </Box>
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
                width: "120px",
                height: "5px",
                bgcolor: "white",
                borderRadius: 2,
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PostSection