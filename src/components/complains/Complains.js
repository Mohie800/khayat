import { ExpandMore } from "@mui/icons-material";
import {
  Alert,
  Button,
  Container,
  MenuItem,
  Select,
  Snackbar,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import server from "../../api/server";
import { LoadingButton } from "@mui/lab";

const Complains = () => {
  const [type, setType] = useState("شكوى");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [phone, setPhone] = useState(0);
  const [description, setDescription] = useState("");
  const [feedBack, setFeedBack] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorF, setErrorF] = useState(false);

  const navigate = useNavigate();

  const handleChange = (event) => {
    setType(event.target.value);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
  };

  const sendOrder = async () => {
    setErrorF(true);
    if (!name || !city || !neighborhood || !phone || !description || !type)
      return;
    setLoading(true);
    try {
      const { data } = await server.post("/complain/create", {
        name,
        city,
        neighborhood,
        phone,
        description,
        type,
        statusId: 1,
      });
      setFeedBack(true);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <Container
      sx={{
        gap: 1,
        display: "flex",
        flexDirection: "column",
        maxWidth: "700px",
        direction: "rtl",
        mb: 30,
      }}
    >
      <Snackbar open={feedBack} autoHideDuration={5000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{ width: "100%", gap: 2 }}
        >
          <div className="order-text2">تم إرسال الطلب بنجاح</div>
        </Alert>
      </Snackbar>
      <div className="order-sec2">
        <div className="order-text1">الشكاوى والتعديل</div>
      </div>
      <div className="order-text2" style={{ marginTop: "20px" }}>
        الاسم ثلاثي :
      </div>
      <TextField
        sx={{
          ".MuiOutlinedInput-root": {
            bgcolor: "#eee",
            color: "#1f1f1f",
          },
          ".MuiOutlinedInput-input": {
            fontFamily: "pun",
          },
        }}
        fullWidth
        size="small"
        onChange={(e) => setName(e.target.value)}
        error={!name && errorF}
      />
      <div className="order-text2" style={{ marginTop: "20px" }}>
        المدينة :
      </div>
      <TextField
        sx={{
          ".MuiOutlinedInput-root": {
            bgcolor: "#eee",
            color: "#1f1f1f",
          },
          ".MuiOutlinedInput-input": {
            fontFamily: "pun",
          },
        }}
        fullWidth
        size="small"
        onChange={(e) => setCity(e.target.value)}
        error={!city && errorF}
      />
      <div className="order-text2" style={{ marginTop: "20px" }}>
        الحي :
      </div>
      <TextField
        sx={{
          ".MuiOutlinedInput-root": {
            bgcolor: "#eee",
            color: "#1f1f1f",
          },
          ".MuiOutlinedInput-input": {
            fontFamily: "pun",
          },
        }}
        error={!neighborhood && errorF}
        fullWidth
        size="small"
        onChange={(e) => setNeighborhood(e.target.value)}
      />
      <div className="order-text2" style={{ marginTop: "20px" }}>
        رقم التواصل :
      </div>
      <TextField
        sx={{
          ".MuiOutlinedInput-root": {
            bgcolor: "#eee",
            color: "#1f1f1f",
          },
          ".MuiOutlinedInput-input": {
            fontFamily: "pun",
          },
        }}
        error={!phone && errorF}
        fullWidth
        size="small"
        type="number"
        onChange={(e) => setPhone(e.target.value)}
      />
      <div className="order-text2" style={{ marginTop: "20px" }}>
        نوع الطلب :
      </div>
      <Select
        sx={{ fontFamily: "pun-bold", direction: "rtl", bgcolor: "#eee" }}
        value={type}
        onChange={handleChange}
        fullWidth
        IconComponent={() => <ExpandMore />}
        size="small"
      >
        <MenuItem sx={{ fontFamily: "pun-bold" }} value={"شكوى"}>
          شكوى
        </MenuItem>
        <MenuItem sx={{ fontFamily: "pun-bold" }} value={"طلب تعديل"}>
          طلب تعديل
        </MenuItem>
      </Select>
      <div className="order-text2" style={{ marginTop: "20px" }}>
        وصف الشكوى :
      </div>
      <TextField
        sx={{
          ".MuiOutlinedInput-root": {
            bgcolor: "#eee",
            color: "#1f1f1f",
          },
          ".MuiOutlinedInput-input": {
            fontFamily: "pun",
          },
        }}
        error={!description && errorF}
        fullWidth
        size="small"
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className="order-text2" style={{ marginTop: "20px" }}>
        *جميع الشكاوى تخضع لرقابة مباشرة من الإدارة العامة
      </div>
      <LoadingButton
        loading={loading}
        variant="contained"
        fullWidth
        sx={{
          bgcolor: "#0D1786",
          ":hover": {
            bgcolor: "#001b91",
          },
        }}
        onClick={sendOrder}
      >
        <div className="order-text1">إرسال</div>
      </LoadingButton>
    </Container>
  );
};

export default Complains;
