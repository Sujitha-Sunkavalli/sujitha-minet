import React from "react";
import { Button,ButtonProps } from "@mui/material";
import {makeStyles} from "@mui/styles";
import {Icon} from "./accIcon"
import { ExpandMore } from "@mui/icons-material";


interface Props extends ButtonProps{
  

  
  }
  const useStyles=makeStyles({
    buton:{
    // position: "absolute",
    // width: "34px",
    // height: "32px",
    // // left: "50px",
    // // right:"50px",
    // // top: "20px",
    // color:"#0052FF",
    },
    img:{
        position: "absolute",
            width: "32px",
            height: "32px",
            background: "url(image.png)",
    }

  })
  export const ImageButton: React.FC<Props> = ({ 
      children,
      variant,
      endIcon,color,
      startIcon 
   
    }) => { 
    const styles=useStyles();
    return (
        <Button children={children} variant={variant} endIcon={<ExpandMore/>} color={color} startIcon={<Icon/>} 
       className={styles.buton}></Button>
        
     
    );
  }
  ImageButton.defaultProps = {
    variant:"outlined",
    children:"",
    
   
  }
 