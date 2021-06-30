import { Box, Button, Dialog, makeStyles, TextField, Typography } from "@material-ui/core";
import React from "react";
import { Clear } from "@material-ui/icons";

const LoginDialog = ({ open, onClose }) => {
  const classes = useStyles();
  return (
    <Dialog classes={{ paper: classes.root }} open={open}>
      <Box className={classes.boxIcon}>
        <Typography className={classes.txtLog} variant="h5">
          Đăng nhập
        </Typography>
        <Clear className={classes.clearIcon} cursor={"pointer"} flex={"end"} onClick={onClose} />
      </Box>
      <Box className={classes.content}>
        <Box className={classes.boxContent}>
          <Typography variant="body1">Tài khoản : </Typography>
          <TextField size="small" className={classes.textField} variant="outlined" required />
        </Box>
        <Box className={classes.boxContent}>
          <Typography variant="body1">Mật khẩu : </Typography>
          <TextField size="small" className={classes.textField} variant="outlined" required />
        </Box>
        <Box className={classes.boxContent}>
          <Button className={classes.btnContent}>Đăng nhập</Button>
          <Button className={classes.btnContent}>Đăng kí</Button>
        </Box>
      </Box>
    </Dialog>
  );
};
const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 600,
    minHeight: 600,
    background: "var(--primary-color)",
    "& svg": {
      height: 40,
      width: 40,
      color: "#fff",
      margin: theme.spacing(2),
    },
    "& .MuiButton-root:hover": {
      opacity: 0.8,
      background: "var(--primary-color)",
    },
  },
  boxIcon: {
    display: "flex",
    justifyContent: "flex-end",
  },
  content: {
    margin: theme.spacing(2, 4),
    background: "#fff",
    minHeight: 430,
    borderRadius: 8,
  },
  txtLog: {
    flex: 1,
    alignItems: "center",
    display: "flex",
    padding: theme.spacing(2, 4),
    color: "#fff",
  },
  boxContent: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(6, 2, 2, 2),
    justifyContent: "flex-end",
  },
  textField: {
    flex: 1,
    padding: theme.spacing(0, 2),
  },
  btnContent: {
    background: "var(--primary-color)",
    color: "#fff",
    marginRight: 16,
  },
}));
export default LoginDialog;
