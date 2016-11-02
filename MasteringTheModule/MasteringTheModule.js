/**
 * Created by bidro on 11/3/2016.
 */
/*https://toddmotto.com/mastering-the-module-pattern/
 *
 * */
/*
 * To understand what a Module can give you ,you will need to understand
 * what the following function concept does:
 * */
(function () {
    //code
})();

/*
 * It declares a function which then calls itself immediately . These are also known as Immidiately-Invoke-Function-Expression
 * in which the function creates new scope and creates privacy. Javascript doens't have privacy
 * but creating new scope smulates this when we wrap all our function logic inside them.
 * The idea then is to return only the parts we need,leaving other code
 * is to return only the parts we need, leaving the other code out of the global scope.

 After creating new scope, we need to namespace our code so that we can access any methods we return. Let’s create a namespace for our anonymous Module.
 * */

var Module = (function () {

    //code
    //We then have Module declared in the global scope, which means we can call it wherever we like, and even pass it into another Module.
})();

//
