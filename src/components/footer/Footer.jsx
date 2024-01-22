import "./footer.css";
import pay from "../../assets/pay.png";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDataFetching } from "../../store";

const Footer = () => {
  const navigate = useNavigate();
  const { data } = useDataFetching();
  return (
    <div className="footer-root">
      <div className="footer-cont">
        {/* <div className="footer-row1" style={{ marginInline: 20 }}>
          رقم السجل التجاري ({data.reg.number}) رقم التسجيل الضريبي (
          {data.tax.number}) شهادة توثيق التجارة الالكترونية ({data.reg.authNo})
          <img src={pay} alt="pay" style={{ height: 40 }} />
        </div> */}
        <div className="footer-row1" style={{ marginInline: 20 }}>
          رقم السجل التجاري ({data.reg.number}) شهادة توثيق التجارة الالكترونية
          ({data.reg.authNo})
          <img src={pay} alt="pay" style={{ height: 40 }} />
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
                <div
                  id=""
                  className="footer-btn"
                  onClick={() => navigate("/payment")}
                >
                  طرق الدفع
                </div>
                <div
                  id="menu-item-452"
                  className="footer-btn"
                  onClick={() => navigate("/terms")}
                >
                  شروط الأستخدام
                </div>
                {/* <div
                  id="menu-item-453"
                  className="footer-btn"
                  onClick={() => navigate("/tax-certificate")}
                >
                  الشهادة الضريبية
                </div> */}
                <div
                  id="menu-item-454"
                  className="footer-btn"
                  onClick={() => navigate("/delivery-policy")}
                >
                  سياسة التوصيل والخدمة
                </div>
                <div id="menu-item-455" className="menu-item-455"></div>
                <div
                  id="menu-item-456"
                  className="footer-btn"
                  onClick={() => navigate("/terms-and-conditions")}
                >
                  سياسة الخصوصية
                </div>
                <div
                  id="menu-item-456"
                  className="footer-btn"
                  onClick={() => navigate("/return-policy")}
                >
                  سياسة الأسترجاع
                </div>
                <div
                  id="menu-item-456"
                  className="footer-btn"
                  onClick={() => navigate("/authentication-certificate")}
                >
                  شهادة التوثيق الالكترونية
                </div>
              </Box>
            </div>
            <div
              className="copyright-footer"
              style={{ ":hover": { color: "#1f1f1f" }, marginBottom: 20 }}
            >
              Copyright 2024 ©<strong>khabna</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
