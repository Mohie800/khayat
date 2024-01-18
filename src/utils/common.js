import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export const renderStatus = ({ row }) => {
  if (row.statusId === 1) {
    return (
      <Typography sx={{ fontFamily: "pun-bold", color: "blue" }}>
        جديد
      </Typography>
    );
  } else if (row.statusId === 2) {
    return (
      <Typography sx={{ fontFamily: "pun-bold", color: "orange" }}>
        قيد الإجراء
      </Typography>
    );
  } else if (row.statusId === 3) {
    return (
      <Typography sx={{ fontFamily: "pun-bold", color: "green" }}>
        تم التوصيل
      </Typography>
    );
  } else if (row.statusId === 4) {
    return (
      <Typography sx={{ fontFamily: "pun-bold", color: "red" }}>
        ملغي
      </Typography>
    );
  }
};
export const renderStatusComplain = ({ row }) => {
  if (row.statusId === 1) {
    return (
      <Typography sx={{ fontFamily: "pun-bold", color: "blue" }}>
        جديد
      </Typography>
    );
  } else if (row.statusId === 2) {
    return (
      <Typography sx={{ fontFamily: "pun-bold", color: "orange" }}>
        قيد المعالجة
      </Typography>
    );
  } else if (row.statusId === 3) {
    return (
      <Typography sx={{ fontFamily: "pun-bold", color: "green" }}>
        مكتمل
      </Typography>
    );
  } else if (row.statusId === 4) {
    return (
      <Typography sx={{ fontFamily: "pun-bold", color: "red" }}>
        ملغي
      </Typography>
    );
  }
};
export const renderStatusEmploy = (row) => {
  if (row.statusId === 1) {
    return (
      <Typography sx={{ fontFamily: "pun-bold", color: "blue" }}>
        جديد
      </Typography>
    );
  } else if (row.statusId === 2) {
    return (
      <Typography sx={{ fontFamily: "pun-bold", color: "green" }}>
        تمت الموافقة
      </Typography>
    );
  }
};
export const renderStatusEmployTable = ({ row }) => {
  if (row.statusId === 1) {
    return (
      <Typography sx={{ fontFamily: "pun-bold", color: "blue" }}>
        جديد
      </Typography>
    );
  } else if (row.statusId === 2) {
    return (
      <Typography sx={{ fontFamily: "pun-bold", color: "green" }}>
        تمت الموافقة
      </Typography>
    );
  }
};
