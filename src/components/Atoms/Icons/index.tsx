import React from "react";
import { makeStyles } from "@material-ui/styles";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

interface Props {
  
    children?: React.ReactNode;
  
  }
  const useStyles=makeStyles({
    icon:{
        position: "absolute",
        left: "8.33%",
        right: "8.33%",
        top: "8.33%",
        bottom: "8.33%",
        color:"#4B4B60"
        // background: "#4B4B60"
    }

  })
  export const Icons: React.FC<Props> = ({ 
      children,
   
    }) => { 
    const styles=useStyles();
    return (
      <NotificationsNoneOutlinedIcon children={children} className={styles.icon} ></NotificationsNoneOutlinedIcon>
      
    );
  }
  