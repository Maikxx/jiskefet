## headings

document.execCommand('formatBlock',false,'h2')

## emphasis
document.execCommand("italic", false, null)
document.execCommand("bold", false, null)
document.execCommand("strikeThrough", false, null)

## Lists
document.execCommand("insertorderedlist");
document.execCommand("insertunorderedlist");

## Links
document.execCommand('createLink', true, url);

## Images
document.execCommand("InsertImage", false, "http://example.png");

## Code and Syntax
document.execCommand("formatBlock", false, null)

## Table
document.execCommand('enableInlineTableEditing', false, 'false');

## hr
document.execCommand('inserthorizontalrule', false, null);

## Inline HTML
document.execCommand('insertHTML', false, linkName)