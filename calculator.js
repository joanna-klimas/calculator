var entries = []
var total = 0;
var temp = "";

$("button").click(function() {
  var fired_button = $(this).val();
  var number = Number(fired_button);
  var display = document.querySelector("#display");
debugger
 
  if (fired_button == "AC") ac(); 
  else if (fired_button == "CE") ce();
  else if(fired_button == "=") equals();
  else if(!isNaN(number)){
    entries.push(number); 
    isNumber(); 
  }
  else if(isThisFirstOperator(entries) == false) secondOperator();  
  else {
    entries.push(fired_button); 
    operator();
  }
});


function ac() {
  debugger
  restart();
  total = 0;
  display.value = total;
}

function ce() {
  debugger
  entries.pop();
  display.value = entries.join("");
}

function equals() {
  debugger
  answer();
  display.value = total;
  restart();
  entries[0] = total;
}

function secondOperator() {
  debugger
  answer();
  display.value = total;
  restartWithoutEquals();
}

function isNumber() {
  debugger
  for (var i = 0; i < entries.length; i++) {
    display.value = entries.join("");
  }
}

function operator() {
  debugger
  for (var i = 0; i < entries.length; i++) {
    display.value = entries.join("");
  }
}  

function restart() {
  debugger
  entries = [];
  temp = "";
}

function answer() {
  debugger
  total = eval(entries.join(""));
}

function restartWithoutEquals () {
  debugger
  entries = [];
  temp = "";
  entries[0] = total;
  alert("if you just clicked operator, click it again! professional bug fixing;)");
}

function isThisFirstOperator (arr) {
  debugger
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] == "*" || arr[i] == "/" || arr[i] == "+" || arr[i] == "-") {
    return false;  
    }
  }
}