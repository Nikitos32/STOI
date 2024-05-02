export interface InputProps {
    type: string,
    placeholder: string
}

export interface ButtonProps {
    buttonContent: string | JSX.Element,
}

export interface CardProps {
    text: string,
    picture: string,
    mainPrice: number,
    secondaryPrice: number,
}
