import {
  Box,
  Button,
  CircularProgress,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import { useCityStore } from "../../store";
import { useEffect, useState } from "react";
import { Delete, Try } from "@mui/icons-material";
import server from "../../api/server";
import AddPopup from "./AddPopup";
import RemovePopup from "./RemovePopup";

const Cities = () => {
  const { city, setCity } = useCityStore();
  const [loading, setLoading] = useState(true);
  const [addPopup, setAddPopup] = useState(false);
  const [removePopup, setRemovePopup] = useState(false);
  const [cityToRemove, setCityToRemove] = useState({});

  const getCities = async () => {
    try {
      const { data } = await server.get("/city/get");
      setCity(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemove = (item) => {
    setCityToRemove(item);
    setRemovePopup(true);
  };

  useEffect(() => {
    getCities();
  }, []);

  const renderCity = () => {
    return city.map((item) => {
      return (
        <Box
          sx={{
            borderRadius: "4px",
            bgcolor: "#cbcbcb",
            display: "flex",
            justifyContent: "space-between",
            paddingInline: 4,
          }}
        >
          <Typography
            sx={{ fontFamily: "pun-bold", color: "#0D1786", marginBlock: 1 }}
          >
            {item.name}
          </Typography>
          <IconButton color="error" onClick={() => handleRemove(item)}>
            <Delete />
          </IconButton>
        </Box>
      );
    });
  };

  return (
    <Container
      sx={{
        gap: 3,
        display: "flex",
        flexDirection: "column",
        maxWidth: "700px",
      }}
    >
      {loading ? (
        <div style={{ textAlign: "center" }}>
          <CircularProgress sx={{ color: "#0D1786" }} />
        </div>
      ) : (
        <>
          <AddPopup open={addPopup} setOpen={setAddPopup} update={getCities} />
          <RemovePopup
            open={removePopup}
            setOpen={setRemovePopup}
            update={getCities}
            city={cityToRemove}
          />
          <div className="order-sec2">
            <div className="order-text1">تعديل المدن</div>
          </div>
          {renderCity()}
          <Button
            variant="contained"
            sx={{
              bgcolor: "#0D1786",
              fontFamily: "pun",
              paddingInline: 4,
              width: "max-content",
            }}
            onClick={() => setAddPopup(true)}
          >
            إضافة مدينة
          </Button>
        </>
      )}
    </Container>
  );
};

export default Cities;
