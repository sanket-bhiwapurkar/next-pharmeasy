import { ChangeEvent, FocusEventHandler } from "react";

export interface InputBaseProps {
  className?: string;
  type?: "text" | "password" | "email" | "number" | string;
  id: string;
  name: string;
  placeholder?: string;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  setFilled?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
  required?: boolean;
}

export const InputBase: React.FC<InputBaseProps> = ({
  className = "",
  type = "text",
  id,
  name,
  onFocus,
  onBlur,
  setFilled,
  required,
  placeholder,
  ...props
}) => {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (setFilled) {
      setFilled(e.target.value !== "");
    }
  };
  return (
    <input
      type={type}
      id={id}
      name={name}
      className={`outline-none ${className}`}
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={(e) => handleOnChange(e)}
      required={required}
      placeholder={placeholder}
      {...props}
    />
  );
};
