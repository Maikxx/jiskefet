import * as React from 'react'
import { convBold, convItalic, convStrikethrough, convHeading } from '../../utils/converters'

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
                        <h1>HTML Text to Markdown editor</h1>
                        <div ref={this.editorRef} contentEditable={true}>
                            <p>Change this text</p>
                        </div>
                    </div>
                    <button type='submit'>Convert to Markdown</button>
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

            onSubmit(newValue)
        }
    }
}
