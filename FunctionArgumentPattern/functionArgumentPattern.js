/*
 *
 *   Magic Arguments
 *   Arguments aren't required like .NET languages.
 *   Like all variables in Javascript arguments are untyped
 *   Unspecified arguments become undefined.
 *   Arguments available through the arguments object
 *   ----------"It's array-like but not really an array.
 * */

function myFunc(a, b, c) {
    for (var obj in arguments) {
        console.log('index   ' + obj + '  is ' + arguments[obj]);

    }
    //console.log(arguments[1]);


    //return a + b + c;
}

console.log(myFunc(1, 3, 3))// this scenario output is 1,3,3,
/*console.log(myFunc(1, 3, 3));*/


function  myFunctionArgument() {
    var x=0;
    for (var i = 0, len = arguments.length; i < len; i++) {
        x = x + arguments[i];
    }
    return x;
}


