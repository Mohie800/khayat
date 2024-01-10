import "./footer.css";
import pay from "../../assets/pay.png";
import { Box } from "@mui/material";

const Footer = () => {
  return (
    <div className="footer-root">
      <div className="footer-cont">
        <div className="footer-row1" style={{ marginInline: 20 }}>
          رقم السجل التجاري (1010857681) رقم التسجيل الضريبي (311539478700003)
          شهادة توثيق التجارة الالكترونية (0000051907)
          <img src={pay} alt="pay" style={{ width: 400 }} />
        </div>
        <div className="footer-row1">
          <div className="footer-primary pull-left" style={{}}>
            <div className="r">
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1,
                  justifyContent: "center",
                }}
                style={{ ":hover": { color: "#1f1f1f" } }}
              >
                <div id="" className="">
                  طرق الدفع
                </div>
                <div id="menu-item-452" className="menu-item-452">
                  شروط الأستخدام
                </div>
                <div id="menu-item-453" className="menu-item-453">
                  الشهادة الضريبية
                </div>
                <div id="menu-item-454" className="">
                  سياسة التوصيل والخدمة
                </div>
                <div id="menu-item-455" className="menu-item-455"></div>
                <div id="menu-item-456" className="menu-item-456">
                  سياسة الأسترجاع
                </div>
                <div id="menu-item-33944"></div>
              </Box>
            </div>
            <div
              className="copyright-footer"
              style={{ ":hover": { color: "#1f1f1f" }, marginBottom: 20 }}
            >
              Copyright 2024 ©<strong>alkhayalksa</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
