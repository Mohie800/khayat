import { Container } from "@mui/material";
import { useDataFetching } from "../../store";

const TaxCertificate = () => {
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
      <div className="order-sec2">
        <div className="order-text1">الشهادة الضريبية</div>
      </div>
      <img src={data.tax?.url} alt="tax" style={{ minWidth: "100%" }} />
      <img src={data.tax?.url1} alt="tax" style={{ minWidth: "100%" }} />
    </Container>
  );
};

export default TaxCertificate;
