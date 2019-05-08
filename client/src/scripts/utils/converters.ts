export function convBold(input: string) {
    const rx = /(<[/]*b>)/g
    const get = input.replace(rx, '**')

    return get
}

export function convItalic(input: string) {
    const rx = /(<[/]*i>)/g
    const get = input.replace(rx, '*')

    return get
}

export function convStrikethrough(input: string) {
    const rx = /(<[/]*strike>)/g
    const get = input.replace(rx, '~~')

    return get
}

export function convHeading(input: string) {
    const rx1 = /(<h)([1-6])(>)/g
    const rx2 = /(<\/h[1-6]>)/g

    const get = input.replace(rx1, (...x) => {
        const count = Number(x[2])
        let hash = ''

        for (let i = 0; i < count; i++) {
            hash = `${hash}#`
        }

        return hash
    })

    const rem = get.replace(rx2, '')

    return rem
}

export function convUl(input: string) {
    const rx1 = /(<ul>)(.*)(<\/ul>)/g
    const rx2 = /(<[\/]*ul>)/g
    const rx3 = /(<li>)/g
    const rx4 = /(<\/li>)/g

    const parent = input.replace(rx1, (...x) => {
        const li1 = x[0].replace(rx2, '')
        const li2 = li1.replace(rx3, `⋅⋅*`)
        const li3 = li2.replace(rx4, `<br>`)

        return li3
    })

    return parent
}

export function convOl(input: string) {
    const rx1 = /(<ol>)(.*)(<\/ol>)/g
    const rx2 = /(<[\/]*ol>)/g
    const rx3 = /(<li>)/g
    const rx4 = /(<\/li>)/g
    let liCount = 0

    const parent = input.replace(rx1, (...x) => {
        const li1 = x[0].replace(rx2, '')

        const li2 = li1.replace(rx3, () => {
            liCount += 1
            return `${liCount}.`
        })

        const li3 = li2.replace(rx4, '<br>')

        return li3
    })

    return parent
}

export function convA(input: string) {
    const rx1 = /(<a href=")([^"]*)(">)([\w\d\s\:\/\.\-\?\=\&\;]*)(<\/a>)/g
    const get = input.replace(rx1, (...x) => `[${x[2]}]`)

    return get
}

export function convImg(input: string) {
    const rx1 = /(<img src=")([^"]*)(">)/g
    const get = input.replace(rx1, (...x) => `![${x[2]}]`)

    return get
}

export function convBq(input: string) {
    const rx1 = /(<blockquote>)/g
    const rx2 = /(<\/blockquote>)/g
    const get = input.replace(rx1, '> ')
    const rem = get.replace(rx2, '')

    return rem
}
