import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "../sections/jobs.css";

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

export default function BasicModalReact() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div id="nodal">
      <Button onClick={handleOpen}><b>More info</b></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography class="subtitle" variant="h2" component="h2">
            React Project
          </Typography>
          <Typography class="text" id="modal-modal-description" sx={{ mt: 2 }}>
            A new design is made regarding the project in HTMl and more
            responsive features are added, the use of a shopping cart and its
            features are recreated
            <p>
              <a class="link" href="https://github.com/Andrewsando/skinfreshR">
                <b>You can see the project here</b>
              </a>
            </p>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
