import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import server from "../../api/server";
import { useState } from "react";
import { DialogActions, IconButton, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { VisuallyHiddenInput } from "../../utils/common";
import { UploadRounded } from "@mui/icons-material";
import { UploadClient } from "@uploadcare/upload-client";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function AddServicePopup({
  open,
  setOpen,
  update,
  url,
  title,
  id,
}) {
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState("");
  const [errorText, setErrorText] = useState("");

  const upload = async () => {
    const client = new UploadClient({
      publicKey: "b24e8c6aa1560babe17f",
    });
    const { cdnUrl } = await client.uploadFile(file);
    addService(cdnUrl);
  };

  const addService = async (link) => {
    // if (!title || !description || !details) return;
    try {
      const { data } = await server.post(
        url,
        { link, id },
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
      //   setErrorText(error.response.data);
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
    setLoading(true);
    upload();
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
            sx={{
              marginTop: "10px",
              marginLeft: "10px",
              // width: "10vw",
              bgcolor: "#0D1786",
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
