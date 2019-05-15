var entries = []
var total = 0;

var temp = "";

$("button").click(function() {
  debugger
  var fired_button = $(this).val();
  var val = Number(fired_button);
  var display = document.getElementById("display");


  if(!isNaN(val)){
    temp = val;
    display.value = temp;
  }

  if(fired_button == "AC"){
    entries = [];
    temp = " ";
    total = 0;
    display.value = total;
  }

  if (fired_button == "CE") {
    temp = " ";
    display.value = temp;
  }
  
  else if(isNaN(val) && fired_button != "=") {
    entries.push(temp);
    temp = fired_button;
    entries.push(temp);
  }

  else if(fired_button == "=") {
    entries.push(temp);
    calculation();
    display.value = total;
    entries = [];
    temp = " ";
  }
  
  //display.value = temp;
  console.log(entries);
});


function calculation(){
  if (entries[1] == "+") {
    total = entries[0] + entries[2]
  }
  else if (entries[1] == "-") {
    total = entries[0] - entries[2]
  }
  else if (entries[1] == "/") {
    total = entries[0] / entries[2]
  }
  else if (entries[1] == "*") {
    total = entries[0] * entries[2]
  }
}

