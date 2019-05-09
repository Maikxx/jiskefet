import * as React from 'react'

interface Props { }

export class ModalBody extends React.Component<Props> {

    public render() {
        const { children } = this.props

        return (
            <section className={`ModalBody`}>
                {children}
            </section>
        )
    }
}
