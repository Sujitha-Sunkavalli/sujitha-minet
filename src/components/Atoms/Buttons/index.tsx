import React from "react";
import { Button, ButtonProps } from "@mui/material";

interface Props extends ButtonProps {}

export const ButtonComponent: React.FC<Props> = ({
  children,
  variant,
  endIcon,
  color,
}) => {
  return (
    <Button variant={variant} children={children} endIcon={endIcon}></Button>
  );
};
ButtonComponent.defaultProps = {
  variant: "outlined",
};
