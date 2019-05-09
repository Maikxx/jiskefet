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
            <footer className={`ModalFooter`}>
                <Row spaceBetween={true}>
                    <Button className='firstButton' onClick={onClose}>{firstButton}</Button>
                    <Button className='secondButton' onClick={onAccept}>{secondButton}</Button>
                </Row>
            </footer>
        )
    }
}
