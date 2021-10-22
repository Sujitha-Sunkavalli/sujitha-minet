import React from "react";
import { TableHead, TableCell, TableRow, makeStyles } from "@material-ui/core";
import { Typography } from "@mui/material";
const useStyles = makeStyles({
  cell: {
    position: "absolute",
    width: "300px",
    height: "42px",
    left: "24px",
    top: "8px",
  },
  cell2: {
    position: "absolute",
    width: "337px",
    height: "42px",
    left: "324px",
    top: "8px",
  },
  cell3: {
    position: "absolute",
    width: "238px",
    height: "42px",
    left: "661px",
    top: "8px",
  },
  cell4: {
    position: "absolute",
    width: "238px",
    height: "42px",
    left: "899px",
    top: "8px",
  },
  cell5: {
    position: "absolute",
    width: "78px",
    height: "42px",
    left: "1137px",
    top: "8px",
  },

  text: {
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "14px",
    // lineHeight: "16px",
  },
  row: {
    position: "absolute",
    width: "300px",
    height: "42px",
    left: "24px",
    top: "8px",

    // background: "#C4C4C4",
  },
});
export function Header() {
  const styles = useStyles();
  return (
    <TableHead>
      <TableRow className={styles.row}>
        <TableCell className={styles.cell}>
          <Typography className={styles.text} variant="subtitle1">
            Name
          </Typography>
        </TableCell>
        <TableCell className={styles.cell2}>
          <Typography className={styles.text} variant="subtitle1">
            Price
          </Typography>
        </TableCell>
        <TableCell className={styles.cell3}>
          <Typography className={styles.text} variant="subtitle1">
            Change
          </Typography>
        </TableCell>
        <TableCell className={styles.cell4}>
          <Typography className={styles.text} variant="subtitle1">
            Market Cap
          </Typography>
        </TableCell>
        <TableCell className={styles.cell5}>
          <Typography className={styles.text} variant="subtitle1">
            Watch
          </Typography>
        </TableCell>
      </TableRow>
    </TableHead>
  );
}
