// function greet(name){
//     console.log('Hello' + name)
// }

// greet('Henry');

// let greet = function(name){
//     console.log('Hello' + name)
// }

// greet('Henry');

// let greet = (name) => {
//     console.log('Hello' + name)

// }
// greet('Henry');
//one of the ways to write a function

// let greet = function(name){
//     console.log('Hello' + name)
// }

// greet();
//Another way to write the function


// let greet = function(name, time='day'){
//     console.log('Good' + time + name)
// }

// greet('Henry','night');
//inserting 'day' or 'night' in greet will print out different result



//slide 14
// const radiusPara = document.querySelector("#radius");
// console.log(radiusPara)
// const resultPara = document.querySelector("#result");
// console.log(resultPara)


// //slide 10

// function circleAreaCalculation(radius)
// {
   
//     if (isNaN(radius)) {
//         //alert('This is not a string')
//         //update the textContent or innerText property of the resultParagraph
//     } else {
//         let area = Math.PI + radius * radius
//         return area;
//     }

// }

// let userValue = prompt("Enter a number");
// radiusPara.textContent = userValue;
// let result = circleAreaCalculation(userValue);

// if (result !== undefined)
//     resultPara.textContent = 'The area of a cricle with radius {} is {result.toFixed}'

// alert('The area of a cricle with radius {} is {result.toFixed}')


// // //slide 13

const ulList = document.querySelector(".shopping");
function populateList(shoppingListArray){
//for each item in the shoppingListArray, add a list item with its value to the ul 
for (let item of shoppingListArray) {
     //console.log(item)
    //make a new li
    const newLi = document.createAttributeElement("Li");
    //update the li's text to item
    newLi.textContent = item;
    //append li to the ul
    // parent_node.appendchild(child_node)
    ulList.appendchild(newLi);
}

}

let myShoppingList = ["cheese", "bread", "green pepper"];
populateList(myShoppingList)

