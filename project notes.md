XNo values have been stored and the operator is selected.

XNum1 has been stored and the operator is selected.

XNum1 and Num2 have been stored and the operator is selected.

XPressing an operator when num2 is empty causes an error

XRounds numbers greater than 4 digits (currently toFixed shows 4 decimal places no matter what)

XPressing equals when num1 or num2 is empty causes an error message

XSnarky message is displayed when attempting to divide by 0

Xmultiple periods are rejected

Xnum1 and operator are displayed, when num2 is typed, it does not delete the current display

Xnegative numbers?

XBUG: tempNum is  | num1 is 3 | operation is + | num2 is 5 | result is 8
Xthere is no space between the operator and and next number on the display

WISH LIST: Change an operator after it's already been selected (before selecting num2)
WISH LIST: After hitting the equals button, user should be able to select an operator and create another calculation using the 
    result (right now selecting a new number starts a new calculation and selecting an operator would display an error)
EXTRA CREDIT: Add a “backspace” button, so the user can undo their last input if they click the wrong number.
EXTRA CREDIT: Add keyboard support!
WISH LIST: Write Jest tests for the scenarios below:



Test - Common
use operator to calculate - single digit, positive, whole numbers, addition
use operator to calculate - single digit, positive, whole numbers, subtraction
use operator to calculate - single digit, positive, whole numbers, multiplication
use operator to calculate - single digit, positive, whole numbers, division
use operator to calculate - single digit, positive, whole numbers, all 4 operators
use operator to calculate - double digit, positive, whole numbers, addition
use operator to calculate - double digit, positive, whole numbers, subtraction
use operator to calculate - double digit, positive, whole numbers, multiplication
use operator to calculate - double digit, positive, whole numbers, division
use operator to calculate - double digit, positive, whole numbers, all 4 operators
use operator to calculate - single digit, negative, whole numbers, addition
use operator to calculate - single digit, negative, whole numbers, subtraction
use operator to calculate - single digit, negative, whole numbers, multiplication
use operator to calculate - single digit, negative, whole numbers, division
use operator to calculate - single digit, negative, whole numbers, all 4 operators
use operator to calculate - single digit, positive, floating numbers, addition
use operator to calculate - single digit, positive, floating numbers, subtraction
use operator to calculate - single digit, positive, floating numbers, multiplication
use operator to calculate - single digit, positive, floating numbers, division
use operator to calculate - single digit, positive, floating numbers, all 4 operators
use operator to calculate - single digit, negative, floating numbers, addition
use operator to calculate - single digit, negative, floating numbers, subtraction
use operator to calculate - single digit, negative, floating numbers, multiplication
use operator to calculate - single digit, negative, floating numbers, division
use operator to calculate - single digit, negative, floating numbers, all 4 operators
use equals sign to calculate - single digit, positive, whole numbers, addition
use equals sign to calculate - double digit, positive, whole numbers, subtraction
use equals sign to calculate - single digit, negative, whole numbers, multiplication
use equals sign to calculate - single digit, positive, floating numbers, division


Test - Edge Case
type a period '.' before a number
type a 2nd period e.g. 5.4.3
divide by 0
selecting 2 operators back to back
select equals sign back to back
backspace works (if implemented)
