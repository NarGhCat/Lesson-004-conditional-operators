'use strict';

function prod(numOne, numTwo, numThree) {
  if (numOne > 0 && numTwo > 0 && numThree > 0) {
    alert("+");
  } else if (numOne < 0 && numTwo < 0 && numThree < 0) {
        console.log("-");
  } else if (numOne > 0 && numTwo < 0 && numThree < 0)
        {
          console.log("+");
        }
        else if (numOne < 0 && numTwo > 0 && numThree < 0)
        {
          console.log("+");
        }
        else if (numOne < 0 && numTwo < 0 && numThree > 0) {
          console.log("+")
        } else 
          console.log("-");
        }
prod(3, 5, -7);