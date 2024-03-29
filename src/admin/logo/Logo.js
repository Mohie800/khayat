import { Box, Button, Container, Divider, Grid } from "@mui/material";
import { useDataFetching } from "../../store";
import { useEffect, useState } from "react";
import HomeBanner from "./HomeBanner";
import AddServicePopup from "./AddPopup";
import DeletePopup from "./DeletePopup";

const Logo = () => {
  const { data, loading, error, fetchData } = useDataFetching();
  const [addLogo, setAddLogo] = useState(false);
  const [addTail, setAddTail] = useState(false);
  const [addHomeBanner, setaddHomeBanner] = useState(false);
  const [addOrderBanner, setAddOrderBanner] = useState(false);
  const [deleteHomeBanner, setDeleteHomeBanner] = useState(false);
  const [deleteOrderBanner, setDeleteOrderBanner] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);

  return (
    <Container
      sx={{
        gap: 3,
        display: "flex",
        flexDirection: "column",
        maxWidth: { xs: "90%", sm: "500px", md: "80%" },
        mb: 2,
      }}
    >
      <div className="order-sec2">
        <div className="order-text1">تعديل الشعار والتصاميم</div>
      </div>
      {!loading && (
        <>
          <Grid
            container
            spacing={1}
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            alignContent="stretch"
            wrap="wrap"
          >
            <Grid item xs={12} sm={6}>
              <div className="order-text1" style={{ color: "#1f1f1f" }}>
                الشعار
              </div>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "auto",
                  mt: 2,
                }}
              >
                <img
                  src={data.logo?.url}
                  alt="logo"
                  style={{ height: 150, width: "fit-content" }}
                />
                <div>
                  <Button
                    variant="contained"
                    color="warning"
                    sx={{ mt: 2, fontFamily: "pun-bold" }}
                    onClick={() => setAddLogo(true)}
                  >
                    تعديل الشعار
                  </Button>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="order-text1" style={{ color: "#1f1f1f" }}>
                تصميم ذيل الصفحة الرئيسية
              </div>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "auto",
                  mt: 2,
                }}
              >
                <img
                  src={data.logo?.homePic}
                  alt="logo"
                  style={{ height: 150, width: "fit-content" }}
                />
                <div>
                  <Button
                    variant="contained"
                    color="warning"
                    sx={{ mt: 2, fontFamily: "pun-bold" }}
                    onClick={() => setAddTail(true)}
                  >
                    تعديل الصورة
                  </Button>
                </div>
              </Box>
            </Grid>
          </Grid>
          <Divider />
          <div
            className="order-text1"
            style={{
              color: "#1f1f1f",
              marginTop: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            تصاميم الصفحة الرئيسية
            <div>
              <Button
                variant="contained"
                color="warning"
                sx={{ mt: 2, fontFamily: "pun-bold", mr: 2 }}
                onClick={() => setaddHomeBanner(true)}
              >
                إضافة تصميم
              </Button>
            </div>
          </div>
          <HomeBanner
            data={data.homeBanner}
            setDelete={setDeleteHomeBanner}
            setId={setIdToDelete}
          />
          <Divider />
          <div
            className="order-text1"
            style={{
              color: "#1f1f1f",
              marginTop: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            تصاميم صفحة الطلبات
            <div>
              <Button
                variant="contained"
                color="warning"
                sx={{ mt: 2, fontFamily: "pun-bold", mr: 2 }}
                onClick={() => setAddOrderBanner(true)}
              >
                إضافة تصميم
              </Button>
            </div>
          </div>
          <HomeBanner
            data={data.orderBanner}
            setDelete={setDeleteOrderBanner}
            setId={setIdToDelete}
          />
        </>
      )}
      <AddServicePopup
        open={addLogo}
        setOpen={setAddLogo}
        title="تعديل الشعار"
        url="/logo/update"
        update={fetchData}
        id={data.logo?._id}
      />
      <AddServicePopup
        open={addTail}
        setOpen={setAddTail}
        title="تعديل ذيل الصفحة الرئيسية"
        url="/logo/update-home-pic"
        update={fetchData}
        id={data.logo?._id}
      />
      <AddServicePopup
        open={addHomeBanner}
        setOpen={setaddHomeBanner}
        title="إضافة تصميم للصفحة الرئيسية"
        url="/banner-home/create"
        update={fetchData}
      />
      <AddServicePopup
        open={addOrderBanner}
        setOpen={setAddOrderBanner}
        title="إضافة تصميم لصفحة الطلبات"
        url="/banner-order/create"
        update={fetchData}
      />
      <DeletePopup
        open={deleteHomeBanner}
        setOpen={setDeleteHomeBanner}
        title="هل أنت متأكد؟"
        update={fetchData}
        url="/banner-home/rm"
        id={idToDelete}
      />
      <DeletePopup
        open={deleteOrderBanner}
        setOpen={setDeleteOrderBanner}
        title="هل أنت متأكد؟"
        update={fetchData}
        url="/banner-order/rm"
        id={idToDelete}
      />
    </Container>
  );
};

export default Logo;
