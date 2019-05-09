import * as React from 'react'
import { Tag } from '../../types/Database'
import { Button } from '../atoms/Button'
import { Row } from './Row'
import { updateTagName, removeTag } from '../../utils/fetchers'
import { ModalBase } from '../organisms/ModalBase'
import { LanguageContext } from '../LanguageProvider'
import { Language } from '../../types/Language'

interface Props {
    addTag?: (tag: Tag) => void
    tag: Tag
    isEditable?: boolean
    isRemovable?: boolean
    onRemove?: (tag: Tag) => void
}

interface State {
    isBeingEdited: boolean
}

export class TagItem extends React.Component<Props, State> {
    public state: State = {
        isBeingEdited: false,
    }

    private updateTagNameInputRef = React.createRef<HTMLInputElement>()

    public render() {
        const { tag, isEditable, isRemovable, onRemove } = this.props
        const { isBeingEdited } = this.state

        return (
            <LanguageContext.Consumer>
                {(language: Language) => (
                    <li className={`TagItem`}>
                        <Button
                            type={`button`}
                            onClick={() => this.onAddTag(tag)}
                            className='tagName'
                        >
                            {!isBeingEdited && tag.name}
                            {isRemovable && onRemove && (
                                <svg onClick={() => onRemove(tag)} xmlns='http://www.w3.org/2000/svg' className='remove' viewBox='0 0 512 512'>
                                    <path className='remove-1' d='M256 0a256 256 0 1 0 0 512 256 256 0 0 0 0-512zm0 480a224 224 0 1 1 0-448 224 224 0 0 1 0 448z'/>
                                    <path className='remove-1' d='M380 132a16 16 0 0 0-22 0L256 233 154 132a16 16 0 0 0-23 22h1l101 102-101 102a16 16 0 0 0 22 23v-1l102-101 102 101a16 16 0 0 0 22-22L279 256l101-102a16 16 0 0 0 0-22z'/>
                                </svg>
                            )}
                            {isEditable && !isBeingEdited && (
                                <svg xmlns='http://www.w3.org/2000/svg' className='edit' viewBox='0 0 411.7 412' onClick={this.editTag}>
                                    <path className='edit-1' d='M.45 399.05a10 10 0 0 0 12.49 12.5l60-18.59A110.15 110.15 0 0 0 118 365.71L220.84 262.9 235 248.78l21.84-21.84 119.53-119.56a30 30 0 0 1-.67 41.68L295.78 229a10 10 0 1 0 14.12 14.12l79.93-79.93a49.94 49.94 0 0 0-.2-70.81l-7.76-7.67L403 63.62a30 30 0 0 0 .15-42.23L390.8 8.92a30 30 0 0 0-42.66 0l-21 21.23-1.48-1.48a10 10 0 0 0-14.13 0L46.28 294A110.26 110.26 0 0 0 19 339.11zM388.83 49.49l-21.16 21.16-26.37-26.38L362.36 23a10 10 0 0 1 14.22 0l12.3 12.46a10 10 0 0 1-.05 14.03zM256.15 199.35l-43.5-43.5 106-106 43.5 43.5zm-35.31 35.31l-43.5-43.5L198.52 170l43.5 43.5zM103.9 351.59c-1 1-2.11 2.05-3.19 3l-43.34-43.3q1.49-1.64 3-3.2l102.84-102.81 43.51 43.5zm-78.76 35.27l13-41.84a89.42 89.42 0 0 1 7.45-17.3l38.71 38.72a89.12 89.12 0 0 1-17.3 7.44z' fill='#1c2c38'/>
                                </svg>
                            )}
                            {isEditable && isBeingEdited && (
                                <div className='background'>
                                    <Row spaceBetween={true} >
                                        <input type='text' className='isBeingEdited' defaultValue={tag.name} ref={this.updateTagNameInputRef}/>
                                        <Row>
                                            <svg className='accept' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 305 305' onClick={() => this.onAcceptNameChange(tag)}>
                                                <path className='accept-1' d='M152.5 0C68.41 0 0 68.41 0 152.5S68.41 305 152.5 305 305 236.59 305 152.5 236.59 0 152.5 0zm0 280A127.5 127.5 0 1 1 280 152.5 127.65 127.65 0 0 1 152.5 280z'/>
                                                <path className='accept-1' d='M218.47 94l-90.54 90.55-41.4-41.4a12.5 12.5 0 0 0-17.68 17.65l50.24 50.2a12.51 12.51 0 0 0 17.68 0l99.38-99.38A12.5 12.5 0 0 0 218.47 94z'/>
                                            </svg>
                                            <ModalBase
                                                title={language.App.Generic.removeTag}
                                                firstButton={language.App.Generic.cancel}
                                                secondButton={language.App.Generic.remove}
                                                onAccept={() => this.onRemoveTag(tag)}
                                                renderButton={openModal => (
                                                    <svg className='trash' onClick={openModal} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 432.6 486.4'>
                                                        <path className='trash-1' d='M419.1 70H317.9V53.5A53.6 53.6 0 0 0 264.4 0h-96.2a53.6 53.6 0 0 0-53.5 53.5V70H13.5a13.5 13.5 0 0 0 0 27h24.4v317.2a72.3 72.3 0 0 0 72.2 72.2h212.4a72.3 72.3 0 0 0 72.2-72.2V97h24.4a13.5 13.5 0 0 0 0-27zM141.7 53.5A26.6 26.6 0 0 1 168.2 27h96.2a26.6 26.6 0 0 1 26.5 26.5V70H141.7zm226 360.7a45.3 45.3 0 0 1-45.2 45.2H110.1a45.3 45.3 0 0 1-45.2-45.2V97h302.9v317.2z'/>
                                                        <path className='trash-1' d='M216.3 411a13.4 13.4 0 0 0 13.5-13.5V158.9a13.5 13.5 0 0 0-27 0v238.5a13.5 13.5 0 0 0 13.5 13.6zM128.2 396.1a13.4 13.4 0 0 0 13.5-13.5V173.7a13.5 13.5 0 0 0-27 0v208.9a13.5 13.5 0 0 0 13.5 13.5zM304.4 396.1a13.4 13.4 0 0 0 13.5-13.5V173.7a13.5 13.5 0 0 0-27 0v208.9a13.4 13.4 0 0 0 13.5 13.5z'/>
                                                    </svg>
                                                )}
                                            >
                                                <h2>{tag.name}</h2>
                                                <p>
                                                    {language.App.Generic.removeConfirmMessage}
                                                </p>
                                            </ModalBase>
                                        </Row>
                                    </Row>
                                </div>
                            )}
                        </Button>
                    </li>
                )}
            </LanguageContext.Consumer>
        )
    }

    private onAddTag = (tag: Tag) => {
        const { addTag } = this.props

        if (addTag) {
            addTag(tag)
        }
    }

    private editTag = () => {
        this.setState({ isBeingEdited: !this.state.isBeingEdited })
    }

    private onAcceptNameChange = async (tag: Tag) => {
        const updateTagNameInput = this.updateTagNameInputRef.current

        if (updateTagNameInput && updateTagNameInput.value && updateTagNameInput.value.length > 0) {
            if (tag.name.toLowerCase() !== updateTagNameInput.value.toLowerCase()) {
                const updatedTagName = updateTagNameInput.value
                await updateTagName(tag.id, updatedTagName)
                this.setState({ isBeingEdited: false })
            } else {
                this.setState({ isBeingEdited: false })
            }
        } else {
            this.setState({ isBeingEdited: false })
        }
    }

    private onRemoveTag = async (tag: Tag) => {
        await removeTag(tag.id)
        this.setState({ isBeingEdited: false })
    }
}
