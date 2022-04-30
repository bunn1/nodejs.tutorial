const sum = (num1, num2) => num1 + num2;
const PI =3.14;
class SomeMathObject{
    constructor() {
        console.log('object created');
    }
}

// Funktionen är redo för att användas
module.exports.sum = sum;
module.exports.PI = PI;
module.exports.SomeMathObject = SomeMathObject;
