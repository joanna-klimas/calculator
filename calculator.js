var entries = []
var total = 0;
var temp = "";

$("button").click(function() {
  var fired_button = $(this).val();
  var number = Number(fired_button);
  var display = document.querySelector("#display");

  switch(fired_button)
  {
    case "AC":
      restart();
      total = 0;
      display.value = total;
      break;

    case "CE":
      entries.pop();
      display.value = entries.join("");
      break;

    case "=":
      answer();
      display.value = total;
      restart();
      break; 

    default:
      entries.push(fired_button); 
      for (var i = 0; i < entries.length; i++) {
        display.value = entries.join("");
      } 
  }

});

function restart() {
  entries = [];
  temp = "";
}

function answer() {
  total = eval(entries.join(""));
}