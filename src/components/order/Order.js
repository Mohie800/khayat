import { Button, Checkbox, MenuItem, Select, TextField } from "@mui/material";
import "./order.css";
import { useEffect, useState } from "react";
import { Circle, CircleOutlined, ExpandMore } from "@mui/icons-material";
import sa from "../../assets/sa.svg";
import Features from "./Features";
import Footer from "../footer/Footer";
import Header from "../header/Header";
const Order = () => {
  const [city, setCity] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [phone, setPhone] = useState("");
  const handleChange = (event) => {
    setCity(event.target.value);
  };
  const images = [
    "https://alkhayalksa.net/wp-content/uploads/2023/12/Banner-V01-1400x788.png",
    "https://alkhayalksa.net/wp-content/uploads/2023/12/Alkhayal-Banner-V02-1400x788.png",
  ];

  const switchImage = () => {
    if (currentImage < images.length - 1) {
      setCurrentImage(currentImage + 1);
    } else {
      setCurrentImage(0);
    }
  };

  useEffect(() => {
    const interval = setInterval(switchImage, 6000);
    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div>
      <Header />
      <div
        className="order-bg-img"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      >
        <div style={{ display: "flex" }}>
          <Checkbox
            icon={<CircleOutlined fontSize="small" sx={{ color: "#fff" }} />}
            checkedIcon={<Circle fontSize="small" sx={{ color: "#fff" }} />}
            checked={currentImage === 0}
            onChange={() => setCurrentImage(0)}
          />
          <Checkbox
            icon={<CircleOutlined fontSize="small" sx={{ color: "#fff" }} />}
            checkedIcon={<Circle fontSize="small" sx={{ color: "#fff" }} />}
            checked={currentImage === 1}
            onChange={() => setCurrentImage(1)}
          />
        </div>
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
            <MenuItem sx={{ fontFamily: "pun-bold" }} value={1}>
              الرياض
            </MenuItem>
            <MenuItem sx={{ fontFamily: "pun-bold" }} value={2}>
              جدة
            </MenuItem>
            <MenuItem sx={{ fontFamily: "pun-bold" }} value={3}>
              الدمام
            </MenuItem>
          </Select>
        </div>
        <div className="order-f1">
          <Button
            variant="contained"
            fullWidth
            sx={{
              bgcolor: "#315e5e",
              ":hover": {
                bgcolor: "#457878",
              },
            }}
          >
            <div className="order-text1">إرسال</div>
          </Button>
        </div>
      </div>
      <Features />
      <Footer />
    </div>
  );
};

export default Order;