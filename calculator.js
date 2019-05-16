var entries = []
var total = 0;
var temp = "";




$("button").click(function() {
  var fired_button = $(this).val();
  var number = Number(fired_button);
  var display = document.querySelector("#display");

  debugger
  if(fired_button === "AC"){
    restart();
    total = 0;
    display.value = total;
  }

  else if (fired_button === "CE") {
    entries.pop();
    display.value = entries.join("");
  }

  else if(fired_button === "=") {
    answer();
    display.value = total;
    restart();

  } else {
    entries.push(fired_button); 
    for (var i = 0; i < entries.length; i++) {
       // var equation = 
        display.value = entries.join("");
    } 
  }

});

function restart() {
  entries = [];
  temp = "";
}

function answer(){
  debugger
  var str = entries.join("");
  total = eval(str);
}