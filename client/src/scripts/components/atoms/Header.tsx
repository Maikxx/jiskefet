import * as React from 'react'

interface Props {
    className?: string
}

export class Header extends React.Component<Props> {
    public render() {
        const { children } = this.props

        return (
            <header className={this.getClassName()}>
                {children}
            </header>
        )
    }

    private getClassName() {
        const { className } = this.props

        return `Header${className ? ` ${className}` : ''}`
    }
}
