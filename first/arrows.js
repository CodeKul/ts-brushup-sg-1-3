function sal() {
    return 45;
}
let exp = function () {
    return sal() / 3;
}

let overs = function () { // clojure
    return function () {
        return 10;
    }
}

let ov1 = overs;
console.log('' + ov1()()); // iife

let strikeRate = function (callback) {
    setTimeout(() => callback(), 1500);
}

strikeRate(function () {
    console.log(this);
});

let myFn = () => {
    console.log(this);
};
myFn();
