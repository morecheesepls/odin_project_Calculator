# odin_project_Calculator
Calculator Project in the Odin Project Foundations Course

Warning
Before you get started with the project, we need to cover a word of warning. As you look into how to evaluate complex mathematical statements in JavaScript, you will likely come across the tantalizing eval() function. However, this function can be very dangerous and MDN does a good job documenting why you should never use eval! You’ll need to build your own functions to evaluate expressions as part of this project. On the same note, when researching how to calculate expressions, you may encounter solutions that suggest that you return a new Function() that evaluates a string. Similarly to eval(), this should not be used due to potential pitfalls of evaluating insecure data. Besides, where’s the fun in solutions that do all the work for you? Let’s get to it!


DO NOT USE
use eval()
return a new Function() that evaluates a string


# Instructions

1. DONE
Your calculator is going to contain functions for all of the basic math operators you typically find on calculators, so start by creating functions for the following items and testing them in your browser’s console:
    * add
    * subtract
    * multiply
    * divide

2. DONE
A calculator operation will consist of a number, an operator, and another number. For example, 3 + 5. Create three variables, one for each part of the operation. You’ll use these variables to update your display later.

3. DONE
Create a new function __operate__ that takes an operator and two numbers and then calls one of the above functions on the numbers.

4. DONE
Create a basic HTML calculator with buttons for each digit and operator (including __=__).
    * Don’t worry about making them functional just yet.
    * There should also be a display for the calculator. Go ahead and fill it with some dummy numbers so it looks correct.
    * Add a “clear” button.

5. DONE
Create the functions that populate the display when you click the digit buttons. You should store the content of the display (the number) in a variable for use in the next step.

6. DONE
Make the calculator work! You’ll need to store the first and second numbers input by the user and then __operate()__ on them when the user presses the __=__ button, according to the operator that was selected between the numbers.
    *You should already have the code that can populate the display, so once operate has been called, update the display with the result of the operation.
    * This is the hardest part of the project. You need to figure out how to store all the values and call the operate function with them. Don’t feel bad if it takes you a while to figure out the logic.

7. DONE Gotchas: watch out for and fix these bugs if they show up in your code:
    DONE * **Your calculator should not evaluate more than a single pair of numbers at a time.** Example: you enter a number (__12__), followed by an operator button (__+__), a second number button (__7__), and a second operator button (__-__). Your calculator should then do the following: first, evaluate the initial pair of numbers (__12 + 7__), then display the result of that calculation (__19__). Finally, use that result (19) as the first number in a new calculation, along with the next operator (__-__). An example of the behavior we’re looking for can be seen in this [student’s calculator live preview](https://mrbuddh4.github.io/calculator/).
    DONE * You should round answers with long decimals so that they don’t overflow the display.
    DONE * Pressing __=__ before entering all of the numbers or an operator could cause problems!
    DONE * Pressing “clear” should wipe out any existing data. Make sure the user is really starting fresh after pressing “clear”.
    DONE * Display a snarky error message if the user tries to divide by 0… and don’t let it crash your calculator!
    DONE * Make sure that your calculator only runs an operation when supplied with two numbers and an operator by the user. Example: you enter a number (__2__), followed by an operator button (__+__). You press the operator button (__+__) a second consecutive time. Your calculator should not evaluate this as (__2 + 2__) and should not display the result (__4__). If consecutive operator buttons are pressed, your calculator should not run any evaluations, it should only take the last operator entered to be used for the next operation.
    DONE * When a result is displayed, pressing a new digit should clear the result and start a new calculation instead of appending the digit to the existing result. Check whether this is the case on your calculator!


Extra credit
    DONE * Users can get floating point numbers if they do the math required to get one, but they can’t type them in yet. Add a . button and let users input decimals! Make sure you don’t let them type more than one though, like: 12.3.56.5. Disable the . button if there’s already a decimal separator in the display.
    DONE * Add a “backspace” button, so the user can undo their last input if they click the wrong number.
    DONE * Add keyboard support!