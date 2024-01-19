import {
  Button,
  CircularProgress,
  Container,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import server from "../../api/server";
import { useState } from "react";
import { useRegisterStore } from "../../store";
import { VisuallyHiddenInput } from "../../utils/common";
import { UploadRounded } from "@mui/icons-material";
import { UploadClient } from "@uploadcare/upload-client";

const Register = () => {
  const { setReg, reg } = useRegisterStore();
  const [loading, setLoading] = useState(false);
  const [number, setNumber] = useState(reg.number);
  const [authNo, setAuthNo] = useState(reg.authNo);
  const [file, setFile] = useState(null);

  const token = localStorage.getItem("token");

  const upload = async () => {
    setLoading(true);
    if (file) {
      const client = new UploadClient({
        publicKey: "b24e8c6aa1560babe17f",
      });
      const { cdnUrl } = await client.uploadFile(file);
      updateData(cdnUrl);
    } else {
      updateData();
    }
  };

  const updateData = async (link) => {
    try {
      const { data } = await server.post(
        "/register/update",
        { number, id: reg._id, link, authNo },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setReg(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <Container
      sx={{
        gap: 3,
        display: "flex",
        flexDirection: "column",
        maxWidth: "700px",
        mb: 2,
      }}
    >
      {loading ? (
        <div style={{ textAlign: "center" }}>
          <CircularProgress sx={{ color: "#0D1786" }} />
        </div>
      ) : (
        <>
          <div className="order-sec2">
            <div className="order-text1">بيانات السجل التجاري</div>
          </div>
          <Typography
            sx={{ fontFamily: "pun", color: "#0D1786", marginBlock: 1 }}
          >
            رقم السجل التجاري
          </Typography>
          <TextField
            defaultValue={reg.number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <Typography
            sx={{ fontFamily: "pun", color: "#0D1786", marginBlock: 1 }}
          >
            رقم شهادة التوثيق الإلكتروني
          </Typography>
          <TextField
            defaultValue={reg.authNo}
            onChange={(e) => setAuthNo(e.target.value)}
          />
          <div className="box12" style={{ marginTop: 10 }}>
            <IconButton component="label">
              <VisuallyHiddenInput
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                accept="image/png, image/gif, image/jpeg"
              />
              <div className="box13">
                <UploadRounded sx={{ color: "#fff" }} />
              </div>
            </IconButton>
            {file ? (
              <Typography
                sx={{ fontFamily: "pun", color: "#0D1786", marginBlock: 1 }}
                className="text2 t201 bold"
                style={{ textAlign: "center" }}
              >
                {file.name}
              </Typography>
            ) : (
              <Typography
                sx={{ fontFamily: "pun", color: "#0D1786", marginBlock: 1 }}
              >
                قم برفع صورة
              </Typography>
            )}
          </div>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#0D1786",
              fontFamily: "pun",
              paddingInline: 4,
              width: "max-content",
            }}
            onClick={upload}
          >
            حفظ
          </Button>
        </>
      )}
    </Container>
  );
};

export default Register;
