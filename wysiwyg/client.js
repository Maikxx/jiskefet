console.log('working');

const form = document.getElementById('form')
const output = document.getElementById('markdownOutput')
var createLink = document.getElementById('createLink');
createLink.onclick = linkChange;
var createImage = document.getElementById('createImage');
createImage.onclick = imageChange;


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
    newValue = convA(newValue)
    newValue = convImg(newValue)
    newValue = convBq(newValue)
    output.innerHTML = newValue;
})

function convBold(input) {
    var rx = /(<[/]*b>)/g
    let get = input.replace(rx, (...x) => {
        return `**`;
    });
    return get;
}

function convItalic(input) {
    var rx = /(<[/]*i>)/g
    let get = input.replace(rx, (...x) => {
        return `*`;
    });
    return get;
}

function convStrikethrough(input) {
    var rx = /(<[/]*strike>)/g
    let get = input.replace(rx, (...x) => {
        return `~~`;
    });
    return get;
}

function convHeading(input) {
    var rx1 = /(<h)([1-6])(>)/g
    var rx2 = /(<\/h[1-6]>)/g
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
    var rx1 = /(<ul>)(.*)(<\/ul>)/g
    var rx2 = /(<[\/]*ul>)/g
    var rx3 = /(<li>)/g
    var rx4 = /(<\/li>)/g

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
    var rx1 = /(<ol>)(.*)(<\/ol>)/g
    var rx2 = /(<[\/]*ol>)/g
    var rx3 = /(<li>)/g
    var rx4 = /(<\/li>)/g
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

function convA(input) {
    var rx1 = /(<a href=")(.*)(">)(.*)(<\/a>)/g
    let get = input.replace(rx1, (...x) => {
        return `[${x[2]}]`;
    });
    return get;
}

function convImg(input) {
    var rx1 = /(<img src=")(.*)(" alt="">)/g
    let get = input.replace(rx1, (...x) => {
        return `![${x[2]}]`;
    });
    return get;
}

function convBq(input) {
    var rx1 = /(<blockquote>)/g
    var rx2 = /(<\/blockquote>)/g
    let get = input.replace(rx1, (...x) => {
        return `> `;
    });
    let rem = get.replace(rx2, (...x) => {
        return ``;
    });
    return rem;
}

function linkChange() {
    var text = "";
    if (window.getSelection) {
        text = String(window.getSelection());
        const inputValue = document.getElementsByClassName('editor')[0];
        var newValue = String(inputValue.innerHTML)

        let get = newValue.replace(text, (...x) => {
            return `<a href="${x[0]}">${x[0]}</a>`
        });

        inputValue.innerHTML = get
    }
}


function imageChange() {
    var text = "";
    if (window.getSelection) {
        text = String(window.getSelection());
        const inputValue = document.getElementsByClassName('editor')[0];
        var newValue = String(inputValue.innerHTML)
        let get = text.replace(text, (...x) => {
            console.log(x[0]);
            return `<img src="${x[0]}" alt="">`
        });
        inputValue.innerHTML = get
    }
}