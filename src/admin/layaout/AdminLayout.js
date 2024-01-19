import { Box, CircularProgress } from "@mui/material";
import AdminHeader from "./AdminHeader";
import { useEffect, useState } from "react";
import { useDataFetching, useRegisterStore, useTaxStore } from "../../store";
import server from "../../api/server";
import Footer from "./AdminFooter";
import { useNavigate } from "react-router-dom";

const AdminLayout = ({ el }) => {
  const { setReg } = useRegisterStore();
  const { setTax } = useTaxStore();
  const { data, loading, error, fetchData } = useDataFetching();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [loadingUser, setLoadingUser] = useState(true);

  const authUser = async () => {
    try {
      await server.get("/employee/get", {
        headers: {
          Authorization: token,
        },
      });
      setLoadingUser(false);
    } catch (error) {
      navigate("/admin");
    }
  };

  const getRegister = async () => {
    try {
      const { data } = await server.get("/register/get");
      setReg(data);
      getTax();
    } catch (error) {
      console.log(error);
    }
  };
  const getTax = async () => {
    try {
      const { data } = await server.get("/tax/get");
      setTax(data);
      // setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    authUser();
    getRegister();
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
      {loading || loadingUser ? (
        <div
          style={{
            width: "100%",
            textAlign: "center",
            color: "#0D1786",
            height: "100%",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <>
          <AdminHeader />
          <Box sx={{ mt: 10 }}>{el}</Box>
          <div style={{ alignSelf: "flex-end" }}>
            <Footer />
          </div>
        </>
      )}
    </div>
  );
};

export default AdminLayout;
