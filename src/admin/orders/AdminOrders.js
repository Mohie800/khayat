import { Button, CircularProgress, Container } from "@mui/material";
import { useEffect, useState } from "react";
import server from "../../api/server";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { renderStatus } from "../../utils/common";
import { useNavigate } from "react-router-dom";

const AdminOrders = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  const columns = [
    { field: "id", headerName: "رقم الطلب", width: 150, hide: true },
    {
      field: "phone",
      headerName: "رقم الجوال",
      width: 150,
      // editable: true,
    },
    {
      field: "city",
      headerName: "المدينة",
      width: 150,
      // editable: true,
    },
    {
      field: "statusId",
      headerName: "حالة الطلب",
      width: 150,
      renderCell: renderStatus,
      // editable: true,
    },
  ];

  const rows = () => {
    return data.map((item) => {
      return {
        id: item.no,
        phone: item.phone,
        city: item.city,
        statusId: item.statusId,
      };
    });
  };

  const getData = async () => {
    try {
      const { data } = await server.get("/order/get", {
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
        <div className="order-text1">إدارة الطلبات</div>
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
        <Button
          variant="contained"
          sx={{ fontFamily: "pun" }}
          color="warning"
          onClick={() => navigate("/admin/orders/pending")}
        >
          قيد الإجراء
        </Button>
      </Box>
      {loading ? (
        <div style={{ textAlign: "center" }}>
          <CircularProgress sx={{ color: "#0D1786" }} />
        </div>
      ) : (
        <Box
          sx={{
            height: 400,
            width: "100%",
            overflow: "auto",
            maxWidth: { xs: "300px", md: "700px" },
          }}
        >
          <DataGrid
            rows={rows()}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
            disableColumnFilter
            disableColumnSelector
          />
        </Box>
      )}
    </Container>
  );
};

export default AdminOrders;
