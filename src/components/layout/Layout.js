import { Box, CircularProgress } from "@mui/material";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { useDataFetching } from "../../store";
import { useEffect } from "react";

const Layout = ({ el }) => {
  const { data, loading, error, fetchData } = useDataFetching();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      style={{
        display: "grid",
        flexDirection: "column",
        // justifyContent: "space-between",
        minHeight: "100vh",
      }}
    >
      {loading ? (
        <div style={{ width: "100%", textAlign: "center" }}>
          <CircularProgress sx={{ color: "#0D1786" }} />
        </div>
      ) : (
        <>
          <Header />
          <Box sx={{ mt: 7.5 }}>{el}</Box>
          <div style={{ alignSelf: "flex-end" }}>
            <Footer />
          </div>
        </>
      )}
    </div>
  );
};

export default Layout;
