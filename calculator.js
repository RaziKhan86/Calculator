const display = document.getElementById('display');

function addvalue(value)
{
    display.value += value;
}

function Clearvalue()
{
    display.value = "";
}

function calculate(value)
{
    try{
        display.value = Function(`return ${display.value}`) ();
    }
    catch(e)
    {
        display.value = e.value;
    }
}


/* Canculation
 Function(`return ${display.value}`) () :- 

Template Literal Usage (${display.value}):

display.value contains the user-entered expression (e.g., "3+5*2").

It gets inserted into the string return ${display.value} dynamically.

Function Constructor (Function()):

Function() creates a new function dynamically.

The string inside the constructor becomes the function body.

Example: Function("return 3+5*2") creates a function that returns 13.

Executing the Function (()):

The () at the end immediately calls the created function.

If display.value = "3+5*2", the function runs return 3+5*2 and outputs 13.

Why Use Function() Instead of eval()?
Safer than eval(): eval() can access the full scope and execute arbitrary JavaScript, making it risky.

Restricted Scope: Function() creates a function in its own scope, limiting potential security vulnerabilities.

Edge Case Handling:
If the input is invalid (e.g., 5++6), an error occurs.

The try...catch block prevents crashes and shows an alert for invalid input.
*/