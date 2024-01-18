import { CircularProgress, Container, Grid, Typography } from "@mui/material";
import { useState } from "react";
import server from "../../api/server";
import Box from "@mui/material/Box";
import { LoadingButton } from "@mui/lab";
import { renderStatusEmploy } from "../../utils/common";
import { useNavigate } from "react-router-dom";

const EmployeeShow = () => {
  const [order, setOrder] = useState(JSON.parse(localStorage.getItem("order")));
  const [loading, setLoading] = useState(false);
  const [cancel, setCancel] = useState(false);
  const [accept, setAccept] = useState(false);
  const token = localStorage.getItem("token");
  //   const order = JSON.parse(localStorage.getItem("order"));
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
      navigate("/admin/employment");
      setCancel(false);
      //   getData();
    } catch (error) {
      console.log(error);
    }
  };
  const acceptOrder = async (id) => {
    setAccept(id);
    try {
      const { data } = await server.post(
        "/employee/update",
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

  const RenderOrders = () => {
    return (
      <Box
        sx={{
          display: "flex",
          bgcolor: "#e2e2e2",
          borderRadius: "8px",
          p: 2,
        }}
        // key={order._id}
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
            <Typography sx={{ fontFamily: "pun" }}>العمر</Typography>
            <Typography sx={{ fontFamily: "pun-bold" }}>{order.age}</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography sx={{ fontFamily: "pun" }}>الجنس</Typography>
            <Typography sx={{ fontFamily: "pun-bold" }}>{order.sex}</Typography>
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
            <Typography sx={{ fontFamily: "pun" }}>الجنسية</Typography>
            <Typography sx={{ fontFamily: "pun-bold" }}>
              {order.nationality}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography sx={{ fontFamily: "pun" }}>الوظيفة</Typography>
            <Typography sx={{ fontFamily: "pun-bold" }}>{order.job}</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography sx={{ fontFamily: "pun" }}>المؤهل الأكاديمي</Typography>
            <Typography sx={{ fontFamily: "pun-bold" }}>
              {order.education}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography sx={{ fontFamily: "pun" }}>سنوات الخبرة</Typography>
            <Typography sx={{ fontFamily: "pun-bold" }}>{order.xp}</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography sx={{ fontFamily: "pun" }}>حالة الطلب</Typography>
            <Typography sx={{ fontFamily: "pun-bold" }}>
              {renderStatusEmploy(order)}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography sx={{ fontFamily: "pun" }}>السيرة الذاتية</Typography>
            {order.file ? (
              <LoadingButton
                loading={accept === order._id}
                variant="contained"
                sx={{ fontFamily: "pun", marginInline: 1 }}
                onClick={() => window.open(order.file)}
                color="warning"
              >
                عرض
              </LoadingButton>
            ) : (
              <Typography sx={{ fontFamily: "pun-bold" }}>لا توجد</Typography>
            )}
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
                قبول
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

  return (
    <Container
      sx={{
        gap: 3,
        display: "flex",
        flexDirection: "column",
        mb: 3,
      }}
    >
      <div className="order-sec2">
        <div className="order-text1">تفاصيل طلب التوظيف</div>
      </div>

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

export default EmployeeShow;
