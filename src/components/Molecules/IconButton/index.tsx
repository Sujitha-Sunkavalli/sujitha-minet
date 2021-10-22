import React from "react";
import { Button,ButtonProps } from "@mui/material";

interface Props extends ButtonProps{
  

  
  }

  export const IconButtonComponent: React.FC<Props> = ({ 
      children,
      variant,
      endIcon,color,startIcon
   
    }) => { 
    
    return (
        <Button children={children} variant={variant} endIcon={endIcon} startIcon={startIcon} color={color} ></Button>
        
     
    );
  }
  IconButtonComponent.defaultProps = {
    variant:"outlined"
  }
 