'use strict'

let containerElem       = document.getElementById('container-elem-style');
let containerElemStyle  = getComputedStyle(containerElem); //в containerElemStyle лежат CSS свойства

let innerHtmlWidth      = document.getElementById('inner-html-width');

console.log(containerElemStyle.width);
console.log(containerElem.offsetWidth);

innerHtmlWidth.innerHTML = containerElem.offsetWidth;