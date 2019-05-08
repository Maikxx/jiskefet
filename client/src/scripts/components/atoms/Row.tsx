import * as React from 'react'

interface Props {
    spaceBetween?: boolean
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
        const { spaceBetween } = this.props

        return `Row${spaceBetween ? ' Row--space-between' : ''}`
    }
}
