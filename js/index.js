// Prevent us from attempting to use variables
// that are not declared
"use strict"
let shoppingList = ["Flour", "sugar", "eggs", "butter", "chocolate chips"];
console.log(shoppingList); //displays entire list

console.log(shoppingList[2]); //outputs third in array (arrays start at 0)

shoppingList.shift(); //removes first item from array

console.log(shoppingList); //should output minus first item

shoppingList.push("brown sugar"); //add to list

console.log(shoppingList);

shoppingList.pop(); //removes last item in array
console.log(shoppingList);


