import React from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";

type ButtonBaseProps = MuiButtonProps;

export interface ButtonProps extends ButtonBaseProps {
  label: string;
}

export const Button: React.FC<ButtonProps> = ({ label, ...rest }) => (
  <MuiButton {...rest}>{label}</MuiButton>
);

Button.defaultProps = {
  variant: "contained",
  size: "medium",
  color: "primary",
};
