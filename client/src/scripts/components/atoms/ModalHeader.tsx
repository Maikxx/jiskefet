import * as React from 'react'
import { Row } from './Row'
import { Button } from './Button'

interface Props {
    title: string
    onClose: () => void
}

export class ModalHeader extends React.Component<Props> {

    public render() {
        const { title, onClose } = this.props

        return (
            <header className={`ModalHeader`}>
                <Row spaceBetween={true}>
                    <h1 className={`Capitalise`}>{title}</h1>
                    <Button onClick={onClose}>X</Button>
                </Row>
            </header>
        )
    }
}
