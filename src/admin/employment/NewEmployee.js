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

const NewEmployee = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cancel, setCancel] = useState(false);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const cancelOrder = async (id) => {
    setCancel(id);
    try {
      const { data } = await server.post(
        "/employee/remove",
        {
          id,
          // statusId: 4,
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
  const acceptOrder = async (order) => {
    localStorage.setItem("order", JSON.stringify(order));
    navigate("/admin/employment/show");
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
                variant="contained"
                sx={{ fontFamily: "pun", marginInline: 1 }}
                onClick={() => acceptOrder(order)}
              >
                عرض
              </LoadingButton>
              <LoadingButton
                loading={cancel === order._id}
                variant="contained"
                sx={{ fontFamily: "pun", marginInline: 1 }}
                color="error"
                onClick={() => cancelOrder(order._id)}
              >
                حذف الطلب
              </LoadingButton>
            </Grid>
          </Grid>
        </Box>
      );
    });
  };

  const getData = async () => {
    try {
      const { data } = await server.get("/employee/new", {
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
        <div className="order-text1">طلبات التوظيف الجديدة</div>
      </div>
      {/* <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
        <Button
          variant="contained"
          sx={{ fontFamily: "pun" }}
          color="warning"
          onClick={() => navigate("/admin/orders/pending")}
        >
          قيد الإجراء
        </Button>
      </Box> */}
      {loading ? (
        <div style={{ textAlign: "center" }}>
          <CircularProgress sx={{ color: "#315e5e" }} />
        </div>
      ) : (
        <RenderOrders />
      )}
    </Container>
  );
};

export default NewEmployee;
