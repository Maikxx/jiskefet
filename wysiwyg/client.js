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
    newValue = convUl(newValue)
    newValue = convOl(newValue)
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

function convUl(input) {
    rx1 = /(<ul>)(.*)(<\/ul>)/g
    rx2 = /(<[\/]*ul>)/g
    rx3 = /(<li>)/g
    rx4 = /(<\/li>)/g

    let parent = input.replace(rx1, (...x) => {

        let li1 = x[0].replace(rx2, (...r) => {
            return ``;
        });

        let li2 = li1.replace(rx3, (...r2) => {
            return `⋅⋅*`;
        });

        let li3 = li2.replace(rx4, (...x) => {
            return `<br>`;
        });
        return li3
    });

    return parent;
}

function convOl(input) {
    rx1 = /(<ol>)(.*)(<\/ol>)/g
    rx2 = /(<[\/]*ol>)/g
    rx3 = /(<li>)/g
    rx4 = /(<\/li>)/g
    var liCount = 0;

    let parent = input.replace(rx1, (...x) => {

        let li1 = x[0].replace(rx2, (...r) => {
            return ``;
        });

        let li2 = li1.replace(rx3, (...r2) => {
            liCount += 1;
            return `${liCount}.`;
        });

        let li3 = li2.replace(rx4, (...x) => {
            return `<br>`;
        });
        return li3
    });

    return parent;
}



function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}