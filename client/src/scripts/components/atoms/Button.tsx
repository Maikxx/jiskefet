import * as React from 'react'

type ButtonType = 'button' | 'submit'

interface Props {
    className?: string
    type?: ButtonType
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export class Button extends React.Component<Props> {
    public render() {
        const { children, className, ...restProps } = this.props

        return (
            <button className={this.getClassName()} {...restProps}>
                {children}
            </button>
        )
    }

    private getClassName() {
        const { className } = this.props

        return `Button${className ? ` ${className}` : ''}`
    }
}
