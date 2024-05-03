import React from "react";

export interface InputProps {
    type: string,
    placeholder: string,
    handle?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    value?: string
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

export interface User {
    username: string,
    password: string,
    email,
    role: number
}

export interface Order {
    id: number,
    descr: string,
    price: string
}
