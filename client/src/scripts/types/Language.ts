export interface Language {
    App: {
        Generic: {
            chooseALanguage: string
            createNewLog: string
            darkMode: string
            addNewLog: string
            addTags: string
            addExistingTags: string
            createNewTag: string
            name: string
            createTag: string
        }
        LogBar: {
            addTitleForLog: string
        }
        Wysiwyg: {
            editorText: string
            convertToMarkdown: string
        }
        Attachment: {
            addYourFiles: string
            addAttachment: string
        }
    }
}

export interface LanguageOption {
    name: string
    code: string
}
