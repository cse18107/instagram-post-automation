import {
  Box,
  Stack,
  Typography,
  IconButton,
  Avatar,
  TextField,
  InputAdornment,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import CallIcon from "@mui/icons-material/Call";
import VideocamIcon from "@mui/icons-material/Videocam";
import AddIcon from "@mui/icons-material/Add";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import GifBoxIcon from "@mui/icons-material/GifBox";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import WifiIcon from "@mui/icons-material/Wifi";
import BatteryFullIcon from "@mui/icons-material/BatteryFull";


function ChatMockup({post}) {

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
          {/* iOS Status Bar */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: 1.5,
              pt: 1,
              pb: 0.5,
              color: "#fff",
              fontSize: "12px",
              fontWeight: 500,
              zIndex: 10,
            }}
          >
            {/* Time */}
            <Typography fontSize={12}>1:37</Typography>

            {/* Right side: Signal, WiFi, Battery */}
            <Box sx={{display: "flex", alignItems: "center", gap: 0.8}}>
              <SignalCellularAltIcon sx={{fontSize: 16}} />
              <WifiIcon sx={{fontSize: 16}} />
              <BatteryFullIcon sx={{fontSize: 16}} />
            </Box>
          </Box>

          {/* Top Bar */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              px: 1,
              py: 1.5,
              borderBottom: "1px solid #222",
            }}
          >
            <IconButton size="small" sx={{color: "#fff"}}>
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>
            <Avatar src="./image.jpg" sx={{width: 28, height: 28, mx: 1}} />
            <Typography
              variant="subtitle2"
              fontWeight="bold"
              sx={{flexGrow: 1, color: "#fff"}}
            >
              botspacehq
            </Typography>
            <IconButton size="small" sx={{color: "#fff"}}>
              <CallIcon fontSize="small" />
            </IconButton>
            <IconButton size="small" sx={{color: "#fff"}}>
              <VideocamIcon fontSize="small" />
            </IconButton>
          </Box>

          {/* Chat Body */}
          <Box
            sx={{
              flexGrow: 1,
              px: 2,
              py: 2,
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            {/* Bot Message */}
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                gap: 1,
                mt: 1,
              }}
            >
              <Avatar src="./image.jpg" sx={{width: 23, height: 23}} />
              <Box
                sx={{
                  bgcolor: "#2e2e2e",
                  color: "#fff",
                  px: 2,
                  py: 1,
                  borderRadius: 4,
                  borderBottomLeftRadius: 0,
                  maxWidth: "85%",
                }}
              >
                <Typography fontSize={13}>
                  Hey there! I’m so happy you’re here, thanks so much for your
                  interest 😊
                </Typography>
                <Typography fontSize={13} sx={{mt: 1}}>
                  Click below and I’ll send you the link in just a sec ✨
                </Typography>

                {/* Inner CTA Button */}
                <Box
                  sx={{
                    bgcolor: "#1a1a1a",
                    borderRadius: 2,
                    px: 1.5,
                    py: 0.7,
                    mt: 1.2,
                    width: "100%",
                    fontSize: 13,
                    fontWeight: "bold",
                    color: "#fff",
                    border: "1px solid #333",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Send me the link
                </Box>
              </Box>
            </Box>

            {/* User Message */}
            <Box
              sx={{
                alignSelf: "flex-end",
                bgcolor: "#7b5cff",
                px: 2,
                py: 1,
                borderRadius: 4,
                borderBottomRightRadius: 0,
                maxWidth: "70%",
                color: "#fff",
                fontSize: 13,
                fontWeight: 500,
              }}
            >
              Send me the link
            </Box>

            {/* Ghost "write a message" bubble preview (optional) */}
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                gap: 1,
              }}
            >
              <Avatar src="./image.jpg" sx={{width: 23, height: 23}} />
              <Box
                sx={{
                  bgcolor: "#2e2e2e",
                  borderRadius: 4,
                  height: 38,
                  borderBottomLeftRadius: 0,
                  px: 2,
                  py: 0.7,
                  fontSize: 14,
                  color: "#aaa",
                }}
              >
                {post?.dm?.length === 0 ? (
                  "Write a message"
                ) : (
                  <Box sx={{color:"white"}}>{post?.dm}</Box>
                )}
              </Box>
            </Box>
          </Box>

          {/* Input Field */}
          <Box
            sx={{
              px: 1.5,
              py: 1,
              borderTop: "1px solid #222",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              bgcolor: "#000",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                borderRadius: 6,
                px: "5px",
                bgcolor: "#121212",
              }}
            >
              <Box
                sx={{
                  height: 30,
                  width: 30,
                  padding: 1,
                  bgcolor: "#196dff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 100,
                }}
              >
                <IconButton sx={{color: "#fff"}}>
                  <CameraAltIcon />
                </IconButton>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "5px",
                }}
              >
                <IconButton sx={{color: "#fff"}}>
                  <InsertPhotoIcon />
                </IconButton>
                <IconButton sx={{color: "#fff"}}>
                  <GifBoxIcon />
                </IconButton>
                <IconButton sx={{color: "#fff"}}>
                  <AddIcon />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ChatMockup;
