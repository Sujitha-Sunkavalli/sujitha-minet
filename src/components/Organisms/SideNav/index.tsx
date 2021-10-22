import React from "react";
import { makeStyles } from "@material-ui/styles";
import { RiLogoutBoxLine } from "react-icons/ri";
import { RiNotification3Line } from "react-icons/ri";
import { RiPieChartLine } from "react-icons/ri";
import { RiDashboard3Line } from "react-icons/ri";
import { RiStockLine } from "react-icons/ri";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import LogoComponent from "../../Atoms/Logo";

import { Box } from "@mui/system";

const useStyles=makeStyles({
box:{
    display: "flex",
    flexDirection: "column",
    alignItems: "flexStart",
    // padding: "24px",
    position: "absolute",
    width: "80px",
    height: "728px",
    left: "0px",
    top: "0px",
},
item:{
    position: "absolute",
    left: "8.33%",
    right: "8.33%",
    top: "8.33%",
    bottom: "20.33%",
    color:"#4B4B60",
    padding:"30px",
    display:"flex"
},
list: {
    display: "flex",
  justifyContent: "space-between",
  justifyItems:"space-between",
  flexDirection: "column",
  flexWrap:"wrap",
  padding:"30px",
  position:"absolute",
  marginTop:"20px"
   
},
buton:{
       
        width:"40px",height:"40px",top:"2px",bottom:"2px"
        
}


})
const SideNav = () => {
    const exploreClasses = useStyles();
   return( 
       <Box className={exploreClasses.box}>
         <LogoComponent/>
<List  data-testid="explore"  className={exploreClasses.list} >
    {/* <ListItemButton  >
      <LogoComponent/>
    </ListItemButton> */}
    <ListItemButton className={exploreClasses.buton}>
      <RiDashboard3Line  className={exploreClasses.item}/>
    </ListItemButton>
    <ListItemButton  className={exploreClasses.buton}>
      <RiPieChartLine   className={exploreClasses.item}/>
    </ListItemButton>
    <ListItemButton className={exploreClasses.buton} >
      <RiStockLine   className={exploreClasses.item}/>
    </ListItemButton>
    <ListItemButton className={exploreClasses.buton} >
      <RiNotification3Line  className={exploreClasses.item}/>
    </ListItemButton>
    <ListItemButton className={exploreClasses.buton} >
      < RiLogoutBoxLine   className={exploreClasses.item}/>
    </ListItemButton>

</List>
</Box>
   );
}
export default SideNav;