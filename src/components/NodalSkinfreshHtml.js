import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "../sections/jobs.css"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div id="nodal">
      <Button onClick={handleOpen}>More info</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography class="subtitle" variant="h2" component="h2">
            HTML Project
          </Typography>
          <Typography class="text" id="modal-modal-description" sx={{ mt: 2 }}>
            Main project page using HTML with the intention of being a web page
            for the sale of dermo-cosmetic products, its basic functionality is
            to simulate the sale of the product, which is
            developed on an initial screen where the products appear, clicking
            on the product takes you to the detail (value), in this one you can
            choose the amount you want to purchase and you will be redirected by
            means of a button to the finalize purchase section, on this, the
            user data is already requested to manage the order.

            <p>
              <a class="link" href="https://github.com/Andrewsando/skinfresh">You can see the project here</a>
            </p>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
