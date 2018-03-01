var pHello = document.getElementById('hello');

pHello.innerText += " Brave New";
pHello.innerText += " World!";
pHello.innerHTML += " Span <span>example</span>";


pHello.outerHTML = '<h2 id="hello">New World Order <span>Hello World!</span></h2>';

var spanH1 = document.querySelectorAll( 'h1 span' );
spanH1[0].innerHTML = "new text here!!!";