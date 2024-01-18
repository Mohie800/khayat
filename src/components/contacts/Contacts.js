import { Box, Container, Typography } from "@mui/material";
import whatsapp from "../../assets/WhatsApp_icon-1-100x100.png";

const Contacts = () => {
  return (
    <Container
      sx={{
        gap: 3,
        display: "flex",
        flexDirection: "column",
        maxWidth: "700px",
        mb: 10,
      }}
    >
      <Typography sx={{ fontFamily: "pun-bold", color: "#315e5e", mt: 5 }}>
        العنوان:
      </Typography>
      <div>
        <Typography
          sx={{ fontFamily: "pun", color: "#315e5e", marginBlock: 0.5 }}
        >
          شركة الخيال الماهر للخياطة
        </Typography>
        <Typography
          sx={{ fontFamily: "pun", color: "#315e5e", marginBlock: 0.5 }}
        >
          سجل تجاري رقم 1010857681
        </Typography>
      </div>
      <div>
        <Typography
          sx={{ fontFamily: "pun", color: "#315e5e", marginBlock: 0.5 }}
        >
          6549 وادي الشعراء – حي العليا
        </Typography>
        <Typography
          sx={{ fontFamily: "pun", color: "#315e5e", marginBlock: 0.5 }}
        >
          وحدة رقم 222
        </Typography>
        <Typography
          sx={{ fontFamily: "pun", color: "#315e5e", marginBlock: 0.5 }}
        >
          الرياض 12211 – 3805
        </Typography>
        <Typography
          sx={{ fontFamily: "pun", color: "#315e5e", marginBlock: 0.5 }}
        >
          المملكة العربية السعودية
        </Typography>
      </div>
      <Typography sx={{ fontFamily: "pun-bold", color: "#315e5e" }}>
        الاستفسارات والشكاوى:
      </Typography>
      <div>
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <img src={whatsapp} alt="whatsapp" width={50} height={50} />
          <a
            href="tel:0543281314"
            style={{ textDecoration: "none", color: "black" }}
          >
            053221314
          </a>
        </Box>

        <Typography
          sx={{ fontFamily: "pun", color: "#315e5e", marginBlock: 0.5 }}
        >
          من 8ص إلى 5م – السبت إلى الخميس
        </Typography>
      </div>
    </Container>
  );
};

export default Contacts;
