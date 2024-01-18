import { Grid, IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";

const ServicesData = ({ data, handleRemove }) => {
  const renderServices = () => {
    return data.map((item) => {
      console.log(`url(${item.url})`);
      return (
        <Grid
          item
          key={item._id}
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
            <div style={{ position: "relative" }}>
              <div
                className="ser-img-root animate pop"
                style={{
                  backgroundImage: `url(${item.url})`,
                }}
              >
                <div className="ser-text4">{item.details}</div>
              </div>
            </div>
            <div className="ser-text5">{item.description}</div>
            <div className="ser-text3">{item.title}</div>
            <IconButton color="error" onClick={() => handleRemove(item)}>
              <Delete />
            </IconButton>
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
        {renderServices()}
      </Grid>
    </>
  );
};

export default ServicesData;
