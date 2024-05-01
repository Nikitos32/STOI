import {ButtonProps} from "../../../interfaces";
import classes from './button.module.css'
import classNames from "classnames";

export const Button = ({ buttonContent }: ButtonProps) => {
    return (
        <>
            <button
                className={classNames(classes.button, typeof buttonContent === 'string' ? classes.buttonWithBorder : '')}
            >
                {buttonContent}
            </button>
        </>
    )
}
