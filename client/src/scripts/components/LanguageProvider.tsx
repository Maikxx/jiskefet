import i18n_en from '../../i18n/en.i18n.json'
import React from 'react'

export const LanguageContext = React.createContext(i18n_en)
export const LANGUAGE_OPTIONS = [
    { name: 'Arabic', code: 'AR', disabled: false },
    { name: 'Chinese Mandarin', code: 'ZH', disabled: false },
    { name: 'English', code: 'EN', disabled: false },
    { name: 'French', code: 'FR', disabled: false },
    { name: 'German', code: 'DE', disabled: false },
    { name: 'Hindi', code: 'HI', disabled: false },
    { name: 'Italian', code: 'IT', disabled: false },
    { name: 'Polish', code: 'PL', disabled: false },
    { name: 'Portuguese', code: 'PT', disabled: false },
    { name: 'Russian', code: 'RU', disabled: false },
    { name: 'Spanish', code: 'ES', disabled: false },
    { name: 'Turkish', code: 'TR', disabled: false },
    { name: 'Ukrainian', code: 'UK', disabled: false },
    { name: 'Urdu', code: 'UR', disabled: false },
]
