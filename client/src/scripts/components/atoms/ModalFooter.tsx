import * as React from 'react'
import { Row } from './Row'
import { Button } from './Button'

interface Props {
    firstButton: string
    secondButton: string
    onClose: () => void
    onAccept?: () => void
}

export class ModalFooter extends React.Component<Props> {
    public render() {
        const { firstButton, secondButton, onClose, onAccept } = this.props

        return (
            <footer>
                <Row spaceBetween={true}>
                    <Button onClick={onClose}>{firstButton}</Button>
                    <Button onClick={onAccept}>{secondButton}</Button>
                </Row>
            </footer>
        )
    }
}
