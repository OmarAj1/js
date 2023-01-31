const storm = {
    superPower: "flying",
    printSuperPower: function() {
        console.log("my superpower is " +
            this.superPower);
    }
}
storm.printSuperPower()

//"this" here is accessing the global object and since it doesn't have a key value named "name" 
// then its undefined.

//to solve that I passed the func into the obj so it will be its father obj.