import * as React from 'react'
import { LanguageOption } from '../../types/Language'

interface Props {
    options: LanguageOption[]
    title: string
    onChange?: (value?: string) => void
}

export class Selector extends React.Component<Props> {
    public render() {
        const { options, title } = this.props

        return (
            <label className={'Selector'}>
                {title}
                <select onChange={this.onChangeLanguage} defaultValue={'en'}>
                    {options.map(option => (
                        <option
                            value={option.code.toLowerCase()}
                            key={option.code}
                            disabled={option.disabled}
                        >
                            {option.name}
                        </option>
                    ))}
                </select>
            </label>
        )
    }

    private onChangeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { onChange } = this.props

        if (onChange) {
            onChange(event.target.value)
        }
    }
}
