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
import { useTaxStore } from "../../store";
import { VisuallyHiddenInput } from "../../utils/common";
import { UploadRounded } from "@mui/icons-material";
import { UploadClient } from "@uploadcare/upload-client";

const TaxRecord = () => {
  const { setTax, tax } = useTaxStore();
  const [loading, setLoading] = useState(false);
  const [number, setNumber] = useState(tax.number);
  const [file, setFile] = useState(null);
  const [file1, setFile1] = useState(null);

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
  const upload1 = async () => {
    setLoading(true);
    if (file1) {
      const client = new UploadClient({
        publicKey: "b24e8c6aa1560babe17f",
      });
      const { cdnUrl } = await client.uploadFile(file1);
      updateData1(cdnUrl);
    } else {
      updateData1();
    }
  };

  const updateData = async (link) => {
    try {
      const { data } = await server.post(
        "/tax/update",
        { number: `${number}`, id: tax._id, link },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setTax(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const updateData1 = async (link) => {
    try {
      const { data } = await server.post(
        "/tax/update-url",
        { id: tax._id, link },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setTax(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   getData();
  // }, []);

  const handleSave = () => {
    if (file1) {
      upload();
      upload1();
    } else {
      upload();
    }
  };

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
          <CircularProgress sx={{ color: "#315e5e" }} />
        </div>
      ) : (
        <>
          <div className="order-sec2">
            <div className="order-text1">بيانات التسجيل الضريبي</div>
          </div>
          <Typography
            sx={{ fontFamily: "pun", color: "#315e5e", marginBlock: 1 }}
          >
            رقم التسجيل الضريبي
          </Typography>
          <TextField
            defaultValue={tax.number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <div className="box12" style={{ marginTop: 10 }}>
            <IconButton component="label">
              <VisuallyHiddenInput
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                accept=".png, jpg "
              />
              <div className="box13">
                <UploadRounded sx={{ color: "#fff" }} />
              </div>
            </IconButton>
            {file ? (
              <Typography
                sx={{ fontFamily: "pun", color: "#315e5e", marginBlock: 1 }}
                className="text2 t201 bold"
                style={{ textAlign: "center" }}
              >
                {file.name}
              </Typography>
            ) : (
              <Typography
                sx={{ fontFamily: "pun", color: "#315e5e", marginBlock: 1 }}
              >
                قم برفع الصورة الأولى
              </Typography>
            )}
          </div>
          <div className="box12" style={{ marginTop: 10 }}>
            <IconButton component="label">
              <VisuallyHiddenInput
                type="file"
                onChange={(e) => setFile1(e.target.files[0])}
                accept=".png, jpg "
              />
              <div className="box13">
                <UploadRounded sx={{ color: "#fff" }} />
              </div>
            </IconButton>
            {file1 ? (
              <Typography
                sx={{ fontFamily: "pun", color: "#315e5e", marginBlock: 1 }}
                className="text2 t201 bold"
                style={{ textAlign: "center" }}
              >
                {file1.name}
              </Typography>
            ) : (
              <Typography
                sx={{ fontFamily: "pun", color: "#315e5e", marginBlock: 1 }}
              >
                قم برفع الصورة الثانية
              </Typography>
            )}
          </div>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#315e5e",
              fontFamily: "pun",
              paddingInline: 4,
              width: "max-content",
            }}
            onClick={handleSave}
          >
            حفظ
          </Button>
        </>
      )}
    </Container>
  );
};

export default TaxRecord;
