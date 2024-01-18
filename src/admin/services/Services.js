import { useEffect, useState } from "react";
import "./services.css";
import { Button, CircularProgress, Container } from "@mui/material";
import AddServicePopup from "./addServicePopup";
import server from "../../api/server";
import ServicesData from "./ServicesData";
import RemovePopup from "./RemovePopup";

const Services = () => {
  const [addPopup, setAddPopup] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [removePopup, setRemovePopup] = useState(false);
  const [serToRemove, setSerToRemove] = useState({});

  const handleRemove = (item) => {
    setSerToRemove(item);
    setRemovePopup(true);
  };

  const getservices = async () => {
    try {
      const { data } = await server.get("/service/get");
      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getservices();
  }, []);

  return (
    <Container
      sx={{
        gap: 3,
        display: "flex",
        flexDirection: "column",
        maxWidth: "700px",
        mb: 3,
      }}
    >
      <RemovePopup
        open={removePopup}
        setOpen={setRemovePopup}
        update={getservices}
        city={serToRemove}
      />
      <AddServicePopup
        open={addPopup}
        setOpen={setAddPopup}
        update={getservices}
      />
      <div className="order-sec2">
        <div className="order-text1">إدارة الخدمات</div>
      </div>
      {loading ? (
        <div style={{ textAlign: "center" }}>
          <CircularProgress sx={{ color: "#315e5e" }} />
        </div>
      ) : (
        <ServicesData data={data} handleRemove={handleRemove} />
      )}
      <Button
        variant="contained"
        sx={{
          bgcolor: "#315e5e",
          fontFamily: "pun",
          paddingInline: 4,
          width: "max-content",
        }}
        onClick={() => setAddPopup(true)}
      >
        اضافة خدمة
      </Button>
    </Container>
  );
};

export default Services;
