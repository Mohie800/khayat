import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { useNavigate } from "react-router-dom";
import server from "../../api/server";
import { useState } from "react";
import { DialogActions, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function AddPopup({ open, setOpen, update }) {
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");

  const addCity = async () => {
    try {
      const { data } = await server.post(
        "/city/create",
        {
          name,
        },
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
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = () => {
    addCity();
  };

  // const handleAgeeAndContinue = () => {
  // 	sendOffer();
  // };

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
            alignItems: "center",
            justifyContent: "center",
            padding: "1vmax",
            width: "50vmin",
          }}
        >
          <Typography
            sx={{ fontFamily: "pun", color: "#315e5e", marginBlock: 1 }}
          >
            اسم المدينة
          </Typography>
          <TextField onChange={(e) => setName(e.target.value)} />
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
            sx={{
              marginTop: "10px",
              marginLeft: "10px",
              // width: "10vw",
              bgcolor: "#315e5e",
              fontFamily: "pun",
            }}
            onClick={handleAdd}
          >
            إضافة
          </LoadingButton>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
