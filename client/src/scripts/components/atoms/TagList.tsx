import * as React from 'react'

interface Props {
    category: string
    tags: any[]
}

export class TagList extends React.Component<Props> {
    public render() {

        const { category, tags } = this.props

        return (
            <div>
                <h4>{category}</h4>
                <ul>
                    {tags.map((tag, key) => {
                        return (
                            <li key={key}>
                                {tag}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
