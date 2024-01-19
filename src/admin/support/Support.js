import { Box, Button, CircularProgress, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import server from "../../api/server";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { renderStatus } from "../../utils/common";

const Support = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  const columns = [
    { field: "id", headerName: "رقم الطلب", width: 150, hide: true },
    {
      field: "name",
      headerName: "الاسم",
      width: 150,
      // editable: true,
    },

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
      field: "type",
      headerName: "نوع الطلب",
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
        id: item.id || Math.random(5).toFixed(5) * 100000,
        name: item.name,
        phone: item.phone,
        city: item.city,
        type: item.type,
        statusId: item.statusId,
      };
    });
  };

  const handleShow = (params) => {
    const show = data.filter((item) => item.name === params.row.name);
    console.log(data);
    localStorage.setItem("order", JSON.stringify(show[0]));
    navigate("/admin/support/show");
  };

  const getData = async () => {
    try {
      const { data } = await server.get("/complain/get", {
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
        <div className="order-text1">الشكاوى وطلبات التعديل</div>
      </div>
      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
        <Button
          variant="contained"
          sx={{ fontFamily: "pun" }}
          color="secondary"
          onClick={() => navigate("/admin/support/new")}
        >
          الطلبات الجديدة
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
            maxWidth: { xs: "300px", md: "90%" },
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
            onRowClick={handleShow}
          />
        </Box>
      )}
    </Container>
  );
};

export default Support;
