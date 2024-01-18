import { Container, Grid, Typography } from "@mui/material";
import { useState } from "react";
import server from "../../api/server";
import Box from "@mui/material/Box";
import { LoadingButton } from "@mui/lab";
import { renderStatus } from "../../utils/common";
import { useNavigate } from "react-router-dom";

const SupportShow = () => {
  const [order, setOrder] = useState(JSON.parse(localStorage.getItem("order")));
  const [cancel, setCancel] = useState(false);
  const [accept, setAccept] = useState(false);
  const token = localStorage.getItem("token");
  //   const order = JSON.parse(localStorage.getItem("order"));
  const navigate = useNavigate();

  const cancelOrder = async (id) => {
    setCancel(id);
    try {
      await server.post(
        "/complain/remove",
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
      navigate("/admin/support");
      //   getData();
    } catch (error) {
      console.log(error);
    }
  };
  const acceptOrder = async (id) => {
    setAccept(id);
    try {
      const { data } = await server.post(
        "/complain/update",
        {
          id,
          statusId: 2,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setAccept(false);
      setOrder(data);
    } catch (error) {
      console.log(error);
    }
  };
  const completeOrder = async (id) => {
    setAccept(id);
    try {
      const { data } = await server.post(
        "/complain/update",
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
      setOrder(data);
    } catch (error) {
      console.log(error);
    }
  };

  const RenderOrders = () => {
    return (
      <Box
        sx={{
          display: "flex",
          bgcolor: "#e2e2e2",
          borderRadius: "8px",
          p: 2,
        }}
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
            <Typography sx={{ fontFamily: "pun" }}>الاسم</Typography>
            <Typography sx={{ fontFamily: "pun-bold" }}>
              {order.name}
            </Typography>
          </Grid>

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

          <Grid item xs={12} md={4}>
            <Typography sx={{ fontFamily: "pun" }}>الحي</Typography>
            <Typography sx={{ fontFamily: "pun-bold" }}>
              {order.neighborhood}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography sx={{ fontFamily: "pun" }}>نوع الطلب</Typography>
            <Typography sx={{ fontFamily: "pun-bold" }}>
              {order.type}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography sx={{ fontFamily: "pun" }}>حالة الطلب</Typography>
            <Typography sx={{ fontFamily: "pun-bold" }}>
              {renderStatus({ row: order })}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography sx={{ fontFamily: "pun" }}>تفاصيل الشكوى</Typography>
            <Typography sx={{ fontFamily: "pun-bold" }}>
              {order.description}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            {order.statusId === 1 && (
              <LoadingButton
                loading={accept === order._id}
                variant="contained"
                sx={{ fontFamily: "pun", marginInline: 1 }}
                onClick={() => acceptOrder(order._id)}
              >
                قيد المعالجة
              </LoadingButton>
            )}
            {order.statusId === 2 && (
              <LoadingButton
                loading={accept === order._id}
                variant="contained"
                sx={{ fontFamily: "pun", marginInline: 1 }}
                onClick={() => completeOrder(order._id)}
              >
                مكتمل
              </LoadingButton>
            )}
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
  };

  //
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
        <div className="order-text1">تفاصيل الشكوى</div>
      </div>

      <RenderOrders />
    </Container>
  );
};

export default SupportShow;
