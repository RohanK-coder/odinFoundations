const calculator = (function () {
    const add = (a,b) => {
        return a+b;
    }
    const sub = () => {
        return a-b;
    }
    const multiply = () => {
        return a*b;
    }
    
    return {add,sub,multiply};

})();

console.log(calculator.add(2,3));