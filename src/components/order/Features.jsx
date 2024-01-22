import { GppGoodOutlined, Group, WorkspacePremium } from "@mui/icons-material";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import { FaHandHolding } from "react-icons/fa";

const Features = () => {
  return (
    <div className="feat-root">
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        alignContent="stretch"
        wrap="wrap"
        maxWidth="90%"
        // mt={{ xs: 4, md: 0 }}
      >
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              paddingInline: 4,
            }}
          >
            <div className="feat-circle">
              <WorkspacePremium
                fontSize="inherit"
                sx={{
                  fontSize: "4rem",
                  // color: "#2F2F2F",
                  color: "inherit",
                  ":hover": { color: "inherit" },
                }}
              />
            </div>
            <div className="feat-text1">جودة عالية</div>
            <div className="feat-text2">
              نحرص دائمًا على تقديم أفضل خدمة وأعلى مستويات الجودة في التصميم
              والخياطة، لضمان رضاكم التام وإبراز أناقتكم بأبهى طلة
            </div>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            borderInline: { md: "1px solid #d7d3d3" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              paddingInline: 4,
            }}
          >
            <div className="feat-circle">
              <GppGoodOutlined
                fontSize="inherit"
                sx={{
                  fontSize: "4rem",
                  // color: "#2F2F2F",
                  color: "inherit",
                  ":hover": { color: "inherit" },
                }}
              />
            </div>
            <div className="feat-text1">ضمان مميز</div>
            <div className="feat-text2">
              ضمان فريد على جودة الاقمشة ،وضمان على التعديل في المقاسات
            </div>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              paddingInline: 4,
            }}
          >
            <div className="feat-circle" style={{ flexDirection: "column" }}>
              <Group
                fontSize="inherit"
                sx={{
                  fontSize: "2rem",
                  // color: "#2F2F2F",
                  color: "inherit",
                  ":hover": { color: "inherit" },
                  marginBottom: -3.5,
                }}
              />
              <FaHandHolding
                fontSize="inherit"
                style={{
                  fontSize: "3rem",
                  // color: "#2F2F2F",
                  color: "inherit",
                  ":hover": { color: "inherit" },
                }}
              />
            </div>
            <div className="feat-text1">هدفنا راحة العميل</div>
            <div className="feat-text2">
              زيارة العميل في أي موقع يفضله (المنزل ، العمل) وأخذ المقاسات ثم
              التسليم خلال 10 أيام بحد أقصى
            </div>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Features;
