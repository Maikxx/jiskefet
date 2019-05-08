import * as React from 'react'
import { convBold, convItalic, convStrikethrough, convHeading, convUl, convOl, convA, convImg, convBq } from '../../utils/converters'
import { Button } from '../atoms/Button'

interface Props {
    className?: string
    onSubmit: (newValue: string) => void
}

export class WysiwygForm extends React.Component<Props> {
    private editorRef = React.createRef<HTMLDivElement>()

    public render() {
        const { className } = this.props

        return (
            <form className={`WysiwygForm ${className}`} onSubmit={this.onSubmit}>
                <fieldset>
                    <div>
                        <div ref={this.editorRef} contentEditable={true} id={`editor`}>
                            <p>Change this text</p>
                        </div>
                    </div>
                    <Button type='submit'>Convert to Markdown</Button>
                </fieldset>
            </form>
        )
    }

    private onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const { onSubmit } = this.props

        if (this.editorRef.current) {
            const editorContainer = this.editorRef.current as HTMLDivElement
            let newValue = String(editorContainer.innerHTML)
            newValue = convBold(newValue)
            newValue = convItalic(newValue)
            newValue = convStrikethrough(newValue)
            newValue = convHeading(newValue)
            newValue = convUl(newValue)
            newValue = convOl(newValue)
            newValue = convA(newValue)
            newValue = convImg(newValue)
            newValue = convBq(newValue)

            onSubmit(newValue)
        }
    }
}
