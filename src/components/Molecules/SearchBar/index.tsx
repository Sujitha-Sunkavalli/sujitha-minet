import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import {TextField,InputAdornment }from "@material-ui/core"
// import {TextField} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
const useStyles=makeStyles({
input:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "4px",
        position: "absolute",
        width: "176px",
        height: "40px",
        left: "20px",
        top: "20px",
},
search:{
    position: "absolute",
    left: "18.75%",
    right: "17.77%",
    top: "18.75%",
    bottom: "17.77%",
},
place:{
    position: "static",
    width: "96px",
    height: "14px",
    left: "8px",
    top: "0px",
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "12px",
    lineHeight: "14px",
    color: "#7D7D89",
}
})
export const SearchBar = () => { 
    const styles=useStyles();
  return (
  
    <TextField className={styles.input} variant="outlined" inputProps={{endAdorment:(
        <InputAdornment position="start">
            {/* <Typography variant="subtitle2" className={styles.place}>Search All Assets</Typography> */}
        <IconButton>
            <SearchIcon/>
        </IconButton>
        </InputAdornment>
    )}}/>
        // <Box className={styles.input}>
        // <Typography variant="subtitle2" className={styles.place}>Search All Assets</Typography>
        // <span><SearchIcon className={styles.search}/></span>
        // </Box>
        // </TextField>
     

  );
}