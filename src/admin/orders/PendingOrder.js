import {
  Button,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import server from "../../api/server";
import Box from "@mui/material/Box";
import { LoadingButton } from "@mui/lab";
import { useNavigate } from "react-router-dom";

const PendingOrder = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cancel, setCancel] = useState(false);
  const [accept, setAccept] = useState(false);
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  const cancelOrder = async (id) => {
    setCancel(id);
    try {
      const { data } = await server.post(
        "/order/update",
        {
          id,
          statusId: 4,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setCancel(false);
      getData();
    } catch (error) {
      console.log(error);
    }
  };
  const acceptOrder = async (id) => {
    setAccept(id);
    try {
      const { data } = await server.post(
        "/order/update",
        {
          id,
          statusId: 3,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setAccept(false);
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  const RenderOrders = () => {
    if (data.length === 0) {
      return (
        <Typography sx={{ fontFamily: "pun-bold" }}>
          لاتوجد طلبات جديدة
        </Typography>
      );
    }
    return data.map((order) => {
      return (
        <Box
          sx={{
            display: "flex",
            bgcolor: "#e2e2e2",
            borderRadius: "8px",
            p: 2,
          }}
          key={order._id}
        >
          <Grid
            container
            spacing={1}
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            alignContent="stretch"
            wrap="wrap"
          >
            <Grid item xs={12} md={4}>
              <Typography sx={{ fontFamily: "pun" }}>رقم الهاتف</Typography>
              <Typography sx={{ fontFamily: "pun-bold" }}>
                {order.phone}
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography sx={{ fontFamily: "pun" }}>المدينة</Typography>
              <Typography sx={{ fontFamily: "pun-bold" }}>
                {order.city}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <LoadingButton
                loading={accept === order._id}
                variant="contained"
                sx={{ fontFamily: "pun", marginInline: 1 }}
                onClick={() => acceptOrder(order._id)}
              >
                تم التوصيل
              </LoadingButton>
              <LoadingButton
                loading={cancel === order._id}
                variant="contained"
                sx={{ fontFamily: "pun", marginInline: 1 }}
                color="error"
                onClick={() => cancelOrder(order._id)}
              >
                الغاء الطلب
              </LoadingButton>
            </Grid>
          </Grid>
        </Box>
      );
    });
  };

  const getData = async () => {
    try {
      const { data } = await server.get("/order/pending", {
        headers: {
          Authorization: token,
        },
      });
      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Container
      sx={{
        gap: 3,
        display: "flex",
        flexDirection: "column",
        // maxWidth: { md: "700px", xs: "300px" },
        mb: 3,
      }}
    >
      <div className="order-sec2">
        <div className="order-text1">الطلبات قيد الإجراء</div>
      </div>
      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
        <Button
          variant="contained"
          sx={{ fontFamily: "pun" }}
          color="secondary"
          onClick={() => navigate("/admin/orders/new")}
        >
          الطلبات الجديدة
        </Button>
      </Box>
      {loading ? (
        <div style={{ textAlign: "center" }}>
          <CircularProgress sx={{ color: "#0D1786" }} />
        </div>
      ) : (
        <RenderOrders />
      )}
    </Container>
  );
};

export default PendingOrder;
