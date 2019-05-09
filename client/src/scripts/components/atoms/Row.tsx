import * as React from 'react'

interface Props {
    spaceBetween?: boolean
    wrap?: boolean
    column?: boolean
}

export class Row extends React.Component<Props> {
    public render() {
        const { children } = this.props

        return (
            <div className={this.getClassName()}>
                {children}
            </div>
        )
    }

    private getClassName() {
        const { spaceBetween, wrap, column } = this.props

        return `Row${spaceBetween ? ' Row--space-between' : ''}${wrap ? ' Row--wrap' : ''}${column ? 'Row--column' : ''}`
    }
}
