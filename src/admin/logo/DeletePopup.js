import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import server from "../../api/server";
import { useState } from "react";
import { DialogActions, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function DeletePopup({ open, setOpen, update, url, title, id }) {
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(false);
  const [errorText, setErrorText] = useState("");

  const addService = async () => {
    setLoading(true);
    try {
      const { data } = await server.post(
        url,
        { id },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      update();
      setLoading(false);
      setOpen(false);
    } catch (error) {
      console.log(error);
      if (error.response?.data) {
        setErrorText(error.response.data);
      }
    }
  };

  const RenderError = () => {
    if (!errorText) return;
    return (
      <Typography color="red" sx={{ fontFamily: "pun", mt: 2 }}>
        {errorText}
      </Typography>
    );
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = () => {
    addService();
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        className="scrollbar2"
      >
        <DialogContent
          dividers
          sx={{
            direction: "rtl",
            display: "flex",
            flexDirection: "column",
            // alignItems: "center",
            justifyContent: "center",
            padding: "1vmax",
            width: "50vmin",
          }}
        >
          <Typography
            sx={{
              fontFamily: "pun-bold",
              color: "#0D1786",
              marginBlock: 1,
              mt: 2,
            }}
          >
            {typeof title === "string" && title}
            {/* {title} */}
          </Typography>

          <RenderError />
        </DialogContent>
        <DialogActions sx={{ justifyContent: "flex-end", direction: "rtl" }}>
          <LoadingButton
            variant="contained"
            size="large"
            color="info"
            sx={{
              marginTop: "10px",
              marginLeft: "10px",
              // width: "10vw",
              bgcolor: "#727272",
              fontFamily: "pun",
            }}
            onClick={handleClose}
          >
            <div className="text3">رجوع</div>
          </LoadingButton>
          <LoadingButton
            loading={loading}
            variant="contained"
            size="large"
            color="error"
            sx={{
              marginTop: "10px",
              marginLeft: "10px",
              // width: "10vw",
              //   bgcolor: "#0D1786",
              fontFamily: "pun",
            }}
            onClick={handleAdd}
          >
            حذف
          </LoadingButton>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
