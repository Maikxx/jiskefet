import * as React from 'react'
import { TagList } from '../atoms/TagList'

interface Props {
    categories: any[]
}

export class CreateTag extends React.Component<Props> {
    public render() {

        const { categories } = this.props

        return (
            <div className={`CreateTags`}>
                <h2>ADD TAGS</h2>

                <h3>ADD EXISTING TAG</h3>
                <TagList category={'Subtype'} tags={[ 'Comments', 'Run' ]} />
                <TagList category={'Runtype'} tags={[ 'Physics', 'Pedestal', 'Led', 'Gain', 'Pulser' ]} />
                <TagList category={'Subtype'} tags={[ 'Comments', 'Run' ]} />

                <h3>CREATE NEW TAG</h3>
                <form action=''>
                    <label htmlFor=''>
                        Choose an category to add your tag
                        <select name='' id=''>
                        {categories && categories.map(category => {
                            return (
                                <option key={category} value=''>{category}</option>
                            )
                        })}
                        </select>
                    </label>
                    <label htmlFor=''>
                        Add new tag
                        <input type='text'/>
                    </label>
                    <button type='submit'>Add tag</button>
                </form>
            </div>
        )
    }
}
