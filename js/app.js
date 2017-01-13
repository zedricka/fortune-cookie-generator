function generateFortuneCookie () {
  var fortunesList = ["Incredible", "Amazing", "Wow", "Bleh"];
  var node = document.createElement("LI");                 // Create a <li> node
  var textnode = document.createTextNode(fortunesList[((Math.random() * 10) + 0)];         // Create a text node
  node.appendChild(textnode);                              // Append the text to <li>
  document.getElementById("fortune-cookie-text").appendChild(node);     // Append <li> to <ul> with id="myList"
}


// https://zenscript.wordpress.com/2013/11/23/how-to-pick-a-random-entry-out-of-an-array-javascript/
// http://stackoverflow.com/questions/13484322/get-random-item-from-array-within-a-for-loop-then-remove-from-array
// http://www.w3schools.com/js/js_htmldom_nodes.asp