console.log('working');

const form = document.getElementById('form')
const output = document.getElementById('markdownOutput')
form.addEventListener('submit', function (e) {
    e.preventDefault()
    const searchValue = document.getElementsByClassName('editor')[0];
    var newValue = String(searchValue.innerHTML)
    newValue = convBold(newValue)
    newValue = convItalic(newValue)
    newValue = convStrikethrough(newValue)
    newValue = convHeading(newValue)
    output.innerHTML = (newValue);
})

function convBold(input) {
    rx = /(<[/]*b>)/g
    let get = input.replace(rx, (...x) => {
        return `**`;
    });
    return get;
}

function convItalic(input) {
    rx = /(<[/]*i>)/g
    let get = input.replace(rx, (...x) => {
        return `*`;
    });
    return get;
}

function convStrikethrough(input) {
    rx = /(<[/]*strike>)/g
    let get = input.replace(rx, (...x) => {
        return `~~`;
    });
    return get;
}

function convHeading(input) {
    rx1 = /(<h)([1-6])(>)/g
    rx2 = /(<\/h[1-6]>)/g
    let get = input.replace(rx1, (...x) => {
        var count = Number(x[2])
        var hash = "";
        for (var i = 0; i < count; i++) {
            hash = hash + '#';
            console.log(hash);
        }
        return `${hash}`;
    });
    let rem = get.replace(rx2, (...x) => {
        return ``;
    });
    return rem;
}