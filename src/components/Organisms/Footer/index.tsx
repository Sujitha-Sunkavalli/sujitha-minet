import React from "react";
import { Grid, Typography } from "@mui/material";
import { IconButtonComponent } from "../../Molecules/IconButton";
import { makeStyles } from "@material-ui/styles";
import {List} from  "@material-ui/core";
import { ExpandMore } from "@mui/icons-material";

const useStyles=makeStyles({
grid:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 24px",
    position: "absolute",
    width: "1286px",
    top:"0px"
   

}
})
export const Footer =()=>{
    const styles=useStyles()
    return(
        <Grid container  spacing={3} className={styles.grid}>
            <Grid item xs={7} style={{flexDirection:"column"}}>
            <List
            style={{
              display: "flex",
              flexDirection: "row",
              fontFamily: "Graphik",
            }}
          >
           
            <Typography component="p" color="primary" padding="20px">Dashboard</Typography>
            
            <Typography component="p" color="primary"  padding="20px">Careers</Typography>
            <Typography component="p" color="primary"  padding="20px">Legal&Privacy</Typography>
            <Typography component="p" color="black"  padding="20px">@2021Minet</Typography>
            <IconButtonComponent children="English" endIcon={<ExpandMore/>} />
            <IconButtonComponent children="Help" style={{padding:"120px"}} />
            </List>
        </Grid>
        </Grid>
    )
}