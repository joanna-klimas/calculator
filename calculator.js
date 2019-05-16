var entries = []
var total = 0;

var temp = "";

$("button").click(function() {
  var fired_button = $(this).val();
  var val = Number(fired_button);
  var display = document.getElementById("display");

  if(!isNaN(val)){
    temp = val;
    entries.push(val);
    
    for (var i = 0; i < entries.length; i++) {
      if (!isNaN(entries[i])){
        var longNumber = entries.join("");
        display.value = longNumber;
      } else {
        display.value = temp;
      }
    }
  }  

  else if(fired_button == "AC"){
    restart();
    total = 0;
    display.value = total;
  }

  else if (fired_button == "CE") {
    temp = " ";
    display.value = temp;
  }
  
  else if(isNaN(val) && fired_button != "=") {
    temp = fired_button;
    entries.push(temp); 
  }

  else if(fired_button == "=") {
    answer();
    display.value = total;
    restart();
  }
});

function restart() {
  entries = [];
  temp = " ";
}

function answer(){
  debugger
  var str = entries.join("");
  total = eval(str);
}

