import React from "react";
import { Grid, ListItemButton, ListItemText, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { List } from "@material-ui/core";
import { ButtonComponent } from "../../Atoms/Buttons";
import { ImageButton } from "../../Molecules/ImageButton";

const useStyles = makeStyles({
  grid: {
    display: "flex",
    flexDirection: "row",
    alignItems: "start",
    padding: "20px 24px",
    position: "absolute",
    width: "1286px",
    height: "82px",
    left: "80px",
  },
  list: {
    display: "flex",
    flexDirection: "row",
    fontFamily: "Graphik",
    alignItems: "right",
    padding: "0px 16px",
    //  justifyContent:"space-between",
  },
});
export const Header = () => {
  const styles = useStyles();
  return (
    <Grid container spacing={3} className={styles.grid}>
      <Grid item xs={7} style={{ flexDirection: "column" }}>
        <List className={styles.list}>
          <ListItemText>
            <Typography
              variant="h6"
              color="black"
              position="absolute"
              marginTop="5px"
            >
              Trade
            </Typography>
          </ListItemText>
          <ListItemButton style={{ paddingLeft: "600px", paddingRight: "0px" }}>
            <ButtonComponent
              variant="contained"
              children="SELL"
              color="primary"
            />
          </ListItemButton>
          <ListItemButton style={{ paddingLeft: "10px", paddingRight: "0px" }}>
            <ButtonComponent
              variant="contained"
              children="BUY"
              color="secondary"
            />
          </ListItemButton>
          <ListItemButton style={{ paddingLeft: "20px", paddingRight: "0px" }}>
            <ImageButton variant="contained" color="inherit" />
          </ListItemButton>
        </List>
      </Grid>
    </Grid>
  );
};
