import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    menuTitle: {
      width: "90%",
      paddingBottom: "10px",
      fontSize: "1.3em",
      fontWeight: 400,
      textTransform: "uppercase",
      color: theme.palette.secondary.main,
      outline: "none",
      textAlign: "center",
      margin: "10px auto 20px auto",
      borderBottom: `1px solid #e2e2e2`,
    },

    menuItem: {
      maxWidth: "200px",
      textOverflow: "ellipsis",
      overflow: "hidden",
      whiteSpace: "nowrap",
      fontWeight: 400,
      fontSize: "1em",
      display: "flex",
      justifyContent: "center",
      padding: "6px 30px",
      margin: "auto",
      width: "90%",
      marginBottom: "5px",

      "&:first-of-type": {
        fontSize: "1em",
        marginTop: "10px",
        fontWeight: 500,
      },
    },
    menuItemIcon: {
      marginLeft: "5px",
    },
  })
);

export default useStyles;
