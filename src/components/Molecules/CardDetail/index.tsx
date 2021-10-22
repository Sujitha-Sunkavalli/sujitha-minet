import { Card } from "@material-ui/core";
import React from "react"
import { makeStyles } from "@material-ui/core";
import {TableRow,TableHead,TableCell} from "@material-ui/core"
import { Typography } from "@mui/material";
import { StarBorderOutlined } from "@mui/icons-material";
import { IconButtonComponent } from "../IconButton";
const useStyles = makeStyles({
    cell: {
      position: "absolute",
      width: "266px",
      height: "56px",
      left: "0px",
      top: "0px",
    },
    cell2: {
      position: "absolute",
      width: "76px",
      height: "16px",
      left: "200px",
      top: "0px",
    },
    cell3: {
      position: "absolute",
      width: "57px",
      height: "16px",
      left: "300px",
      top: "0px",
    },
    cell4: {
      position: "absolute",
      width: "127px",
      height: "16px",
      left: "400px",
      top: "0px",
    },
    cell5: {
      position: "absolute",
      width: "200px",
      height: "42px",
      left: "700px",
      top: "0px",
    },
  
    text: {
      fontFamily: "Graphik",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "18px",
      position: "static",
      width: "55px",
      height: "22px",
      left: "10px",
      top: "0px",
      display:"inline-block",
      letterSpacing: "0.01em",
      flex: "none",
        margin: "4px 0px",
      lineHeight: "34px",
    },
    text2:{
        fontFamily: "Graphik",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "14px",
        lineHeight: "16px",
        color: "#7D7D89",
        margin: "4px 0px",
    },
    row: {
      position: "absolute",
      width: "1239px",
      height: "106px",
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
        top: "0px",

    },
    img:{
            position: "initial",
            width: "62px",
            height: "42px",
            left: "10px",
            right:"5px",
            top: "0px",
            background: "url(image.png)",
            borderRadius: "100px",
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

const CardDetail=(props:TradeType)=>{
    const styles=useStyles();
    return(
        <Card className={styles.card}>
            <TableHead>
      <TableRow className={styles.row}>
        <TableCell className={styles.cell}>
          <img src={props.url} alt="" className={styles.img}></img>
          <Typography className={styles.text} variant="h5">
          {props.name}<br/>
          <Typography component="p" fontSize="8px">BTC</Typography>
          </Typography>
         
           
        </TableCell>
        <TableCell className={styles.cell2}>
          <Typography className={styles.text2} variant="subtitle1">
             MarketCap<br/>
            {props.price}
          </Typography>
        </TableCell>
        <TableCell className={styles.cell3}>
          <Typography className={styles.text2} variant="subtitle1" color="green">
              Vol.24H<br/>
            {props.change}
          </Typography>
        </TableCell>
        <TableCell className={styles.cell4}>
          <Typography className={styles.text2} variant="subtitle1">
              CirculatingSupply<br/>
            {props.market}
          </Typography>
        </TableCell>
        <TableCell className={styles.cell5}>
          <IconButtonComponent children="Add to Watchlist" startIcon={<StarBorderOutlined/>} className={styles.text} />
        </TableCell>
        </TableRow>
        </TableHead>
        </Card>


    )

}
export default CardDetail;