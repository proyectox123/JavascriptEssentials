var el = document.getElementById('style');

/*
var style = el.style
style.background = "blue";
style.color = "white";
style.width = "200px";
*/

/*
var style = el.style
style.cssText = " background:blue; color: white; width:200px ";
style.cssText += " height:100px; ";
*/

console.log(getComputedStyle( el )); /* CSSStyleDeclaration {0: "animation-delay", 1: "animation-direction", 2: "animation-duration", 3: "animation-fill-mode", 4: "animation-iteration-count", 5: "animation-name", 6: "animation-play-state", 7: "animation-timing-function", 8: "background-attachment", 9: "background-blend-mode", 10: "background-clip", 11: "background-color", 12: "background-image", 13: "background-origin", 14: "background-position", 15: "background-repeat", 16: "background-size", 17: "border-bottom-color", 18: "border-bottom-left-radius", 19: "border-bottom-right-radius", 20: "border-bottom-style", 21: "border-bottom-width", 22: "border-collapse", 23: "border-image-outset", 24: "border-image-repeat", 25: "border-image-slice", 26: "border-image-source", 27: "border-image-width", 28: "border-left-color", 29: "border-left-style", 30: "border-left-width", 31: "border-right-color", 32: "border-right-style", 33: "border-right-width", 34: "border-top-color", 35: "border-top-left-radius", 36: "border-top-right-radius", 37: "border-top-style", 38: "border-top-width", 39: "bottom", 40: "box-shadow", 41: "box-sizing", 42: "break-after", 43: "break-before", 44: "break-inside", 45: "caption-side", 46: "clear", 47: "clip", 48: "color", 49: "content", 50: "cursor", 51: "direction", 52: "display", 53: "empty-cells", 54: "float", 55: "font-family", 56: "font-kerning", 57: "font-size", 58: "font-stretch", 59: "font-style", 60: "font-variant", 61: "font-variant-ligatures", 62: "font-variant-caps", 63: "font-variant-numeric", 64: "font-variant-east-asian", 65: "font-weight", 66: "height", 67: "image-rendering", 68: "isolation", 69: "justify-items", 70: "justify-self", 71: "left", 72: "letter-spacing", 73: "line-height", 74: "list-style-image", 75: "list-style-position", 76: "list-style-type", 77: "margin-bottom", 78: "margin-left", 79: "margin-right", 80: "margin-top", 81: "max-height", 82: "max-width", 83: "min-height", 84: "min-width", 85: "mix-blend-mode", 86: "object-fit", 87: "object-position", 88: "offset-distance", 89: "offset-path", 90: "offset-rotate", 91: "opacity", 92: "orphans", 93: "outline-color", 94: "outline-offset", 95: "outline-style", 96: "outline-width", 97: "overflow-anchor", 98: "overflow-wrap", 99: "overflow-x", …} */