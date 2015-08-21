(function port() {
function create(tagName, parentElement, attList, style, events, label) {
    var element = document.createElement(tagName);
    var attrName, styleName, eventName;
    for (attrName in attList) {
        element[attrName] = attList[attrName];
    }
    for (styleName in style) {
        element.style[styleName] = style[styleName];
    }
    if (label !== null) {
        element.appendChild(document.createTextNode(label));
    }
    for (eventName in events) {
        element.addEventListener(eventName, events[eventName]);
    }
    parentElement.appendChild(element);
    return element;
}
(function fixed() {
createElement("div", document.body, {id:"maindiv"}, {}, null, "");
createElement("div", maindiv, {id:"fixedDiv"}, {position:"fixed", top:"0", left:"0", width:"30%", height:"100%", border:"1px solid grey", backgroundImage:"url(../../images/bg.jpg)"}, null, "");

})();
})();