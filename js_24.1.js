    function Square(a, b, c, d) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }
    const square1 = new Square(10, 10, 11, 10);

    Square.prototype.isSquare = function() {
        const arr = [a = this.a, b = this.b, c = this.c, d = this.d];
        for (let i = 1; i < arr.length; i++) {
            if (arr[0] !== arr[i]) {
                return false;
            }
        }
        return true;
    }
    console.log(square1.isSquare());