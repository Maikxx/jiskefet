import * as React from 'react'

interface Props {}

export class Row extends React.Component<Props> {
    public render() {
        const { children } = this.props

        return (
            <div className={`Row`}>
                {children}
            </div>
        )
    }
}
