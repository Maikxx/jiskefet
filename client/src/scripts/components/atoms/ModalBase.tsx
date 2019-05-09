import * as React from 'react'
import Modal from 'react-modal'
import { ModalHeader } from './ModalHeader'
import { ModalFooter } from './ModalFooter'
import { ModalBody } from './ModalBody'

interface Props {
    renderButton: (openModal: () => void) => JSX.Element
    title: string
    firstButton: string
    secondButton: string
}

interface State {
    modalIsOpen: boolean
}

Modal.setAppElement('#react-root')

export class ModalBase extends React.Component<Props, State> {

    public state: State = {
        modalIsOpen: false,
    }

    public render() {
        const { children, renderButton, title, firstButton, secondButton } = this.props
        return (
            <React.Fragment>
                {renderButton(this.openModal)}
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    className={`BaseModal`}
                >
                    <ModalHeader
                        title={title}
                        onClose={this.closeModal}
                    />
                    <ModalBody
                        children={children}
                    />
                    <ModalFooter
                        firstButton={firstButton}
                        secondButton={secondButton}
                        onClose={this.closeModal}
                    />
                </Modal>
            </React.Fragment>
        )
    }

    private openModal = () => {
        this.setState({ modalIsOpen: true })
    }

    private closeModal = () => {
        this.setState({ modalIsOpen: false })
    }
}
