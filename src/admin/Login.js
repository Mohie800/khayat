import { LoadingButton } from "@mui/lab";
import { Box, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import server from "../api/server";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const login = async () => {
    setErrorMessage(null);
    try {
      const { data } = await server.post("/login", {
        userName,
        password,
      });
      localStorage.setItem("token", data.token);
      navigate("/admin/home");
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data);
    }
  };

  const RenderError = () => {
    if (!errorMessage) return;
    return (
      <Typography color="red" sx={{ fontFamily: "pun", mt: 2 }}>
        {errorMessage}
      </Typography>
    );
  };

  return (
    <Container maxWidth="lg">
      <div className="order-sec2">
        <div className="order-text1">الدخول الى لوحة التحكم</div>
      </div>
      <Box
        sx={{
          borderRadius: "4px",
          bgcolor: "#cbcbcb",
          flexDirection: "column",
          display: "flex",
          p: 2,
          mt: 5,
        }}
      >
        <Typography
          sx={{ fontFamily: "pun-bold", color: "#0D1786", marginBlock: 1 }}
        >
          اسم المستخدم
        </Typography>
        <TextField onChange={(e) => setUserName(e.target.value)} />
        <Typography
          sx={{
            fontFamily: "pun-bold",
            color: "#0D1786",
            marginBlock: 1,
            mt: 3,
          }}
        >
          كلمة المرور
        </Typography>
        <TextField
          onChange={(e) => setPassWord(e.target.value)}
          type="password"
        />
        <RenderError />
        <LoadingButton
          variant="contained"
          sx={{
            bgcolor: "#0D1786",
            fontFamily: "pun",
            paddingInline: 4,
            width: "max-content",
            mt: 3,
          }}
          onClick={login}
        >
          تسجيل دخول
        </LoadingButton>
      </Box>
    </Container>
  );
};

export default Login;
