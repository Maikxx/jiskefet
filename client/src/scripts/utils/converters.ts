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
