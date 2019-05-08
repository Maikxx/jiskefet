import i18n_en from '../../i18n/en.i18n.json'
import React from 'react'

export const LanguageContext = React.createContext(i18n_en)
export const LANGUAGE_OPTIONS = [
    { name: 'Arabic', code: 'AR', disabled: true },
    { name: 'Chinese Mandarin', code: 'ZH', disabled: false },
    { name: 'English', code: 'EN', disabled: false },
    { name: 'French', code: 'FR', disabled: true },
    { name: 'German', code: 'DE', disabled: false },
    { name: 'Hindi', code: 'HI', disabled: false },
    { name: 'Italian', code: 'IT', disabled: true },
    { name: 'Polish', code: 'PL', disabled: true },
    { name: 'Portuguese', code: 'PT', disabled: true },
    { name: 'Russian', code: 'RU', disabled: false },
    { name: 'Spanish', code: 'ES', disabled: false },
    { name: 'Turkish', code: 'TR', disabled: true },
    { name: 'Ukrainian', code: 'UK', disabled: true },
    { name: 'Urdu', code: 'UR', disabled: true },
]
