import {
  Alert,
  Container,
  IconButton,
  MenuItem,
  Select,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { VisuallyHiddenInput } from "../../utils/common";
import { useNavigate } from "react-router-dom";
import server from "../../api/server";
import { ExpandMore, UploadRounded } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { UploadClient } from "@uploadcare/upload-client";

const nationalityData = [
  "السعودية",
  "السودان",
  "الاردن",
  "سوريا",
  "فلسطين",
  "فلسطين (وثيقة مصرية)",
  "لبنان",
  "اليمن",
  "الصومال",
  "اثيوبيا",
  "ارتيريا",
  "المغرب",
  "تونس",
  "الجزائر",
  "ليبيا",
  "اخرى",
];

const Employee = () => {
  const [feedBack, setFeedBack] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorF, setErrorF] = useState(false);
  const [sex, setSex] = useState("ذكر");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [nationality, setNationality] = useState("السعودية");
  const [job, setJob] = useState("مندوب توصيل");
  const [education, setEducation] = useState("ثانوية فأقل");
  const [xp, setXp] = useState("أقل من سنة");
  const [file, setFile] = useState(null);

  const navigate = useNavigate();

  const handleChangeSex = (event) => {
    setSex(event.target.value);
  };

  const handleChangeNationality = (event) => {
    setNationality(event.target.value);
  };

  const handleChangeJob = (event) => {
    setJob(event.target.value);
  };
  const handleChangeEdu = (event) => {
    setEducation(event.target.value);
  };

  const handleChangeXp = (event) => {
    setXp(event.target.value);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
  };

  const upload = async () => {
    setErrorF(true);
    if (!name || !city || !age || !phone || !nationality) return;
    setLoading(true);
    const client = new UploadClient({
      publicKey: "b24e8c6aa1560babe17f",
    });
    const { cdnUrl } = await client.uploadFile(file);
    sendOrder(cdnUrl);
  };

  const sendOrder = async (link) => {
    try {
      const { data } = await server.post("/employee/create", {
        name,
        age,
        sex,
        phone,
        city,
        nationality,
        job,
        education,
        xp,
        link,
        statusId: 1,
      });
      setFeedBack(true);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <Container
      sx={{
        gap: 1,
        display: "flex",
        flexDirection: "column",
        maxWidth: "700px",
        direction: "rtl",
        mb: 30,
      }}
    >
      <Snackbar open={feedBack} autoHideDuration={5000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{ width: "100%", gap: 2 }}
        >
          <div className="order-text2">تم إرسال الطلب بنجاح</div>
        </Alert>
      </Snackbar>
      <div className="order-sec2">
        <div className="order-text1">طلب توظيف</div>
      </div>
      <div className="order-text2" style={{ marginTop: "20px" }}>
        الاسم ثلاثي :
      </div>
      <TextField
        sx={{
          ".MuiOutlinedInput-root": {
            bgcolor: "#eee",
            color: "#1f1f1f",
          },
          ".MuiOutlinedInput-input": {
            fontFamily: "pun",
          },
        }}
        fullWidth
        size="small"
        onChange={(e) => setName(e.target.value)}
        error={!name && errorF}
      />
      <div className="order-text2" style={{ marginTop: "20px" }}>
        العمر :
      </div>
      <TextField
        sx={{
          ".MuiOutlinedInput-root": {
            bgcolor: "#eee",
            color: "#1f1f1f",
          },
          ".MuiOutlinedInput-input": {
            fontFamily: "pun",
          },
        }}
        fullWidth
        size="small"
        onChange={(e) => setAge(e.target.value)}
        error={!age && errorF}
      />
      <div className="order-text2" style={{ marginTop: "20px" }}>
        الجنس :
      </div>
      <Select
        sx={{ fontFamily: "pun-bold", direction: "rtl", bgcolor: "#eee" }}
        value={sex}
        onChange={handleChangeSex}
        fullWidth
        IconComponent={() => <ExpandMore />}
        size="small"
      >
        <MenuItem sx={{ fontFamily: "pun-bold" }} value={"ذكر"}>
          ذكر
        </MenuItem>
        <MenuItem sx={{ fontFamily: "pun-bold" }} value={"انثى"}>
          انثى
        </MenuItem>
      </Select>
      <div className="order-text2" style={{ marginTop: "20px" }}>
        رقم الجوال
      </div>
      <TextField
        sx={{
          ".MuiOutlinedInput-root": {
            bgcolor: "#eee",
            color: "#1f1f1f",
          },
          ".MuiOutlinedInput-input": {
            fontFamily: "pun",
          },
        }}
        error={!phone && errorF}
        fullWidth
        size="small"
        type="number"
        onChange={(e) => setPhone(e.target.value)}
      />
      <div className="order-text2" style={{ marginTop: "20px" }}>
        المدينة :
      </div>
      <TextField
        sx={{
          ".MuiOutlinedInput-root": {
            bgcolor: "#eee",
            color: "#1f1f1f",
          },
          ".MuiOutlinedInput-input": {
            fontFamily: "pun",
          },
        }}
        fullWidth
        size="small"
        onChange={(e) => setCity(e.target.value)}
        error={!city && errorF}
      />
      <div className="order-text2" style={{ marginTop: "20px" }}>
        الجنسية :
      </div>
      <Select
        sx={{ fontFamily: "pun-bold", direction: "rtl", bgcolor: "#eee" }}
        value={nationality}
        onChange={handleChangeNationality}
        fullWidth
        IconComponent={() => <ExpandMore />}
        size="small"
      >
        {nationalityData.map((item) => {
          return (
            <MenuItem sx={{ fontFamily: "pun-bold" }} value={item}>
              {item}
            </MenuItem>
          );
        })}
      </Select>
      <div className="order-text2" style={{ marginTop: "20px" }}>
        الوظيفة :
      </div>
      <Select
        sx={{ fontFamily: "pun-bold", direction: "rtl", bgcolor: "#eee" }}
        value={job}
        onChange={handleChangeJob}
        fullWidth
        IconComponent={() => <ExpandMore />}
        size="small"
      >
        <MenuItem sx={{ fontFamily: "pun-bold" }} value={"مندوب توصيل"}>
          مندوب توصيل
        </MenuItem>
        <MenuItem sx={{ fontFamily: "pun-bold" }} value={"قيّاس"}>
          قيّاس
        </MenuItem>
        <MenuItem sx={{ fontFamily: "pun-bold" }} value={"مبيعات وخدمة عملاء"}>
          مبيعات وخدمة عملاء
        </MenuItem>
      </Select>
      <div className="order-text2" style={{ marginTop: "20px" }}>
        أعلى مؤهل أكاديمي :
      </div>
      <Select
        sx={{ fontFamily: "pun-bold", direction: "rtl", bgcolor: "#eee" }}
        value={education}
        onChange={handleChangeEdu}
        fullWidth
        IconComponent={() => <ExpandMore />}
        size="small"
      >
        <MenuItem sx={{ fontFamily: "pun-bold" }} value={"ثانوية فأقل"}>
          ثانوية فأقل
        </MenuItem>
        <MenuItem sx={{ fontFamily: "pun-bold" }} value={"دبلوم"}>
          دبلوم
        </MenuItem>
        <MenuItem sx={{ fontFamily: "pun-bold" }} value={"بكلاريوس"}>
          بكلاريوس
        </MenuItem>
        <MenuItem sx={{ fontFamily: "pun-bold" }} value={"ماجستير"}>
          ماجستير
        </MenuItem>
        <MenuItem sx={{ fontFamily: "pun-bold" }} value={"دكتوراه"}>
          دكتوراه
        </MenuItem>
      </Select>
      <div className="order-text2" style={{ marginTop: "20px" }}>
        عدد سنوات الخبرة :
      </div>
      <Select
        sx={{ fontFamily: "pun-bold", direction: "rtl", bgcolor: "#eee" }}
        value={xp}
        onChange={handleChangeXp}
        fullWidth
        IconComponent={() => <ExpandMore />}
        size="small"
      >
        <MenuItem sx={{ fontFamily: "pun-bold" }} value={"أقل من سنة"}>
          أقل من سنة
        </MenuItem>
        <MenuItem sx={{ fontFamily: "pun-bold" }} value={"من سنة إلى سنتين"}>
          من سنة إلى سنتين
        </MenuItem>
        <MenuItem sx={{ fontFamily: "pun-bold" }} value={"من 3 إلى 5 سنوات"}>
          من 3 إلى 5 سنوات
        </MenuItem>
        <MenuItem sx={{ fontFamily: "pun-bold" }} value={"من 6 إالى 10 سنوات"}>
          من 6 إلى 10 سنوات
        </MenuItem>
        <MenuItem sx={{ fontFamily: "pun-bold" }} value={"أكثر من 10 سنوات"}>
          أكثر من 10 سنوات
        </MenuItem>
      </Select>
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
            يرجى إرفاق صورة من ملف السيرة الذاتية (اختياري)
          </Typography>
        )}
      </div>
      <LoadingButton
        loading={loading}
        variant="contained"
        fullWidth
        sx={{
          bgcolor: "#0D1786",
          ":hover": {
            bgcolor: "#001b91",
          },
        }}
        onClick={upload}
      >
        <div className="order-text1">إرسال</div>
      </LoadingButton>
    </Container>
  );
};

export default Employee;
