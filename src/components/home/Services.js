import { Grid, Typography } from "@mui/material";

const Services = ({ data = [] }) => {
  // const data = [
  //   {
  //     id: 1,
  //     img: ser1,
  //     title: "بكج ثوبين",
  //     discription: "ابتداءً بـ 599 حسب اختيارك الاقمشة",
  //     details:
  //       "ابتداءً بـ 599 حسب اختيارك الاقمشة، شاملة الخدمة والتوصيل والضريبة",
  //   },
  //   {
  //     id: 2,
  //     img: ser2,
  //     title: "بكج 3 ثياب",
  //     discription: "ابتداءً بـ 799 حسب اختيارك الاقمشة",
  //     details:
  //       "ابتداءً بـ 597 حسب اختيارك الاقمشة، شاملة الخدمة والتوصيل والضريبة",
  //   },
  //   {
  //     id: 3,
  //     img: ser3,
  //     title: "بكج حسب تفصيلك",
  //     discription: "السعر حسب اختيارك للأقمشة",
  //     details: "اختار عدد ثياب معينة وقماش معين",
  //   },
  // ];

  const renderServices = () => {
    return data.map((item) => {
      return (
        <Grid
          item
          key={item.id}
          xs={12}
          md={4}
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            mt: 5,
          }}
        >
          <div style={{ width: "100%" }}>
            <div
              className="ser-img-root animate pop"
              style={{ backgroundImage: `url(${item.url})` }}
            >
              {/* <img src={item.img} alt="service" className="ser-img" /> */}
              <div className="ser-text4">{item.details}</div>
            </div>
            <div className="ser-text5">{item.description}</div>
            <div className="ser-text3">{item.title}</div>
          </div>
        </Grid>
      );
    });
  };
  return (
    <>
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        wrap="wrap"
      >
        {data.length === 0 || !data ? (
          <Typography sx={{ fontFamily: "pun-bold" }}>لا توجد خدمات</Typography>
        ) : (
          renderServices()
        )}
      </Grid>
    </>
  );
};

export default Services;
