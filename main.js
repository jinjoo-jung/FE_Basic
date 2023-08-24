

let user = {
    name: 'Kim',
    asge:20
}
function sayHi() {
    alert(`나는 ${this.name}이야. 잘부탁해`)
}

user.sayHi = sayHi;
user.sayHi();  // 나는 Kim이야. 잘부탁해

