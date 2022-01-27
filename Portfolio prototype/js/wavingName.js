// ——————————————————————————————————————————————————
// waving name
// ——————————————————————————————————————————————————
var 
    myText = document.getElementById("bounceTxt").innerHTML,
    myText2 = document.getElementById("bounceTxt2").innerHTML,
    wrapText = "";
    wrapText2 = "";  

  for (var i=0; i<myText.length; i++) {
       wrapText += "<em>" + myText.charAt(i) + "</em>";
  }
  for (var i=0; i<myText2.length; i++) {
    wrapText2 += "<em>" + myText2.charAt(i) + "</em>";
}
  
  document.getElementById("bounceTxt").innerHTML = wrapText;
  document.getElementById("bounceTxt2").innerHTML = wrapText2;
  
  var 
      myLetters = document.getElementsByTagName("em"),
      j = 0;
  
  function applyBounce() {
       setTimeout(function() {
            myLetters[j].className = "bounce-me";
            j++;
            
            if (j < myLetters.length) {
                 applyBounce();
            }
       }, 250);
  }
  
  applyBounce();
  