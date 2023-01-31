// 1- 
console.log(this);
// it will print the global object 

// 2- 
const myObj = {
    name: "Timmy",
    greet: function() {
        console.log(`Hello ${this.name}`);
    },
};
myObj.greet();
//that because "this" is trying to access the name property on the global object but it does not exist but it exists in the myObj
//So what do we do to let it refer to our object is to make greet as a regular func so the func will have its own this then it will
//be referring to myObj

const myFuncDec = function() {
    console.log(this);
};
// because we didn't call it, it will not show. but mainly this is pointing to Object global because this will always search for the 
//  the father of its function.
const myFuncArrow = () => {
    console.log(this);
};
myFuncArrow();
// since the myFuncArrow is called in the global., and arrow funcs does not have its own scope 
// then it will also print the main Object global.

document.querySelector(".element").addEventListener(() => {
        console.log(this);
    })
    // it points to the global obj because its an arrow method that does not have its own constructor or its own "this"
    // although you can solve it by putting this method in an random named obj so it will be in it and convert it to 
    // regular method instead of arrow method