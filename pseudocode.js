//create an empty arrey called "entries"
//create a variable total equal to zero

//create a variable called total that is an empty string


// create a function that will handle all of the clicks on the calculator

//inside of that function create a variable val that will take a user input	from the form
  
//if an input in the form in the calculator (from the buttons) is not a number or the input is a ".", 
// 1. add it to a "temp" variable and store there for next event
  
  
  // Got a number, add to temp

    
  // Got some symbol other than equals, add temp to our entries
  // then add our current symbol and clear temp
  // otherwise if the value clicked is "AC" button, clear entires object to an empty arrey, set a temp string to empty string and set total variable to equal zero 
    //so basicaly when AC is clicked, all the variables are being restarted


  // Clear last entry
  // else if button clicked is "CE", set a temp variable to and empty, so CE button restarts temp variable, meaning deletes the last entry   

    
  // Change multiply symbol to work with eval
   // if the "x" button is clicked, push that temp value into entries array, also push "*" into entries array, and restart temp string to an empty string

    
  // Change divide symbol to work with eval
  //else if button clicked is divide symbol (verid + with dots) push a temp content into entries array followed by "*" symbol, and again set temp variable to an empty arrey  


  // Got the equals sign, perform calculation
   // when button pushed is =, push temp variable into entries arrey, create a variable nt and set it to a function
    //this function is a number function that takes first element of the entries array, loops entries array
    //inside of the loop create a nextNum variable and set it to a number function that takes next element of entries arrey (i+1)
    //and create a variable symbol that takes current entries element [i]
    
    // so if symbol variable is a + than take a nt variable which is first number element of entries array and add it to a nextNum variable
    //else if symbol is minus"-", take nt variable and subtract it from nextNum variable
    //else if symbol is a star *, take nt variable and deivide it by nextNum variable
    //else if the symbol is front slash, take nt variable and divide it by the nextNum variable
    //and go into the next element from the array (I dont get why is there i++ there...)

    
    // Swap the '-' symbol so text input handles it correctly
    //if nt variable is less then 0, take an absolute value of the nt variable and add "-" symbole the the string (is this function responsible for displaying?)

  
    //take "answer" id element from html and push the answer to this element, restart the entries arrey, and ser temp string to an empty string

    
  // else Push number, if the answer is not ready (so when = has not been pressed yet), so take enries arrey, push temp to in, take entries arrey and push. really, I have no clue what this does
