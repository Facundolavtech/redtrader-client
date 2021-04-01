import { Modal } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { useState } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

export default function AuthModal({ title, children, open, close }) {
  function getModalStyle() {
    const top = 10;
    const left = 0;
    const right = 0;

    return {
      top: `${top}%`,
      left: `${left}%`,
      right: `${right}`,
      "margin-left": "auto",
      "margin-right": "auto",
    };
  }

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      paper: {
        position: "absolute",
        width: 450,
        maxWidth: "90%",
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[10],
        padding: theme.spacing(2, 4, 3),
        outline: "none",
      },
    })
  );

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className="modal__header">
        <h2>{title}</h2>
        <button type="button" onClick={close}>
          &#10006;
        </button>
      </div>
      {children}
    </div>
  );

  return (
    <Modal
      open={open}
      onClose={close}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 300,
      }}
    >
      <Fade in={open}>{body}</Fade>
    </Modal>
  );
}
