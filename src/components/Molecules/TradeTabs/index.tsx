import { Card } from "@material-ui/core";
import React from "react"
import trades from "./data"
import { makeStyles } from "@material-ui/core";
import {TableRow,TableHead,TableCell} from "@material-ui/core"
import { Typography } from "@mui/material";
import { StarBorderOutlined } from "@mui/icons-material";
const useStyles = makeStyles({
    cell: {
      position: "absolute",
      width: "266px",
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
      position: "static",
      width: "55px",
      height: "22px",
      left: "10px",
      top: "0px",
      display:"flex",
      letterSpacing: "0.01em",
      flex: "none",
      order: 0,
        flexGrow: 0,
        margin: "4px 0px",
      lineHeight: "22px",
    },
    row: {
      position: "absolute",
      width: "300px",
      height: "42px",
      left: "24px",
      top: "8px",
  
      // background: "#C4C4C4",
    },
    card:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "8px 24px",
        position: "absolute",
        width: "1239px",
        height: "58px",
        left: "20px",
        top: "20px",

    },
    img:{
            position: "absolute",
            width: "62px",
            height: "42px",
            left: "0px",
            right:"0px",
            top: "0px",
            background: "url(image.png)",
            borderRadius: "100px",
            clipPath:"circle"
    }
  });
type TradeType = {
    price: string;
    name: string;
    url: string;
    change: string;
    market: string;
    id: number;
  };

const TradeTab =(props:TradeType)=>{
    const styles=useStyles();
    return(
        <Card className={styles.card}>
            <TableHead>
      <TableRow className={styles.row}>
        <TableCell className={styles.cell}>
          <img src={props.url} alt="" className={styles.img}></img>
          <Typography className={styles.text} variant="subtitle1">
            {props.name}
          </Typography>
        </TableCell>
        <TableCell className={styles.cell2}>
          <Typography className={styles.text} variant="subtitle1">
            {props.price}
          </Typography>
        </TableCell>
        <TableCell className={styles.cell3}>
          <Typography className={styles.text} variant="subtitle1" color="green">
            {props.change}
          </Typography>
        </TableCell>
        <TableCell className={styles.cell4}>
          <Typography className={styles.text} variant="subtitle1">
            {props.market}
          </Typography>
        </TableCell>
        <TableCell className={styles.cell5}>
          <StarBorderOutlined className={styles.text} />
        </TableCell>
        </TableRow>
        </TableHead>
        </Card>


    )

}
export default TradeTab;