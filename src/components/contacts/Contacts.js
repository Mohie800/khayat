import { Box, Container, Typography } from "@mui/material";
import whatsapp from "../../assets/WhatsApp_icon-1-100x100.png";
import { useDataFetching } from "../../store";

const Contacts = () => {
  const { data } = useDataFetching();
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
      <Typography sx={{ fontFamily: "pun-bold", color: "#0D1786", mt: 5 }}>
        العنوان:
      </Typography>
      <div>
        <Typography
          sx={{ fontFamily: "pun", color: "#0D1786", marginBlock: 0.5 }}
        >
          شركة خبنه للخياطة
        </Typography>
        <Typography
          sx={{ fontFamily: "pun", color: "#0D1786", marginBlock: 0.5 }}
        >
          سجل تجاري رقم {data.reg?.number}
        </Typography>
      </div>
      <div>
        <Typography
          sx={{ fontFamily: "pun", color: "#0D1786", marginBlock: 0.5 }}
        >
          6549 وادي الشعراء – حي العليا
        </Typography>
        <Typography
          sx={{ fontFamily: "pun", color: "#0D1786", marginBlock: 0.5 }}
        >
          وحدة رقم 222
        </Typography>
        <Typography
          sx={{ fontFamily: "pun", color: "#0D1786", marginBlock: 0.5 }}
        >
          الرياض 12211 – 3805
        </Typography>
        <Typography
          sx={{ fontFamily: "pun", color: "#0D1786", marginBlock: 0.5 }}
        >
          المملكة العربية السعودية
        </Typography>
      </div>
      <Typography sx={{ fontFamily: "pun-bold", color: "#0D1786" }}>
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
          sx={{ fontFamily: "pun", color: "#0D1786", marginBlock: 0.5 }}
        >
          من 8ص إلى 5م – السبت إلى الخميس
        </Typography>
      </div>
    </Container>
  );
};

export default Contacts;
