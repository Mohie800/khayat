import { Delete } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
const HomeBanner = ({ data = [], setId, setDelete }) => {
  const handleDelete = (id) => {
    setId(id);
    setDelete(true);
  };
  const renderData = () => {
    return data.map((item) => {
      return (
        <Grid item xs={12} md={4} key={item._id}>
          <Box display="flex" flexDirection={"column"}>
            <img
              src={item.url}
              alt="logo"
              style={{ height: "200px", objectFit: "contain" }}
            />
            <Button
              variant="contained"
              color="error"
              sx={{ mt: 2, fontFamily: "pun-bold" }}
              onClick={() => handleDelete(item._id)}
            >
              <Delete />
              حذف
            </Button>
          </Box>
        </Grid>
      );
    });
  };
  return (
    <Grid
      container
      spacing={4}
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      alignContent="stretch"
      wrap="wrap"
    >
      {data.length === 0 ? (
        <Typography sx={{ fontFamily: "pun-bold" }}>لا توجد صور</Typography>
      ) : (
        renderData()
      )}
    </Grid>
  );
};

export default HomeBanner;
