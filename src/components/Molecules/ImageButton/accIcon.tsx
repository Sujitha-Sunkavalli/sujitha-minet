import React from "react";
import { makeStyles } from "@material-ui/styles";
const useStyles=makeStyles({
img:{
    position: "absolute",
        width: "32px",
        height: "32px",
        left: "0px",
        right:"2px",
        top: "0px",
        background: "url(image.png)",
        borderRadius: "50px",
}
})
export const Icon=()=>{
    const styles=useStyles();
    return(
        <img src={"https://cdn2.iconfinder.com/data/icons/business-and-finance-related-hand-gestures/256/face_female_blank_user_avatar_mannequin-512.png"} alt="" 
        className={styles.img}/>
    )
}