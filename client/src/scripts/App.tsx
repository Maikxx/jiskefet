import React from 'react'
import { Tag } from './types/Database'
import { Row } from './components/atoms/Row'
import { LogBar } from './components/organisms/LogBar'
import { Wysiwig } from './components/organisms/Wysiwyg'
import { CreateTag } from './components/molecules/CreateTag'
import { Attachment } from './components/organisms/Attachment'
import { Button } from './components/atoms/Button'
import { Language } from './types/Language'
import { LanguageContext } from './components/LanguageProvider'
import { Selector } from './components/atoms/Selector'

import i18n_en from '../i18n/en.i18n.json'
import i18n_es from '../i18n/es.i18n.json'
import i18n_ru from '../i18n/ru.i18n.json'

const languageMap = {
    en: i18n_en,
    es: i18n_es,
    ru: i18n_ru,
}

interface State {
    addedTags: Tag[]
    language: Language
}

export class App extends React.Component<{}, State> {
    public state: State = {
        addedTags: [],
        language: languageMap.en,
    }

    private languageOptions = [
        { name: 'Arabic', code: 'AR', disabled: true },
        { name: 'Chinese Mandarin', code: 'ZH', disabled: true },
        { name: 'English', code: 'EN', disabled: false },
        { name: 'French', code: 'FR', disabled: true },
        { name: 'German', code: 'DE', disabled: true },
        { name: 'Hindi', code: 'HI', disabled: true },
        { name: 'Italian', code: 'IT', disabled: true },
        { name: 'Polish', code: 'PL', disabled: true },
        { name: 'Portuguese', code: 'PT', disabled: true },
        { name: 'Russian', code: 'RU', disabled: false },
        { name: 'Spanish', code: 'ES', disabled: false },
        { name: 'Turkish', code: 'TR', disabled: true },
        { name: 'Ukrainian', code: 'UK', disabled: true },
        { name: 'Urdu', code: 'UR', disabled: true },
    ]

    public render() {
        const { addedTags, language } = this.state

        return (
            <LanguageContext.Provider value={language}>
                <Row spaceBetween={true} wrap={true}>
                    <h1 className={`Capitalize`}>
                        {language.App.Generic.createNewLog}
                    </h1>
                    <Selector
                        title={language.App.Generic.chooseALanguage}
                        options={this.languageOptions}
                        onChange={this.onChangeLanguage}
                    />
                    <label id='switch' className={`Capitalize`}>
                        {language.App.Generic.darkMode}
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 414.34 512'>
                            <path className='class-1' d='M185.17,392.59h70v69.08h-70Z'/>
                            <path className='class-2' d='M224.37,501a39.67,39.67,0,0,0,30.8-38.66V462H189.84A39.66,39.66,0,0,0,224.37,501Z'/>
                            <path className='class-bulb' d='M115.5,214.77a131.69,131.69,0,0,0,45.22,99.86,112,112,0,0,1,38.61,77.95h55.84v-1c0-32.32,13.67-63.33,38.15-84.44a132,132,0,0,0-40.53-223.9q-1.77-.06-3.54-.09C176.13,82.23,115.72,141.64,115.5,214.77Z'/>
                            <path className='class-4' d='M207.17,328.59a20,20,0,0,0-20,20v44h40v-44A20,20,0,0,0,207.17,328.59Z'/>
                            <path className='class-5' d='M308.19,107.38A142,142,0,1,0,113.81,314.16c22.47,19.62,35.36,47.52,35.36,76.54v71.63A49.72,49.72,0,0,0,198.84,512H215.5a49.72,49.72,0,0,0,49.67-49.67V391.61c0-29.84,12.64-57.86,34.68-76.86a142,142,0,0,0,8.34-207.37ZM207,279.15h-6.63a6.58,6.58,0,1,1,6.63-6.52Zm.13,59.44a10,10,0,0,1,10,10v34h-20v-34A10,10,0,0,1,207.17,338.59Zm38,64v14.7h-76v-14.7Zm-76,34.7h76V452h-76ZM215.5,492H198.84a29.73,29.73,0,0,1-28.05-20h72.75A29.71,29.71,0,0,1,215.5,492Zm71.29-192.4a120.8,120.8,0,0,0-41.3,83h-8.32v-34A30,30,0,0,0,227,326.13v-33A32.13,32.13,0,0,0,240.5,267V251.49a38.68,38.68,0,0,0-38.64-38.64h-18a10,10,0,0,0,0,20h18a18.66,18.66,0,0,1,18.64,18.64v3.68a26.58,26.58,0,1,0-20.09,44H207v19.44a30,30,0,0,0-29.87,30v34h-8.28A122.21,122.21,0,0,0,127,299.1,122.1,122.1,0,0,1,208.79,85.18c66.37.86,120.38,55.59,120.38,122A122,122,0,0,1,286.79,299.6Z'/>
                            <path className='class-5' d='M209.19,113.82H209a10,10,0,1,0-.13,20h.27a10,10,0,0,0,0-20Z'/>
                            <path className='class-5' d='M253.18,125.55A10,10,0,1,0,243.45,143a73.49,73.49,0,0,1,37.72,64.14,10,10,0,1,0,20,0A93.51,93.51,0,0,0,253.18,125.55Z'/>
                            <path className='class-3' d='M207.17,47a10,10,0,0,0,10-10V10a10,10,0,0,0-20,0V37A10,10,0,0,0,207.17,47Z'/>
                            <path className='class-3' d='M404.34,197.17h-27a10,10,0,0,0,0,20h27a10,10,0,0,0,0-20Z'/>
                            <path className='class-3' d='M37,197.17H10a10,10,0,0,0,0,20H37a10,10,0,0,0,0-20Z'/>
                            <path className='class-3' d='M334.57,320.43a10,10,0,0,0-14.15,14.14l19.1,19.09a10,10,0,1,0,14.14-14.14Z'/>
                            <path className='class-3' d='M79.77,93.91A10,10,0,1,0,93.91,79.77L74.82,60.68A10,10,0,0,0,60.68,74.82Z'/>
                            <path className='class-3' d='M339.52,60.68,320.43,79.77a10,10,0,1,0,14.14,14.14l19.09-19.09a10,10,0,1,0-14.14-14.14Z'/>
                            <path className='class-3' d='M79.77,320.43,60.68,339.52a10,10,0,1,0,14.14,14.14l19.09-19.09a10,10,0,1,0-14.14-14.14Z'/>
                        </svg>
                        <input id='toggle' type='checkbox' onClick={this.switchLightingMode}/>
                    </label>
                </Row>
                <LogBar addedTags={addedTags}/>
                <Wysiwig />
                <CreateTag addTag={this.onTagAdded}/>
                <Attachment />

                <Button className='CreateLog Capitalize' type='submit'>
                    {language.App.Generic.addNewLog}
                </Button>
            </LanguageContext.Provider>
        )
    }

    private onTagAdded = (tag: Tag) => {
        const { addedTags } = this.state

        if (!addedTags.find(addedTag => addedTag.id === tag.id)) {
            this.setState({ addedTags: [ ...addedTags, tag ] })
        }
    }

    private onChangeLanguage = (value?: string) => {
        if (value) {
            this.setState({ language: languageMap[value] })
        }
    }

    private switchLightingMode = () => {
        document.body.classList.toggle('light')
    }
}
