import React from 'react'
import i18n_en from '../../i18n/en.i18n.json'
import i18n_de from '../../i18n/de.i18n.json'
import i18n_es from '../../i18n/es.i18n.json'
import i18n_hi from '../../i18n/hi.i18n.json'
import i18n_ru from '../../i18n/ru.i18n.json'
import i18n_zh from '../../i18n/zh.i18n.json'
import i18n_pl from '../../i18n/pl.i18n.json'
import i18n_pt from '../../i18n/pt.i18n.json'
import i18n_ur from '../../i18n/ur.i18n.json'
import i18n_uk from '../../i18n/uk.i18n.json'
import i18n_it from '../../i18n/it.i18n.json'
import i18n_fr from '../../i18n/fr.i18n.json'
import i18n_ar from '../../i18n/ar.i18n.json'
import i18n_tr from '../../i18n/tr.i18n.json'

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

export const LANGUAGE_MAP = {
    de: i18n_de,
    en: i18n_en,
    es: i18n_es,
    hi: i18n_hi,
    ru: i18n_ru,
    zh: i18n_zh,
    pl: i18n_pl,
    pt: i18n_pt,
    ur: i18n_ur,
    uk: i18n_uk,
    it: i18n_it,
    fr: i18n_fr,
    ar: i18n_ar,
    tr: i18n_tr,
}
