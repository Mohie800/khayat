import {
  Alert,
  Button,
  Checkbox,
  CircularProgress,
  MenuItem,
  Select,
  Snackbar,
  TextField,
} from "@mui/material";
import "./order.css";
import { useEffect, useRef, useState } from "react";
import { Circle, CircleOutlined, ExpandMore } from "@mui/icons-material";
import sa from "../../assets/sa.svg";
import Features from "./Features";
import server from "../../api/server";
import { useDataFetching } from "../../store";
import { useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
const Order = () => {
  const { data } = useDataFetching();

  const navigate = useNavigate();

  const [feedBack, setFeedBack] = useState(false);
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [phone, setPhone] = useState("");
  const ref = useRef(null);
  const token = localStorage.getItem("token");
  const handleChange = (event) => {
    setCity(event.target.value);
  };
  // const images = [
  //   "https://khabna.com/wp-content/uploads/2023/12/Banner-V01-1400x788.png",
  //   "https://khabna.com/wp-content/uploads/2023/12/Alkhayal-Banner-V02-1400x788.png",
  // ];

  const images = data.orderBanner.map((item) => item.url);
  const renderCheckBox = () => {
    return data.homeBanner.map((item, i) => {
      return (
        <Checkbox
          key={Math.random()}
          icon={<CircleOutlined fontSize="small" sx={{ color: "#fff" }} />}
          checkedIcon={<Circle fontSize="small" sx={{ color: "#fff" }} />}
          checked={currentImage === i}
          onChange={() => setCurrentImage(i)}
        />
      );
    });
  };

  const switchImage = () => {
    if (currentImage < images.length - 1) {
      setCurrentImage(currentImage + 1);
    } else {
      setCurrentImage(0);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
  };

  const sendOrder = async () => {
    if (!city) return;
    setLoading(true);
    try {
      const { data } = await server.post(
        "/order/create",
        {
          no: Math.random().toFixed(5) * 100000,
          phone,
          city,
          statusId: 1,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setFeedBack(true);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const renderOptions = () => {
    return data.cities.map((item) => {
      return (
        <MenuItem
          sx={{ fontFamily: "pun-bold" }}
          key={item._id}
          value={item.name}
        >
          {item.name}
        </MenuItem>
      );
    });
  };

  useEffect(() => {
    const interval = setInterval(switchImage, 6000);
    return () => clearInterval(interval);
  }, [currentImage]);

  useEffect(() => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div>
      <div ref={ref}></div>
      {/* <Header /> */}
      <Snackbar open={feedBack} autoHideDuration={5000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{ width: "100%", gap: 2 }}
        >
          <div className="order-text2">تم إرسال الطلب بنجاح</div>
        </Alert>
      </Snackbar>
      <div
        className="order-bg-img"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      >
        {loading ? (
          <div
            style={{
              width: "100vw",
              textAlign: "center",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </div>
        ) : (
          <div style={{ display: "flex" }}>{renderCheckBox()}</div>
        )}
      </div>
      <div className="order-sec2">
        <div className="order-text1">سجل رقمك وبنجي لعندك ناخذ مقاسك</div>
      </div>
      <div className="order-sec3">
        <div className="order-f1">
          <div className="order-text2">الجوال :</div>
          <div style={{ display: "flex" }}>
            <TextField
              sx={{
                ".MuiOutlinedInput-root": {
                  fieldset: {
                    borderRadius: "0 4px 4px 0",
                  },
                  bgcolor: "#eee",
                  color: "#1f1f1f",
                },
                ".MuiOutlinedInput-input": {
                  textAlign: "left",
                },
              }}
              fullWidth
              placeholder="51 234 5678"
              type="number"
              // value="51 234 5678"
              onChange={(e) => setPhone(e.target.value)}
            />
            <Select
              sx={{
                fontFamily: "inherit",
                direction: "rtl",
                display: "flex",
                alignItems: "center",
                ".MuiSelect-outlined": {
                  display: "flex",
                },
              }}
              className="sel-phone"
              value={1}
              //   onChange={handleChange}
              IconComponent={() => <ExpandMore />}
            >
              <MenuItem
                sx={{
                  fontFamily: "inherit",
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                }}
                value={1}
              >
                966+
                <img src={sa} alt="sa" />
              </MenuItem>
            </Select>
          </div>
        </div>
        <div className="order-f1">
          <div className="order-text2">المدينة :</div>
          <Select
            sx={{ fontFamily: "pun-bold", direction: "rtl", bgcolor: "#eee" }}
            value={city}
            onChange={handleChange}
            fullWidth
            IconComponent={() => <ExpandMore />}
          >
            <MenuItem sx={{ fontFamily: "pun-bold" }} value={0}>
              - اختر مدينتك -
            </MenuItem>
            {renderOptions()}
          </Select>
        </div>
        <div className="order-f1">
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
        </div>
      </div>
      <Features />
      {/* <Footer /> */}
    </div>
  );
};

export default Order;
