import { Box, Typography } from "@mui/material";
import pay from "../../assets/pay.png";

const Payment = () => {
  return (
    <Box sx={{ p: { xs: 2, md: 10 } }}>
      <Typography sx={{ fontFamily: "pun-bold", color: "#0D1786" }}>
        حاليًا يمكن الدفع من خلال الطرق التالية:
      </Typography>
      <ul>
        <li>
          <Typography
            sx={{ fontFamily: "pun", color: "#0D1786", marginBlock: 1 }}
          >
            يتم دفع كامل المبلغ عند اخذ القياسات
          </Typography>
        </li>
        <li>
          <Typography
            sx={{ fontFamily: "pun", color: "#0D1786", marginBlock: 1 }}
          >
            الدفع الإلكتروني (مدى، فيزا، ماستر ، تمارا)
          </Typography>
        </li>
        <li>
          <Typography
            sx={{ fontFamily: "pun", color: "#0D1786", marginBlock: 1 }}
          >
            التحويل المباشر على الحسابات البنكية للمؤسسة
          </Typography>
        </li>
      </ul>
      <img src={pay} alt="pay" style={{ width: 400 }} />
    </Box>
  );
};

export default Payment;
