function generateFortuneCookie () {
  var node = document.createElement("LI");
  var textnode = document.createTextNode(fortuneList);
  node.appendChild(textnode);
  document.getElementById("fortune-cookie-text").appendChild(node);
}

var fortuneList = ["have good luck", "see something amazing", "do something amazing", "have something bad happen to you", "have nothing happen to you"];
for (var i = 4; i>= 0; i--){
  randomFortune = cloneList.splice(Math.floor(Math.random() * (i + 1)), 1);
  console.log("You will " + randomFortune + ".")
}
