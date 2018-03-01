console.log(document.getElementsByTagName('p')); //HTMLCollection(3) [p, p, p]

console.log(document.getElementById('hello')); //<p id="hello">Hello world!</p>

//dir( document.getElementById('hello') );
// p#hello returns an object

console.log(document.getElementsByClassName('pClass')); //HTMLCollection(2) [p#123.pClass, h1.pClass, 123: undefined]

console.log(document.querySelectorAll( '#hello' )); //NodeList [p#hello]

console.log(document.querySelectorAll( '.pClass' )); //NodeList(2) [p#123.pClass, h1.pClass]

console.log(document.querySelectorAll( '#hello, .pClass' )); //NodeList(3) [p#hello, p#123.pClass, h1.pClass]

console.log(document.querySelectorAll( 'p[data-content="ABC"], body > h1.pClass > span' )); //NodeList(2) [p, span]