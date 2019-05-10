import * as React from 'react'
import {
    convertBold,
    convertItalic,
    convertStrikethrough,
    convertHeading,
    convertUl,
    convertOl,
    convertLink,
    convertImg,
    convertBlockQuote
} from '../../utils/converters'
import { Button } from '../atoms/Button'
import { LanguageContext } from '../LanguageProvider'
import { Language } from '../../types/Language'

interface Props {
    className?: string
    onSubmit: (newValue: string) => void
}

export class WysiwygForm extends React.Component<Props> {
    private editorRef = React.createRef<HTMLDivElement>()

    public render() {
        const { className } = this.props

        return (
            <LanguageContext.Consumer>
                {(language: Language) => (
                    <form className={`WysiwygForm ${className ? className : ''}`} onSubmit={this.onSubmit}>
                        <fieldset>
                            <div
                                ref={this.editorRef}
                                contentEditable={true}
                                id={`editor`}
                                suppressContentEditableWarning={true}
                                // onKeyDown={this.onKeyDown}
                            >
                                <p>
                                    {language.App.Wysiwyg.editorText}
                                </p>
                            </div>
                            <Button type='submit'>
                                {language.App.Wysiwyg.convertToMarkdown}
                            </Button>
                        </fieldset>
                    </form>
                )}
            </LanguageContext.Consumer>
        )
    }

    private onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const { onSubmit } = this.props

        if (this.editorRef.current) {
            const editorContainer = this.editorRef.current as HTMLDivElement
            let newValue = String(editorContainer.innerHTML)
            newValue = convertBold(newValue)
            newValue = convertItalic(newValue)
            newValue = convertStrikethrough(newValue)
            newValue = convertHeading(newValue)
            newValue = convertUl(newValue)
            newValue = convertOl(newValue)
            newValue = convertLink(newValue)
            newValue = convertImg(newValue)
            newValue = convertBlockQuote(newValue)

            onSubmit(newValue)
        }
    }

    // private onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    //     const target: any = event.target

    //     if (target && target.id === 'editor') {
    //         const currentInputValue = String(target.innerText + event.key)
    //         const secondLastChar = currentInputValue.slice(-2, -1)
    //         const thirdLastChar = currentInputValue.slice(-3, -2)
    //         const lastSixChars = currentInputValue.slice(-6)

    //         if (String(event.key)) {
    //             this.name(event.key, secondLastChar, lastSixChars, event, thirdLastChar)
    //         }
    //     }
    // }

    // private name = (newChar: string, lastChar: string, lastSixChars: string, e: React.KeyboardEvent<HTMLDivElement>, secondLast: string) => {
    //     setTimeout(() => {
    //         const textField = this.editorRef.current

    //         if (textField) {
    //             const checkTag = String(textField.innerHTML).slice(-12)
    //             let closingTagFix = (String(textField.innerHTML).slice(-(checkTag.length + 3)))
    //             closingTagFix = closingTagFix.slice(0, 1)

    //             // Werkt -- checkt begin van italic markdown
    //             if (((lastChar === '*' || lastChar === '_') && (newChar !== lastChar)) && (lastChar !== secondLast) && (checkTag.includes('</') === false)) {
    //                 console.log('italic')
    //                 textField.innerHTML = `${textField.innerHTML.slice(0, -1)}<em>${newChar}</em>`
    //                 this.placeCaretAtEnd(textField)

    //             }
    //             // Werkt -- checkt begin van bold markdown
    //             if ((lastChar === '*' || lastChar === '_') && (lastChar === secondLast) && (checkTag.includes('</') === false)) {
    //                 console.log('bold')
    //                 textField.innerHTML = `${textField.innerHTML.slice(0, -1)}<b>${newChar}</b>`
    //                 this.placeCaretAtEnd(textField)
    //             }

    //             // Werkt -- checkt begin van strikeThrough markdown
    //             if ((lastChar === '~') && (lastChar === secondLast) && (checkTag.includes('</') === false)) {
    //                 console.log('strikethrough')
    //                 textField.innerHTML = `${textField.innerHTML.slice(0, -1)}<strike>${newChar}</strike>`
    //                 this.placeCaretAtEnd(textField)
    //             }

    //             // Nog niet af
    //             if ((newChar === '+' || newChar === '-') && (lastChar === '/')) {
    //                 console.log('bullitpoint')
    //             }
    //             // Nog niet af
    //             if ((newChar === '[') && (lastChar !== '!')) {
    //                 console.log('link')
    //             }
    //             // Nog niet af
    //             if ((newChar === '[') && (lastChar === '!')) {
    //                 console.log('image')
    //             }
    //             // Nog niet af
    //             if (((lastChar !== '#') && (newChar === '#')) || ((`${lastChar}#`) && (newChar === '#')) && (checkTag.includes('</') === false)) {
    //                 const countHeadingLvl = String(lastSixChars.replace(/[^#]/g, '').length)
    //                 const typedHeading = `h${countHeadingLvl}`
    //                 console.log(typedHeading)
    //             }

    //             // Werkt -- checkt of Italic markdown wordt afgesloten
    //             if (((checkTag === '</em>') && (lastChar !== '*') && (newChar === '*') && (e.keyCode !== 32))) {
    //                 console.log('closingTag')
    //                 const FirstInnerHtmlValue = String(textField.innerHTML).slice(0, -(checkTag.length + 1))
    //                 console.log(`first = ${FirstInnerHtmlValue}`)
    //                 const LastInnerHtmlValue = String(textField.innerHTML).slice(-(checkTag.length))
    //                 console.log(`last = ${LastInnerHtmlValue}`)
    //                 textField.innerHTML = `${FirstInnerHtmlValue}${LastInnerHtmlValue}${newChar}`
    //                 this.placeCaretAtEnd(textField)
    //             }
    //             // Werkt -- checkt of Bold markdown wordt afgesloten
    //             if (((checkTag === '</b>') && (newChar === '*' || newChar === '_') && (e.keyCode !== 32))) {
    //                 console.log('closing bold')
    //                 console.log(lastChar)
    //                 const FirstInnerHtmlValue = String(textField.innerHTML).slice(0, -(checkTag.length + 1))
    //                 const LastInnerHtmlValue = String(textField.innerHTML).slice(-(checkTag.length))
    //                 textField.innerHTML = FirstInnerHtmlValue + LastInnerHtmlValue + newChar
    //                 this.placeCaretAtEnd(textField)
    //             }
    //             // Werkt -- checkt of StrikeThrough markdown wordt afgesloten
    //             if (((checkTag === '</strike>') && (newChar === '~') && (e.keyCode !== 32))) {
    //                 console.log('closing bold')
    //                 console.log(lastChar)
    //                 const FirstInnerHtmlValue = String(textField.innerHTML).slice(0, -(checkTag.length + 1))
    //                 const LastInnerHtmlValue = String(textField.innerHTML).slice(-(checkTag.length))
    //                 textField.innerHTML = FirstInnerHtmlValue + LastInnerHtmlValue + newChar
    //                 this.placeCaretAtEnd(textField)
    //             }

    //             // nog niet af
    //             if (newChar === 'Backspace') {
    //                 console.log('backspace')
    //             }
    //         }
    //     }, 0)
    // }

    // // Werkt --- Zet de caret op de juiste plek
    // private placeCaretAtEnd = (el: HTMLElement) => {
    //     el.focus()
    //     if (typeof window.getSelection !== 'undefined' &&
    //         typeof document.createRange !== 'undefined') {
    //         const range = document.createRange()
    //         range.selectNodeContents(el)
    //         range.collapse(false)
    //         const selection = window.getSelection()

    //         if (selection) {
    //             selection.removeAllRanges()
    //             selection.addRange(range)
    //         }
    //     } else if (typeof (document.body as any).createTextRange !== 'undefined') {
    //         const textRange = (document.body as any).createTextRange()
    //         textRange.moveToElementText(el)
    //         textRange.collapse(false)
    //         textRange.select()
    //     }
    // }
}
