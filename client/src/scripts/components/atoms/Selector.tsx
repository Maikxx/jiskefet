import * as React from 'react'

interface Props {
    options: any[],
    title: string
}

export class Selector extends React.Component<Props> {
    public render() {
        const { options, title } = this.props

        return (
            <label className={'Selector'}>
                {title}
                <select name='' id=''>
                    {options.map(option => {
                        return (
                        <option value=''>
                            {option}
                        </option>
                        )
                    })
                }
                </select>
            </label>
        )
    }
}
