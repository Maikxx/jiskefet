console.log('working');

// var btn = document.querySelector(".sai");
// var getText = document.querySelector(".getText");
// var content = document.querySelector(".getcontent");
// var editorContent = document.querySelector(".editor");

// btn.addEventListener("click", function () {
//     var s = editorContent.innerHTML;
//     content.style.display = "block";
//     content.textContent = s;
// });

// getText.addEventListener("click", function () {
//     const old = editorContent.textContent;
//     content.style.display = "block";
//     content.textContent = old;
// });

// function printMe() {
//     if (confirm("Check your Content before print")) {
//         const body = document.body;
//         let s = body.innerHTML;
//         body.textContent = editorContent.innerHTML;

//         document.execCommandShowHelp;
//         body.style.whiteSpace = "pre";
//         window.print();
//         location.reload();
//     }
// }



// var input = document.getElementById('test-input');
// setCaretPosition(input, input.value.length);

// function setCaretPosition(input, inputLength) {
//     console.log(input);
//     console.log(inputLength);

//     if (input.setSelectionRange) {
//         input.focus();
//         input.setSelectionRange(inputLength, inputLength);

//     } else if (input.createTextRange) {
//         var range = input.createTextRange();
//         range.collapse(true);
//         range.moveEnd('character', inputLength);
//         range.moveStart('character', inputLength);
//         range.select();

//     }
// }

// setInterval(function inputChange() {
//     var value = document.getElementsByClassName('editor')[0]
//     console.log(value.innerHTML);
// }, 5000);



// function foo() {
//     var selObj = window.getSelection();
//     console.log(selObj);
//     // var selRange = selObj.getRangeAt(0);
//     // do stuff with the range
// }