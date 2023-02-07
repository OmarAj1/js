var obj = {
    FirstName: 'Omar',
    LastName: 'abu amear',
    printName: function() {
        console.log(this.FirstName);
    },
    printName1: function() {
        setTimeout(function() {
            console.log(this.LastName);
        }.bind(this), 3000);
    }
};

obj.printName();
obj.printName1();