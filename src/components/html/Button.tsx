import React from "react"

type ButtonProps = {
    variant: 'primary' | 'secondary'
    children: string  //restrict children type only to string
} & Omit<React.ComponentProps<'button'>, 'children'>//restrict children type only to string for button

export const CustomButton = ({variant, children, ...rest}: ButtonProps) => {
    return <button className={`class-with-${variant}`} {...rest}>
        {children}
    </button>
}