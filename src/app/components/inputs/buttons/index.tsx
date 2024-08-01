import { elevations, TypographyScale } from '@/app/constants/styles';
import React from 'react'
import { inherits } from 'util';

interface ButtonBaseProps {
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
}

export const ButtonBase: React.FC<ButtonBaseProps> = ({
    onClick,
    children,
    className,
    disabled = false,
    type = 'button'
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`${className}`}
            disabled={disabled}>
            {children}
        </button>
    )
}

interface ButtonProps extends ButtonBaseProps {
    color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | 'dark' | string
    variant?: 'contained' | 'outlined' | 'text' | string
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    size?: 'small' | 'meduim' | 'large';
    elevation?: 0 | 1 | 2 | 3 | 4 | 5;
}

const colors: { [key: string]: { [key: string]: string } } = {
    primary: {
        inherit: "",
        contained: 'border-0 bg-primary text-white',
        outlined: 'border border-primary bg-transparent text-primary',
        text: "border-0 bg-transparent text-primary"
    },
    secondary: {
        inherit: "",
        contained: 'border-0 bg-secondary text-dark',
        outlined: 'border border-dark bg-secondary text-dark',
        text: "border-0 bg-transparent text-secondary"
    },
    dark: {
        inherit: "",
        contained: 'border-0 bg-dark text-white',
        outlined: 'border border-dark bg-transparent text-dark',
        text: "border-0 bg-transparent text-dark"
    }
}

const sizes: { [key: string]: string } = {
    small: "h-7 py-1 px-2",
    medium: "h-9 py-1 px-4",
    large: "h-11 py-2 px-6",
}

export const Button: React.FC<ButtonProps> = ({
    children,
    color = 'primary',
    variant = 'inherit',
    size = 'medium',
    elevation = 0,
    ...rest
}) => {

    return (
        <ButtonBase
            {...rest}
            className={`flex items-center justify-center gap-2 rounded shadow-gray-600 ${TypographyScale.button} ${colors[color][variant]} ${sizes[size]} ${elevations[elevation]} ${rest.className}`}>
            {rest.startIcon}
            {children}
            {rest.endIcon}
        </ButtonBase>
    )
}

interface IconButtonProps extends ButtonProps {
    startIcon?: null;
    endIcon?: null;
}

export const IconButton: React.FC<IconButtonProps> = ({ children,
    ...rest }) => {
    return <Button {...rest}
        className={`${rest.className} rounded-full aspect-square !p-0`
        }>
        {children}
    </Button >
}

