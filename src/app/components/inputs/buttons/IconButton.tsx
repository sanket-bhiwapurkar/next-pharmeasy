import { Button, ButtonProps } from "./Button";

interface IconButtonProps extends ButtonProps {
  startIcon?: null;
  endIcon?: null;
}

export const IconButton: React.FC<IconButtonProps> = ({
  children,
  ...rest
}) => {
  return (
    <Button
      color="dark"
      variant="text"
      {...rest}
      className={`${rest.className} rounded-full !p-0`}
    >
      {children}
    </Button>
  );
};
