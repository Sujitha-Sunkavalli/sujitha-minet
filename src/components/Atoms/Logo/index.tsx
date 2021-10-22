import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { IconButtonProps } from "material-ui";
interface LogoProps extends IconButtonProps{

}

const useStyles = makeStyles({
    root: {
        width: "3.93px",
        height:"6.93px",
        position: "absolute",
        left: "9px",
        right: "9px",
        top: "9px",
        bottom: "15px",
        clipPath:"circle",
        background: "#0052FF",
        borderRadius:"50%",
        padding: "10px 10px 10px 10px",
    },
});
const LogoComponent:React.FC<LogoProps> = (props:any) =>{
    const classes = useStyles();
    return (
        <Button className={classes.root} >
        <svg width="16" height="16" viewBox="0 0 19 16" fill="none" clipPath="circle" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.554 0.27832V15.7217H13.209V8.3938L9.52012 12.1978L9.51941 12.197L9.51515 12.2014L9.13992 11.8162L5.82126 8.3938V15.7217H0.476326V0.27832H5.51113L9.51515 4.40747L13.5192 0.27832H18.554Z" fill="white"/>
        </svg>
        </Button>
    );
    }
    export default LogoComponent;