var dragula = require("react-dragula")

var boxArray = document.getElementsByClassName("box");
var boxes = Array.prototype.slice.call(boxArray);
dragula({ containers: boxes });