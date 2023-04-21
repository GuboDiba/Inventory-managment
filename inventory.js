//Create an array containing the names of all items in the inventory.
let grocery=["Oranges","Mellon","Banana","carrot","Cabbages"];

//Create a separate array with the corresponding stock quantities of each item.
let quantity=[5,4,9,23,8];

let addedArray={}
grocery.forEach((key,value) => {
    addedArray[key]=quantity[value]
});
   console.log( addedArray);

//Write a function to add a new item to the inventory, updating both arrays.
function addnewstock() {
  addedArray.Avocado=1
  

}
addnewstock()
console.log(addedArray);

//Write a function to update the stock quantity of an existing item.
function updateStocks() {
    addedArray.Oranges=9
}
updateStocks()
console.log(addedArray);

//Write a function to calculate the total number of items in the inventory.
let sum=0;
function calculateStock() {
    let itemsvalue=Object.values(addedArray)
    const totalNumbers=itemsvalue.reduce((a,b)=>a+b,sum);
    console.log(totalNumbers);
     
}
calculateStock()

//Write a function to find the item with the lowest stock quantity.
function lowestQuantity() {
    let array=Object.values(addedArray)
    let lowestvalue=Math.min(...array)
    console.log(lowestvalue);
    
}
lowestQuantity()
