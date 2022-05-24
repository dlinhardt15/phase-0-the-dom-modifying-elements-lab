// Write your code here!
main.remove();
const newHeader = document.createElement("h1");
document.body.appendChild(newHeader)
newHeader.setAttribute("id", "victory")
const textNode = document.createTextNode("Danny is the champion");
newHeader.appendChild(textNode);
