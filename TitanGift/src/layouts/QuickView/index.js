import { Box, makeStyles, Typography } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import React from "react";
import { useParams } from "react-router-dom";

const QuickViewDialog = ({ open, onClose, products }) => {
  const classes = useStyles();

  const { id, name, imageUrl } = products;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      BackdropProps={{ style: { backgroundColor: "rgba(0,0,0,0.1)" } }}
      PaperProps={{
        style: {
          boxShadow: "none",
        },
      }}
      className={classes.root}
    >
      <Box className={classes.quickViewDialog}>
        <Box
          className={classes.dialogImg}
          component="img"
          src={"https://storage.googleapis.com/cdn.nhanh.vn/store2/75104/ps/20210504/1.jpg"}
        />
        <Box className={classes.boxContent}>
          <Typography variant="h6">a</Typography>
        </Box>
      </Box>
    </Dialog>
  );
};
const useStyles = makeStyles({
  root: {},
  quickViewDialog: {
    display: "flex",
  },
  dialogImg: {
    width: " 100%",
    width: 444,
  },
  boxContent: {
    width: "600px",
  },
});
export default QuickViewDialog;
