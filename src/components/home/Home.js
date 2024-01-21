import { useCallback, useEffect, useState } from "react";
import Features from "../order/Features";
import { Checkbox, CircularProgress, Grid } from "@mui/material";
import { Circle, CircleOutlined } from "@mui/icons-material";
import "./home.css";
import Services from "./Services";
import img1 from "../../assets/callus.png";
import img3 from "../../assets/Untitled design (1).png";
import img2 from "../../assets/Untitled design (2).png";
import { useNavigate } from "react-router-dom";
import { useDataFetching } from "../../store";

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();

  const { data, loading } = useDataFetching();

  const images = data.homeBanner.map((item) => item.url);
  const renderCheckBox = () => {
    return data.homeBanner.map((item, i) => {
      return (
        <Checkbox
          key={Math.random()}
          icon={<CircleOutlined fontSize="small" sx={{ color: "#fff" }} />}
          checkedIcon={<Circle fontSize="small" sx={{ color: "#fff" }} />}
          checked={currentImage === i}
          onChange={() => setCurrentImage(i)}
        />
      );
    });
  };

  const switchImage = useCallback(() => {
    if (currentImage < images.length - 1) {
      setCurrentImage(currentImage + 1);
    } else {
      setCurrentImage(0);
    }
  }, [currentImage, images]);

  useEffect(() => {
    const interval = setInterval(switchImage, 6000);
    return () => clearInterval(interval);
  }, [switchImage]);

  return (
    <div className="home-root">
      {/* <Header /> */}
      <div
        className="order-bg-img"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      >
        {loading ? (
          <div
            style={{
              width: "100vw",
              textAlign: "center",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </div>
        ) : (
          <div style={{ display: "flex" }}>{renderCheckBox()}</div>
        )}
      </div>
      <div className="ser-root">
        <div className="services">
          <div className="ser-text1">خدماتنا</div>
          <Services data={data.services} />
          <div className="home-btn-root">
            {/* <Grid
              container
              spacing={1}
              direction="row"
              justifyContent="center"
              alignItems="center"
              alignContent="center"
              wrap="wrap"
            >
              <Grid item xs={6} md={4}>
                <img
                  src={img2}
                  alt="call"
                  className="home-btn-img"
                  onClick={() => navigate("/order")}
                />
              </Grid>
              <Grid item xs={6} md={4}>
                <img
                  src={img1}
                  alt="call"
                  className="home-btn-img"
                  onClick={() => navigate("/contacts")}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <img
                  src={img3}
                  alt="call"
                  className="home-btn-img"
                  onClick={() => navigate("/complains")}
                />
              </Grid>
            </Grid> */}
          </div>
        </div>
      </div>

      <Features />
      <div className="home-footer">
        <img
          src={data.logo?.homePic}
          alt="footer"
          className="home-footer-img"
        />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
